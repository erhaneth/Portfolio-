export const generateEmailContent = (name, email, message) => {
  return {
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h1 style="color: #fccb27; text-align: center;">New Contact Form Submission</h1>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h2 style="color: #333; margin-top: 0;">Message:</h2>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="text-align: center; margin-top: 20px; color: #888;">This email was sent from your portfolio website's contact form.</p>
        </div>
      `,
  };
};
