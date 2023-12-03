import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
           <section>
          <h1>Contact Us</h1>
          <p>
            Whether you have a question about our services, want to inquire about career
            opportunities, or just want to say hello, we'd love to hear from you!
          </p>
        </section>

        <section>
          <h2>Reach Out</h2>
          <p>
            Feel free to contact us through the following channels:
          </p>
      
        </section>

        <section>
          <h2>Contact Form</h2>
          <p>
            Alternatively, you can use the form below to send us a message:
          </p>
          {/* Add your contact form component here */}
        </section>
    </div>
  )
}

export default Contact