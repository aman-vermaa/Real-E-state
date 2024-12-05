import React from "react";

export default function About() {
  const openLinkedInProfile = () => {
    window.open(
      "https://www.linkedin.com/in/aman-verma-7342631b9/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-black mb-8">
        About{" "}
        <span className="text-[#8A8578]">
          Haven<span className="text-[#3A3A3A]">Roost</span>
        </span>
      </h1>

      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 leading-relaxed">
          At HavenRoost, we make finding your perfect home or investment
          property a seamless and exciting experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-lg text-gray-700">
          <h2 className="text-2xl font-semibold text-slate-500">Our Mission</h2>
          <p>
            HavenRoost is committed to transforming the real estate journey. Our
            mission is to assist you in buying, selling, and renting properties
            with ease and confidence.
          </p>
          <p>
            Our team of dedicated experts is always here to offer personalized
            guidance, ensuring you make informed decisions at every step.
          </p>
        </div>

        <div className="space-y-6 text-lg text-gray-700">
          <h2 className="text-2xl font-semibold text-slate-500">
            Why Choose Us
          </h2>
          <ul className="list-disc list-inside">
            <li>Expert knowledge of the local market</li>
            <li>Personalized service for every client</li>
            <li>
              Comprehensive support through every phase of the transaction
            </li>
            <li>Commitment to making your experience smooth and enjoyable</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-[#3A3A3A] mb-4">
          Meet the Founder
        </h2>
        <p className="text-lg text-gray-600">
          Our founder is passionate about real estate and ready to help you
          make the best decision for your future.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={openLinkedInProfile}
            className="bg-slate-700 text-white py-2 px-6 rounded-full hover:bg-slate-600 transition duration-300"
          >
            Meet the founder
          </button>
        </div>
      </div>
    </div>
  );
}
