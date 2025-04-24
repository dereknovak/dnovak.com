import { ChangeEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
    });

    alert('Message sent!');
    resetFormData();
    console.log(response);
  };

  const updateFormText = (e: ChangeEvent) => {
    const target = e.target

    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>Contact</h1>

      <form method='POST' action='' onSubmit={handleFormSubmission}>
        <dl>
          <dt>Name:</dt>
          <dd>
            <input
              type='text'
              name='name'
              placeholder="John Doe"
              onChange={updateFormText}
            />
          </dd>

          <dt>Email:</dt>
          <dd>
            <input
              type='email'
              name='email'
              placeholder="example@example.com"
              onChange={updateFormText}
            />
          </dd>
        </dl>

        <textarea
          name='message'
          placeholder="Your message here."
          onChange={updateFormText}
        />

        <input
          id='contact-form-submit'
          type='submit'
          value='Send'
        />
      </form>
    </>
  )
};

export default Contact;