import React from "react";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const { handleSubmit, register } = useForm();
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="w-4/5 md:w-1/3 md:h-1/3">
        <h2 className="text-5xl font-bold text-center">Let's Talk</h2>
        <form action="https://formspree.io/f/mlevqarp" method="post" className="my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              name="name"
              id="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email Address"
              name="email"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              type="text"
              placeholder="How Can I Help You?"
              name="message"
              className="textarea input-bordered w-full"
              rows={`4`}
              cols={`30`}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="btn btn-primary btn-sm mt-5 items-centr"
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
