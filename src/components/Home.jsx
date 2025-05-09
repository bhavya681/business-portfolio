import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const CustomLeftArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 rounded-full p-1 hover:bg-opacity-100 focus:outline-none z-10 transition-all duration-300 shadow-lg hover:scale-110"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <IoMdArrowDropleftCircle className="text-3xl" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 rounded-full p-1 hover:bg-opacity-100 focus:outline-none z-10 transition-all duration-300 shadow-lg hover:scale-110"
      onClick={onClick}
      aria-label="Next slide"
    >
      <IoMdArrowDroprightCircle className="text-3xl" />
    </button>
  );

  const images = [
    "https://shivamenergytech.com/images/Project_1.JPG",
    "https://shivamenergytech.com/images/Project_2.JPG",
    "https://shivamenergytech.com/images/Project_3.JPG",
    "https://shivamenergytech.com/images/Gallery/G_1.JPG",
    "https://shivamenergytech.com/images/Gallery/G_2.JPG",
    "https://shivamenergytech.com/images/Gallery/G_3.JPG",
    "https://shivamenergytech.com/images/Gallery/G_4.JPG",
    "https://shivamenergytech.com/images/Gallery/G_5.JPG",
    "https://shivamenergytech.com/images/Gallery/G_6.JPG",
    "https://shivamenergytech.com/images/Gallery/G_7.JPG",
    "https://shivamenergytech.com/images/Gallery/G_8.JPG",
    "https://shivamenergytech.com/images/Gallery/G_26.JPG",
    "https://shivamenergytech.com/images/Gallery/G_28.JPG",
    "https://shivamenergytech.com/images/Gallery/G_27.JPG",
    "https://shivamenergytech.com/images/Gallery/G_15.JPG",
    "https://shivamenergytech.com/images/Gallery/G_22.JPG",
    "https://shivamenergytech.com/images/Gallery/G_18.JPG",
  ];

  const services = [
    {
      title: "500MW Boiler ESP Retrofit Services",
      description:
        "We are engaged in rendering highly reliable Thermal Power Plants Retrofit Services especially pertaining to Boiler, ESP of 500MW.",
      link: "500MW_Boiler_Retrofit.html",
      icon: "⚡",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
      title: "Thermal Power Plants Erection & Commissioning",
      description:
        "We are indulged in offering Commissioning Services to our clients with precision and expertise.",
      link: "Thermal_Power_Plants_Erection_Commissioning.html",
      icon: "🏗️",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      title: "Fabrication & Erection Services",
      description:
        "Professional execution of fabrication and erection services for Power Plants with quality assurance.",
      link: "Fabrication_Erection_Services.html",
      icon: "🔧",
      bgColor: "bg-gradient-to-br from-green-400 to-green-600",
    },
    {
      title: "Material Management Services",
      description:
        "Comprehensive material management with our own fleet of transport including Hydra, Trailer, Crane, and more.",
      link: "Material_Management_Services.html",
      icon: "🚛",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-700 py-8 md:py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
            Kulswamini Enterprises Private Limited
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Pioneers in Thermal Power Project Solutions with Excellence Since 2014
          </p>
        </div>
      </div>

      {/* Image Gallery Carousel */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            showIndicators={true}
            interval={5000}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && <CustomLeftArrow onClick={onClickHandler} />
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && <CustomRightArrow onClick={onClickHandler} />
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => (
              <li
                className={`inline-block mx-1 w-3 h-3 rounded-full cursor-pointer ${
                  isSelected ? "bg-orange-500" : "bg-gray-300"
                }`}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`Slide ${index + 1}`}
              />
            )}
          >
            {images.map((image, index) => (
              <div key={index} className="h-96 md:h-[32rem]">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
              <span className="relative">
                About Our Company
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform -translate-y-1"></span>
              </span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-8">
              <p className="text-lg leading-relaxed mb-6">
                <span className="font-bold text-orange-600">Kulswamini Enterprises</span> is known for its dedication towards
                satisfactory work completion in its entirety within the project
                time schedule. Founded in 2014 by{" "}
                <span className="font-semibold">Srikant Kashinath Pimple</span>, our Managing Director, we have established ourselves as pioneers in the field of{" "}
                <span className="font-semibold">Erection & Commissioning of Thermal Power Projects</span>, specializing in Boilers, ESP, Structure, CHP, Rotary Parts, Ducts, Insulation, Paintings, and Electrical works.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
              <span className="relative">
                Our Services
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform -translate-y-1"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your power project needs
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 ${service.bgColor}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                  >
                    Learn more <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
              <span className="relative">
                Our Core Values
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform -translate-y-1"></span>
              </span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Commitment to Quality</h3>
              <p className="text-gray-600">
                We deliver exceptional quality in every project, ensuring reliability and longevity of our solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3">Timely Execution</h3>
              <p className="text-gray-600">
                Our projects are completed within strict timelines without compromising on quality or safety standards.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-bold mb-3">Expert Workforce</h3>
              <p className="text-gray-600">
                Highly skilled professionals with extensive experience in thermal power projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Power Your Projects?</h2>
          <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can support your power project needs with our expertise.
          </p>
          <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;