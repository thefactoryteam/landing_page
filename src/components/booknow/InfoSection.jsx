// components/InfoSection.tsx
import React from 'react';


const InfoDetail = ({ title, items= [] }) => {

  return (
    <div className="text-center my-10">
      <h2 className="meriwether-font text-2xl md:text-4xl !font-bold">{title}</h2>
      <ul className="space-y-2 mt-4">
        {items.map((item, index) => (
          <li key={index} className="text-[#231F20] text-[17px] primary-font md:text-2xl">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default function InfoSection({ features, benefits }) {
    return (
      <main className="max-w-4xl mx-auto px-4 pb-12 text-center">
        <InfoDetail
          title="Features"
          items={features}
        />
        <InfoDetail
          title="Benefits"
          items={benefits}
        />
        <p className="text-xl md:text-3xl text-center meriwether-font mt-24">
          Fill Out The Form Below To Book Your Preferred Package.
          Once Your Details Are Confirmed And Payment Is Made,
          A Confirmation Email And Receipt Will Be Sent To You.
        </p>
      </main>
    );
  }
