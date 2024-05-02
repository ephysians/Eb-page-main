import React, { useState, useEffect } from "react";
import img12 from "../../assets/img/img12.jpeg";
import { Link as Element } from "react-scroll";
import imag1 from "../../assets/img/img1.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.jpeg";
import img6 from "../../assets/img/img6.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function App() {
  const [isNavbarBackgroundVisible, setIsNavbarBackgroundVisible] =
    useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarBackgroundVisible(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const videoId = "EdcgHfIYL9M";
  const videoId1 = "0jIVO6zsrcc";
  const videoId2 = "1l58O2UNQgE";

  return (
    <div>
      <div
        className={`bg-black h-16 fixed w-full z-10 top-0 ${
          !isNavbarBackgroundVisible ? "opacity-0" : ""
        }`}
      />

      <nav className="h-16 flex justify-between items-center text-white fixed w-full z-20">
        {/* Content always visible */}
        <Element
          to="home"
          smooth={true}
          duration={500}
          className="ml-12 text-xl cursor-pointer text-base font-lato font-lato-normal"
        >
          RUTHINAS - CONCEPTZ
        </Element>

        <div className="mr-16">
          <Element
            to="home"
            smooth={true}
            duration={500}
            className="mr-8 cursor-pointer text-sm font-lato font-lato-normal"
          >
            HOME
          </Element>
          <Element
            to="about"
            smooth={true}
            duration={500}
            className="mr-8 cursor-pointer text-sm font-lato font-lato-normal"
          >
            ABOUT
          </Element>
          <Element
            to="services"
            smooth={true}
            duration={500}
            className="mr-8 cursor-pointer text-sm font-lato font-lato-normal"
          >
            SERVICES
          </Element>
          <Element
            to="contact"
            smooth={true}
            duration={500}
            className="mr-8 cursor-pointer text-sm font-lato font-lato-normal"
          >
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
              <h1 className="text-6xl mb-4 text-red-800 font-lato font-lato-normal">
                HI, I'M RUTHAINAS
              </h1>
              <p className="text-lg text-red-800 font-serif font-serif-normal">
                Voice-over artist & Video presenter
              </p>
            </div>
          </div>
        </section>
      </Element>
      <Element name="about">
        <section className="h-auto shadow-2xl rounded-md flex m-12 flex-col px-64 bg-gray-200 justify-center items-center text-center text-1xl">
          <h2 className="text-3xl mt-12 font-lato font-lato-normal ">
            A LITTLE BIT ABOUT ME
          </h2>
          <img
            src={img3}
            alt="About Me"
            className="mt-4 mx-auto"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="">
            <p className=" mt-8 mb-12 font-lato font-lato-normal">
              Hello! I'm <span className="text-blue-700">Ruthainas,</span> a
              talented Multi-faceted Performer. I love telling stories and
              captivating audiences with my dynamic voice and charming on-screen
              presence. With years of experience, I specialize in creating
              professional voice-overs for commercials, narration, audiobooks,
              animations, and more. Whether you need a warm, authoritative voice
              for your brand or a playful, animated tone for characters, I've
              got you covered. As a skilled video presenter, I shine in front of
              the camera, delivering polished performances that resonate with
              viewers.From corporate training videos to online tutorials and
              product demos to event hosting, I excel in creating engaging
              content that educates, entertains, and inspires. I'm dedicated to
              excellence and exceeding client expectations. I'm excited to
              collaborate with you to bring your project vision to life. Let's
              create something unforgettable together!
            </p>
          </div>
        </section>
      </Element>
      <Element name="services">
        <section className="h-auto shadow-2xl rounded-md m-12 px-12 py-24 bg-gray-100 justify-center items-center text-center text-1xl">
          <h2 className="text-3xl font-lato font-lato-normal pt-8 pb-8 ">
            WHAT I DO
          </h2>
          <div className="flex justify-between border mx-64 gap-12">
            <div class=" px-4 flex flex-col border rounded-md shadow-lg shadow-black/30 ">
              <div class="flex flex-col relative top-4 items-center">
                <div class="flex text-white items-center justify-center p-8">
                  <img
                    src={img4}
                    alt="voice over artist"
                    className="h-48 w-48 rounded-full"
                  />
                </div>
                <h3 class="font-lato w-full text-blue-900 font-lato-normal text-2xl">
                  VOICE OVER ARTIST
                </h3>
                <span className="font-lato font-lato-regular text-sm text-blue-900 pb-8">
                  <em>Captivating Narrator. Engaging Storyteller.</em>
                </span>
              </div>
              <p class="top-4 font-lato font-lato-normal">
                Voice over artist with a passion for crafting impactful audio
                experiences. Whether breathing life into character, narrating
                documentaries,or delivering persuasive messages for commercials,
                I use my clear, versatile voice to connect with your audience
                and elevate your project. <br />
                <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950">
                  <em>...bringing your vision to life with my voice.</em>
                </span>
                <br />
                <br />
              </p>
            </div>
            <div class=" px-4 flex flex-col border rounded-md shadow-lg shadow-black/30 ">
              <div class="flex flex-col relative top-4 items-center">
                <div class="flex text-white items-center justify-center p-8">
                  <img
                    src={img6}
                    alt="voice over artist"
                    className="h-48 w-48 rounded-full"
                  />
                </div>
                <h3 class=" font-lato w-full text-blue-900 font-lato-normal text-2xl">
                  BRAND INFLUENCER
                </h3>
                <span className="font-lato font-lato-regular text-sm text-blue-900 pb-8">
                  <em>Lifestyle Enthusiast. Trusted Brand Partner.</em>
                </span>
              </div>
              <p class="top-4 font-lato font-lato-normal">
                "I'm a creative influencer who excels at spotlighting innovative
                products, captivating audiences with authentic content and
                genuine charisma. My focus is on building trust and forging
                connections between brands and their target communities."
                <br />
                <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950">
                  <em>...connecting brands with communities.</em>
                </span>
                <br />
              </p>
            </div>
            <div class=" px-4 flex flex-col border rounded-md shadow-lg shadow-black/30 ">
              <div class="flex flex-col relative top-4 items-center">
                <div class="flex text-white items-center justify-center p-8">
                  <img
                    src={img12}
                    alt="voice over artist"
                    className="h-48 w-48 rounded-full"
                  />
                </div>
                <h3 class=" font-lato w-full text-blue-900 font-lato-normal text-2xl">
                  SOCIAL MEDIA MANAEGMANT
                </h3>
                <span className="font-lato font-lato-regular text-sm text-blue-900 pb-9">
                  <em>Social Media Strategist. Content Creator.</em>
                </span>
              </div>
              <p class="top-4 font-lato font-lato-normal">
                I specialize in empowering brands to flourish in the digital
                realm! Through meticulous data-driven strategies, compelling
                content creation, and adept management across platforms, I
                ensure your online presence shines. Let's collaborate to enhance
                brand visibility and cultivate devoted communities. <br />
                <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950">
                  <em>...I turn followers into fans for your brand.</em>
                </span>
                <br />
              </p>
            </div>
          </div>
        </section>
      </Element>
      <Element name="projects">
        <section className="h-auto bg-gray-200 shadow-2xl rounded-md m-12 px-12 py-24 justify-center items-center text-center text-1xl">
          <h2 className="text-3xl font-lato font-lato-normal pt-8 pb-8 ">
            PORTFOLIO
          </h2>
          <div className="flex justify-between border mx-64 gap-8 ">
            <Card
              hoverable
              style={{ width: 380 }}
              cover={<YoutubeEmbed videoId={videoId} />}
            >
              <Meta
                title="Renda Animation Conference Submit 2024"
                description="www.rendacon.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 380 }}
              cover={<YoutubeEmbed videoId={videoId1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 380 }}
              cover={<YoutubeEmbed videoId={videoId2} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </section>
      </Element>
      <Element name="contact">
      <section className="h-auto shadow-2xl rounded-md m-12 px-12 py-24 bg-gray-100 justify-center items-center text-center text-1xl">
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
