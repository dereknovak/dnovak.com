import { useState } from "react";

const Modal = ({ visibility, setVisibility }) => {
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

  const closeModal = () => {
    setVisibility('hidden');
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

    if (response.status === 200) {
      alert('Message sent!');
      resetFormData();
      console.log(response);
      closeModal();
    } else {
      console.error(`Error ${response.status}: ${response.statusText}`);
    }
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
      <div
        className={visibility}
        id='modal-layer'
        onClick={closeModal}>
      </div>
      <div className={visibility} id='form-modal'>
        <h1>Contact</h1>

        <form id='contact-form' method='POST' action='' onSubmit={handleFormSubmission}>
          <dl>
            <div className='name'>
              <dt>Name:</dt>
              <dd>
                <input
                  id='name-input'
                  type='text'
                  name='name'
                  placeholder="John Doe"
                  required
                  onChange={updateFormText}
                />
              </dd>
            </div>

            <div className='email'>
              <dt>Email:</dt>
              <dd>
                <input
                  id='email-input'
                  type='email'
                  name='email'
                  placeholder="example@example.com"
                  required
                  onChange={updateFormText}
                />
              </dd>
            </div>
          </dl>

          <textarea
            name='message'
            placeholder="Your message here."
            autoCorrect="on"
            required
            onChange={updateFormText}
          />

          <input
            id='contact-form-submit'
            type='submit'
            value='Send'
          />
        </form>
      </div>
    </>
  );
};

export default Modal;