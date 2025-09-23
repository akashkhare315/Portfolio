import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css"; // custom css

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with API call
    reset();
  };

  return (
    <div className="contact-container">
      {/* Section Title */}
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <hr className="divider" />

      {/* Two-column layout */}
      <div className="contact-grid">
        {/* Info Section */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            <span>Email:</span>{" "}
            <a href="mailto:akashkhare135@gmail.com">
              akashkhare135@gmail.com
            </a>
          </p>
          <p>
            Feel free to reach out if you want to collaborate, discuss a
            project, or just say hi. I’d love to connect with you!
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <textarea
            placeholder="Message"
            rows="5"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <p className="error">{errors.message.message}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
