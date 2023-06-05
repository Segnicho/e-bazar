import React from "react";
import { contact } from "@/public";
import Image from "next/image";
const Contact = () => {
  const contactInfo = {
    address: "123 Main St, City, Country",
    phone: "+1 123-456-7890",
    website: "www.example.com",
    image: contact, // Placeholder image from Unsplash
  };

  return (
    <div className="container mx-auto mt-10 tracking-wide">
      <div className="flex gap-2">
        <div className="w-2/5">
          <div className="mb-4">
            <Image
              src={contactInfo.image}
              alt="Contact"
              className="w-full rounded-md"
            />
          </div>
          < div className="flex flex-col gap-3">
            <div>
              <p className="font-semibold">Address</p>
              <p className="mb-2">{contactInfo.address}</p>
            </div>
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="mb-2">{contactInfo.phone}</p>
            </div>
            <div>
              <p className="font-semibold">Website</p>
              <p className="mb-2">{contactInfo.website}</p>
            </div>
          </div>
        </div>
        <div className="w-3/5 pr-4">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <div className="flex flex-col mb-4">
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-accent"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-accent"
                />
              </div>
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-accent"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-accent"
              rows="5"
            ></textarea>
          </div>
          <button className="bg-accent hover:bg-sec font-semibold text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
