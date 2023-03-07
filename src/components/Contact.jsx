import React from "react";

const Contact = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-sky-500 w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className="pt-2 text-sky-100 text-sm">
              We will answer as soon as possible
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <ion-icon
                name="call"
                className="text-sky-300 text-xl"
              ></ion-icon>
              <span> Phone</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon
                name="mail"
                className="text-sky-300 text-xl"
              ></ion-icon>
              <span> Mail</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon
                name="location"
                className="text-sky-300 text-xl"
              ></ion-icon>
              <span> Adresse </span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <a href="https://www.facebook.com/pages/category/religious-organization/Islamsk-Oppl%C3%A6ringssenter-Masjid-Al-Noor-565284760294957/">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </div>
        </div>
        <div>
          <div className="w-full h-full bg-white p-8 text-gray-600 rounded-xl shadow-lg">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                Your inquiry
                </label>
                <textarea
                  placeholder="Your inquiry"
                  rows={5}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-300"
                ></textarea>
              </div>
              <button className="inline-block self-end bg-sky-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
