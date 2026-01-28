import React from 'react';

const Contact = () => {
  return (
    <section className="text-white px-8 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT CARD */}
        <div className="rounded-2xl p-10 w-[568px]">
          <p className="text-sm font-karla text-secondary mb-4">
            Contact me
          </p>

          <h2 className="text-5xl font-firacode font-bold text-secondary leading-tight mb-6">
            Let's work<br />together
          </h2>

          <p className="text-lg font-semibold mb-3">
            Got a problem to solve?
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Encourage people to contact you and describe what role you are interested in. 
            Show that you will add value to their projects through your work.
          </p>

          <p className="text-gray-400">
            Need a Frontend developer?{" "}
            <span className="text-secondary font-medium cursor-pointer hover:underline">
              Let's talk!
            </span>
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl p-10 w-[568px]">
          <form className="space-y-8">
            
            {/* Name */}
            <div>
              <label className="font-firacode block text-secondary text-sm mb-2">
                What's your name?
              </label>
              <input
                type="text"
                placeholder="Your name goes here"
                className="font-karla w-full bg-transparent border-b border-secondary focus:border-secondary outline-none py-2 text-white placeholder-gray-500 hover:placeholder-white transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-firacode block text-secondary text-sm mb-2">
                What's your email?
              </label>
              <input
                type="email"
                placeholder="youremail@email.com"
                className="font-karla w-full bg-transparent border-b border-secondary focus:border-secondary outline-none py-2 text-white placeholder-gray-500 hover:placeholder-white transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-firacode block text-secondary text-sm mb-2">
                How can I help you?
              </label>
              <textarea
                rows={3}
                placeholder="Hello Lukas, I am interested in..."
                className="font-karla w-full bg-transparent border-b border-secondary focus:border-secondary outline-none py-2 text-white placeholder-gray-500 hover:placeholder-white transition-colors resize-none"
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <input
                type="checkbox"
                className="mt-1 accent-secondary hover:cursor-pointer"
              />
              <p className="font-karla">
                I've read the{" "}
                <span className="text-secondary hover:underline cursor-pointer">
                  privacy policy
                </span>{" "}
                and agree to the processing of my data as outlined.
              </p>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="font-karla px-6 py-2 rounded-full border border-white/30 text-white hover:border-secondary hover:text-secondary transition"
              >
                Say Hello :)
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
