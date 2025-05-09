import React from 'react';

const About = () => {
  return (<>
    <div className="bg-orange-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-white font-bold">About us</h1>
        </div>
      </div>
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Who We Are?</h3>
          <p className="mb-4">
            SEPL was incorporated in the F.Y. 2011. The Company was established with an objective to engage in the business of fabrication, erection, and commissioning related works required for power plants. SEPL was formed by taking over the proprietorship concern M/s. Shivam Corporation with Shri Anjani Kumar Rai as a proprietor, which was in existence since 2004.
          </p>
          <p className="mb-4">
            The company was converted into Shivam Energytech Private Limited ("SEPL" or "The Company") on 15th July, 2004.
          </p>
          <p className="mb-4">
            We are engaged in the niche segment of Fabrication, Erection & Testing, and Commissioning of Bunkers, ESPs, Boilers, TG sets in the Power Plants, both in Private & Public sectors. SEPL is amongst very few companies which are tightly focused in the ever-growing Power Sector, for the last decades.
          </p>
          <h3 className="text-2xl font-semibold mb-4">What we believe</h3>
          <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
          <p className="mb-4">
            To contribute to the development of power and process industries as well as related infrastructure areas. To meet quality, price, and schedule benchmarks and consistently satisfy customers.
          </p>
          <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
          <p className="mb-4">To improve on existing quality-system in its operations.</p>
          <p className="mb-4">To achieve greater productivity and safety standards.</p>
          <p className="mb-4">To develop human resources and improve employee attitudes.</p>
          <p className="mb-4">To maintain good growth of net worth and build on the assets of the company.</p>
          <p className="mb-4">To be a market leader and a highly dependable services provider.</p>
          <p className="mb-4">To develop partnerships for growth and diversification.</p>
        </div>
        <div className="w-full md:w-1/3">
          <img src="https://shivamenergytech.com/images/About.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  </>);
};

export default About;
