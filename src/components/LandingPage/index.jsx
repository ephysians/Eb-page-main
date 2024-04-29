import React, { useState, useEffect } from 'react';
import { Link as Element } from 'react-scroll';
import imag1 from '../../assets/img1.png';
import img3 from '../../assets/img3.png'
// import imag2 from `../../App'`

function App() {
  const [isNavbarBackgroundVisible, setIsNavbarBackgroundVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarBackgroundVisible(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      {/* Black background element */}
      <div
        className={`bg-black h-16 fixed w-full z-10 top-0 ${!isNavbarBackgroundVisible ? 'opacity-0' : ''
          }`}
      />

      <nav className="h-16 flex justify-between items-center text-white fixed w-full z-20">
        {/* Content always visible */}
        <Element to="home" smooth={true} duration={500} className="ml-12 text-xl cursor-pointer text-base font-lato font-lato-normal">
          RUTHINAS - CONCEPTZ
        </Element>

        <div className="mr-16">
          <Element to="home" smooth={true} duration={500} className="mr-8 cursor-pointer text-sm font-lato font-lato-normal">
            HOME
          </Element>
          <Element to="about" smooth={true} duration={500} className="mr-8 cursor-pointer text-sm font-lato font-lato-normal">
            ABOUT
          </Element>
          <Element to="services" smooth={true} duration={500} className="mr-8 cursor-pointer text-sm font-lato font-lato-normal">
            SERVICES
          </Element>
          <Element to="contact" smooth={true} duration={500} className="mr-8 cursor-pointer text-sm font-lato font-lato-normal">
            CONTACT
          </Element>
        </div>
      </nav>
      <Element name="home">
        <section className="h-screen relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div
            className={`absolute inset-0 bg-cover bg-no-repeat flex justify-center items-center text-white mix-blend-overlay`}
            style={{ backgroundImage: `url(${imag1})` }}
          >
            <div className="text-center z-20 mix-blend-mode: normal">
              <h1 className="text-6xl mb-4 text-black font-lato font-lato-normal">HI, I'M BRITTANY</h1>
              <p className="text-lg text-black font-sans">Web Developer & UX Enthusiast</p>
            </div>
          </div>
        </section>
      </Element>
        <Element name="about">
          <section className="h-screen bg-gray-200 flex justify-center items-center">
            <div className=" flex flex-col text-center pb-16 ">
              <h2 className="text-3xl font-lato font-lato-normal mt-20">A LITTLE BIT ABOUT ME</h2>
              <img src={img3} alt="About Me" className="mt-4 mx-auto" style={{ width: '200px', height: '200px' }} />
              <p className="mx-20 mt-8  justify-center items-center w-400 h-60  ">
                Hello! I'm Ruthainas, a talented voice-over artist and captivating video presenter. 
                I love telling<br />stories and captivating audiences with my dynamic voice and charming
                on-screen presence.<br />
                With years of experience, I specialize in creating professional voice-overs for commercials,<br /> 
                narration, audiobooks, animations, and more. Whether you need a warm, authoritative voice for<br /> 
                your brand or a playful, animated tone for characters, I've got you covered.<br />

                As a skilled video presenter, I shine in front of the camera, delivering polished performances<br />
                that resonate with viewers. From corporate training videos to online tutorials and product demos<br /> 
                to event hosting, I excel in creating engaging content that educates, entertains, and inspires.<br />

                I'm dedicated to excellence and exceeding client expectations. I'm excited to collaborate with<br /> 
                you to bring your project vision to life. Let's create something unforgettable together!
              </p>
            </div>
          </section>
        </Element>
      <Element name="services">
        <section className="h-screen bg-white flex justify-center items-center">
          <h2 className="text-3xl font-bold">Services</h2>
        </section>
      </Element>
      <Element name="contact">
        <section className="h-screen bg-gray-200 flex justify-center items-center">
          <h2 className="text-3xl font-bold">Contact</h2>
        </section>
      </Element>
      <footer className="bg-gray-800 h-48 flex justify-center items-center text-white">
        &copy; 2024 Brittany Chiang
      </footer>
    </div>
  );
}

export default App;

