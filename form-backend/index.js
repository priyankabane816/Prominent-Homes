const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const nodemailer = require('nodemailer');
const services = require('./services');
const properties = require('./properties');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/services', (req, res) => {
  res.json(services); // ✅ using the imported variable here
});

app.get('/properties', (req, res) => {
  // Return JSON array of properties here
  res.json(properties);
});
// Example backend route in Express:
app.get('/properties/:id', (req, res) => {
  try {
    const id = req.params.id;
    console.log('Requested property ID:', id);

    const property = properties.find(p => p.id.toString() === id);

    if (!property) {
      console.log('Property not found for ID:', id);
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  } catch (error) {
    console.error('Error fetching property:', error);  // Full error object here
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/contact', (req, res) => {
  const formData = req.body;

  // Save to messages.json
  fs.readFile('messages.json', 'utf8', (err, data) => {
    const existingMessages = data ? JSON.parse(data) : [];
    existingMessages.push(formData);
    fs.writeFile('messages.json', JSON.stringify(existingMessages, null, 2), () => {
      console.log('Data saved to messages.json');
    });
  });

  // Send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'banepriyanka4@gmail.com',       // <-- your Gmail address
      pass: 'intf breh kdgj ahur',          // <-- your Gmail app password
    }
  });

  const mailOptions = {
    from: formData.email,
    to: 'banepriyanka4@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email error:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Message saved and email sent!' });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
