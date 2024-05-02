import React, { useState, useEffect } from 'react';
import { Link as Element } from 'react-scroll';
import imag1 from '../../assets/img1.png';
import img3 from '../../assets/img3.png'
import { Card } from 'antd';
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

  const { Meta } = Card;

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
              <h1 className="text-6xl mb-4 text-white font-lato font-lato-normal">HI, I'M RUTHAINAS</h1>
              <p className="text-lg text-white font-serif font-serif-normal">Voice-over artist & Video presenter</p>
            </div>
          </div>
        </section>
      </Element>
      <Element name="about">
        <section className="h-screen bg-gray-200 flex justify-center items-center">
          <div className=" flex flex-col text-center pb-16 ">
            <h2 className="text-3xl font-lato font-lato-normal mt-20">A LITTLE BIT ABOUT ME</h2>
            <img src={img3} alt="About Me" className="mt-4 mx-auto" style={{ width: '200px', height: '200px' }} />
            <div justify>
              <p className="mx-20 mt-8 font-serif font-serif-normal w-400 h-60  ">
                Hello! I'm Ruthainas, a talented Multi-faceted Performer.
                I love telling stories and <br />captivating audiences with my dynamic voice and charming
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
          </div>
        </section>
      </Element>
      <Element name="services">
        <section className="h-screen flex justify-center items-center">
          <div className="flex flex-col text-center w-full">
            <h2 className="text-3xl font-lato font-lato-normal pt-12">WHAT I DO</h2>
            <div className="flex justify-between mt-12 mr-4 ml-4">
              <div class="pl-10 pr-10">
                <div class="flex flex-col relative top-4 items-center justify-center">
                  <div class="flex text-white items-center justify-center mb-4 h-40 w-40 rounded-full bg-blue-900">
                    HI
                  </div>
                  <h3 class=" font-lato w-full text-blue-900 font-lato-normal text-2xl">VOICE OVER ARTIST</h3>
                  <span className="font-lato font-lato-regular mb-12 text-blue-900">Captivating Narrator. Engaging Storyteller.</span>
                </div>
                <p class="font-serif relative bottom-6 font-serif-normal">
                  Voice over artist with a passion for crafting<br />
                  impactful audio experiences. Whether breathing<br />
                  life into character, narrating documentaries,or<br />
                  delivering persuasive messages for commercials, I<br />
                  use my clear, versatile voice to connect with<br />
                  your audience and elevate your project<br />
                  <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950"><em>...bringing your vision to life with my voice.</em></span><br />
                  <br />
                </p>
              </div>
              <div class="pl-10 pr-10">
                <div class="flex flex-col relative top-4 items-center justify-center">
                  <div class="flex text-white items-center justify-center mb-4 h-40 w-40 rounded-full bg-blue-900">
                    HI
                  </div>
                  <h3 class=" font-lato w-full text-blue-900 font-lato-normal text-2xl">BRAND INFLUENCER</h3>
                  <span className="font-lato font-lato-regular mb-8 text-blue-900">Tech & Lifestyle Enthusiast. Trusted Brand Partner.</span><br />
                </div>
                <p class="font-serif relative bottom-6 font-serif-normal">
                  Am a creative influencer with a knack for showcasing<br />
                  innovative products and captivating audiences in the<br />
                  tech and lifestyle space. I leverage my engaging <br />
                  content and genuine personality to build trust and<br />
                  connect brands with their target communities.<br />
                  <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950"><em>...I connect brands with passionate communities.</em></span><br />
                </p>
              </div>
              <div class="pl-10 pr-10">
                <div class="flex flex-col relative top-4 items-center justify-center">
                  <div class="flex text-white items-center justify-center mb-4 h-40 w-40 rounded-full bg-blue-900">
                    HI
                  </div>
                  <h3 class=" font-lato w-full text-blue-900 font-lato-normal text-2xl">SOCIAL MEDIA MANAGEMENT</h3>
                  <span className="font-lato font-lato-regular mb-8 text-blue-900">Social Media Strategist. Content Creator.</span><br />
                </div>
                <p class="font-serif relative bottom-6 font-serif-normal">
                  I help brands thrive online!  I craft data-driven<br />
                  strategies, create captivating content, and manage<br />
                  your presence across all platforms.  Let's build<br />
                  brand awareness and foster loyal communities.<br />
                  <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950"><em>...I turn followers into fans for your brand.</em></span><br />
                </p>
              </div>
            </div>
          </div>

        </section>
      </Element>
      <Element name="projects">
        <section className="h-screen bg-gray-200 flex justify-center items-center">
          <div className="flex flex-col text-center w-full">
            <h2 className="text-3xl font-lato font-lato-normal">WHAT I'VE DONE</h2>
            <div className="flex flex-wrap justify-center">
              <div className="m-4">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </div>
              <div className="m-4">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </div>
              <div className="m-4">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="contact">
        <section className="h-screen flex justify-center items-center">
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