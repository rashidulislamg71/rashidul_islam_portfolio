const Contact = () => {
  return (
    <section id="contact" className="py-20 px-5 bg-base-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <textarea
                className="textarea textarea-bordered w-full h-40"
                placeholder="Message"
              ></textarea>

              <button className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;