const fs = require('fs');
const file = 'src/app/facilities/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldFormSubmit = `onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your order request. Our dispatch team will contact you shortly.');
                (e.target as HTMLFormElement).reset();
              }}`;

const newFormSubmit = `onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = {
                  plant: formData.get('plant'),
                  product: formData.get('product'),
                  qty: formData.get('qty'),
                  location: formData.get('location'),
                  message: formData.get('message'),
                };

                const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                btn.disabled = true;

                try {
                  const res = await fetch('/api/send-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  
                  if (res.ok) {
                    alert('Thank you for your order request! An email has been sent to our dispatch team.');
                    form.reset();
                  } else {
                    alert('There was a problem sending your request. Please try again later.');
                  }
                } catch (error) {
                  alert('Error sending request. Please check your network connection.');
                } finally {
                  btn.innerText = originalText;
                  btn.disabled = false;
                }
              }}`;

content = content.replace(oldFormSubmit, newFormSubmit);
fs.writeFileSync(file, content, 'utf8');
console.log('Updated form submission logic');
