import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="gap-16 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="text-center sm:text-lg">
            <h2 className="text-left mb-4 text-4xl tracking-tight font-bold">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4 text-left text-gray-500">
              We are a multinational company that designs an integrated solution
              for automation and security since 2015. We are the smart choice
              when it comes to Gate Automation, Door Automation, Boom Barrier &
              Security Automation Systems. We have easy and simple to use
              systems to suit every financial plan. Keeping our clients in mind,
              we provide quality products and services. Imagine pulling through
              your automated gates to see your doors and windows lit up to
              welcome you home, feeling safe and secure knowing that our
              electric fence and alarm system has you covered. For those away
              from home, our Wi-Fi cameras offer you extra support. Our
              solutions, ideal both for residential and industrial use, combine
              technology and innovation to make everyday movements simpler and
              safer.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-sky-500">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-sky-500">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-sky-500">100K</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
