import React from 'react';
import { FaLeaf } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineInbox } from "react-icons/md";
import { GiWingedArrow } from "react-icons/gi";

const services = [
  { 
    icon: <FaLeaf/>, 
    title: '500MW Boiler ESP Retrofit Services', 
    description: 'We are engaged in rendering highly reliable Thermal Power Plants Retrofit Services especially pertaining to Boiler, ESP of 500MW.', 
    link: '/services/500MW_Boiler_Retrofit' 
  },
  { 
    icon: <IoRocketOutline/>, 
    title: 'Thermal Power Plants Erection & Commissioning Services', 
    description: 'We are indulged in offering Commissioning Services to our clients.', 
    link: '/services/Thermal_Power_Plants' 
  },
  { 
    icon: <MdOutlineInbox/>, 
    title: 'Fabrication & Erection Services Of Power Plants', 
    description: 'We are executing fabrication and erection services of Power Plants to our clients.', 
    link: '/services/Fabrication_&_Erection' 
  },
  { 
    icon: <GiWingedArrow/>, 
    title: 'Material Management Services For Power Projects', 
    description: 'We are having our own fleets of transport i.e. Hydra, Trailer, Crane, Winch etc.', 
    link: '/services/Material_Management' 
  },
];

const Services = () => {
  return (
    <>
      <div className="bg-orange-500 py-4 ">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-white font-bold">Services</h1>
        </div>
      </div>
      <div className="container mx-auto mt-13 py-5 px-4  min-h-[460px] mt-17">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-item flex p-4 border rounded-lg bg-white shadow-md cursor-pointer">
              <div className="icon text-3xl md:text-4xl mr-4 flex items-center justify-center w-12 h-12 p-3 bg-blue-500 text-white rounded-full">
               {service.icon}
              </div>
              <div className="content">
                <h4 className="text-xl md:text-2xl font-bold">{service.title}</h4>
                <p className="mt-2 text-sm md:text-base">{service.description} <a href={service.link} className="text-blue-500">More...</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
