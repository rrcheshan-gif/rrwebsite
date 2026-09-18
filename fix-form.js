const fs = require('fs');
const file = 'src/app/facilities/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldHandleSubmit = `  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your aggregates inquiry! Our aggregate logistics manager will contact you with a customized quote shortly.');
    (e.target as HTMLFormElement).reset();
  };`;

const newHandleSubmit = `  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      plant: formData.get('plant'),
      product: formData.get('product'),
      qty: formData.get('qty'),
      location: formData.get('location'),
      message: formData.get('message'),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        alert('Thank you for your aggregates inquiry! An email has been successfully sent to our dispatch team. We will contact you shortly.');
        form.reset();
      } else {
        alert('There was a problem sending your request. Please try again later.');
      }
    } catch (error) {
      alert('Error sending request. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };`;

content = content.replace(oldHandleSubmit, newHandleSubmit);

// We also need to update the submit button to show loading state
content = content.replace(
  '<button type="submit" className="btn btn-primary">Submit Order Request</button>',
  '<button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Submit Order Request"}</button>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated handleSubmit');
