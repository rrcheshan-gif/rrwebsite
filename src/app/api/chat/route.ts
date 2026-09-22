import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SITE_CONTEXT } from './site-context';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      // Fallback rule-based logic if API key is not set
      return ruleBasedFallback(message);
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `You are the official AI Assistant for RR Construction (Pvt) Ltd, embedded directly on their website.
You must answer questions strictly based on the following context. If a user asks something completely unrelated to construction or the company, politely guide them back to RR Construction. Always be professional, helpful, and concise.

SITE CONTEXT:
${SITE_CONTEXT}

When answering, feel free to suggest they check specific pages (like Resources, Projects, or Careers) or contact info@rrconstruction.lk.`;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am the RR Construction AI assistant. I will use the provided context to answer all questions." }],
        },
        ...history.map((h: any) => ({
          role: h.sender === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        }))
      ],
      generationConfig: {
        maxOutputTokens: 250,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ reply: "I'm sorry, I encountered a temporary error connecting to my brain. Please try again or call us at 011-2433427." }, { status: 500 });
  }
}

function ruleBasedFallback(message: string) {
  let botResponse = "Our AI system is currently being upgraded (API Key missing). However, you can call us at 011-2433427 for immediate assistance.";
  const lower = message.toLowerCase();
  
  if (lower.match(/hello|hi|hey|ayubowan|good morning|good afternoon/)) {
    botResponse = "Hello there! How can I assist you with RR Construction services today?";
  } else if (lower.match(/contact|phone|call|email|reach|number/)) {
    botResponse = "You can reach us directly at 011-2433427 or email us at info@rrconstruction.lk.";
  } else if (lower.match(/address|location|where|office/)) {
    botResponse = "Our head office is located in Colombo, Sri Lanka. We also operate batching plants and project sites island-wide.";
  } else if (lower.match(/services|what do you do|expertise/)) {
    botResponse = "We specialize in Road Construction, Bridges, Maritime Construction, Dredging, and Water Infrastructure. Check out our Services menu!";
  } else if (lower.match(/career|job|vacancy|work|apply/)) {
    botResponse = "We are always looking for talented individuals! Please visit our Careers page to submit your application and CV.";
  } else if (lower.match(/project|portfolio|built/)) {
    botResponse = "We have completed many landmark projects across Sri Lanka, including major highways, bridges, and the Ircon Mannar Railway project.";
  } else if (lower.match(/m-sand|sand|aggregate|concrete|material/)) {
    botResponse = "We produce high-quality M-Sand, aggregates, and ready-mix concrete. You can request a quote directly from our Resources section!";
  } else if (lower.match(/price|cost|quote|estimate/)) {
    botResponse = "For pricing and quotes, please visit the specific material page under Resources and use the 'Request Quote' form.";
  }

  return NextResponse.json({ reply: botResponse });
}
