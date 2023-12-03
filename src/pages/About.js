import React from 'react'

const About = () => {
  return (
    <div class="about">
        <h1>About Us</h1>
        <p>
          Welcome to our Next.js application! This is the about page where you can learn more
          about who we are and what we do.
        </p>

        <section>
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, nisl eu
            tincidunt dapibus, leo sapien placerat odio, id suscipit nisi mauris a purus. Sed
            malesuada urna vitae nulla aliquet, in euismod metus tincidunt.
          </p>
        </section>

        <section>
          <h2>Our Team</h2>
          <p>
            Meet the amazing people behind this Next.js application. We are a diverse team of
            passionate individuals dedicated to creating awesome web experiences.
          </p>
          {/* Add team members' information here if needed */}
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            Have questions or want to get in touch? Feel free to reach out to us through our
            contact form or via email at <a href="mailto:info@example.com">info@example.com</a>.
          </p>
        </section>
    </div>
  )
}

export default About