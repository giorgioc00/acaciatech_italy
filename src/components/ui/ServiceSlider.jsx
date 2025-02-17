import React from "react";
import mainImage from "../../images/main.webp";

const services = [
  { id: 1, src: mainImage, skill: "Web Application Dev" },
  { id: 2, src: mainImage, skill: "Shopify eCommerce Store Dev" },
  { id: 3, src: mainImage, skill: "Data Engineer" },
  { id: 4, src: mainImage, skill: "Web Scraping" },
  { id: 5, src: mainImage, skill: "Automation" },
];

const ServiceSlider = () => {
  return (
    <div className="bg-[#093157] bg-opacity-80  overflow-hidden py-6 px-4">
      <div className="logo-slider  gap-4">
        {services.concat(services, services,services).map((service) => (
          <div
            key={service.id}
            className="flex items-center p-4 rounded-lg shadow-md w-full max-w-4xl"
          >
            {/* Image on the left */}
            <img
              src={service.src}
              className="h-16 w-16 object-contain "
              alt={service.skill}
            />
            
            {/* Text on the right */}
            <div className="ml-4 flex-1 w-72">
              <p className="text-lg font-semibold text-white">{service.skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
