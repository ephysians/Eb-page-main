import React, { useState, useEffect, useRef } from "react";
import img12 from "../../assets/img/img12.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as Element } from "react-scroll";
import imag1 from "../../assets/img/img1.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.jpeg";
import img6 from "../../assets/img/img6.jpg";
import pp from "../../assets/img/pp.png";
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
  const emailButtonRef = useRef(null);
  const handleClick = () => {
    const email = "mailto:ruthinasconcept1@gmail.com";
    window.location.href = email; // Redirect to email address
  };

  return (
    <div>
      <div
        className={`bg-black h-16 fixed w-full z-10 top-0 ${
          !isNavbarBackgroundVisible ? "opacity-0" : ""
        }`}
      />

      <nav className="h-16 flex justify-between items-center text-white fixed w-full z-20">
        <Element
          to="home"
          smooth={true}
          duration={500}
          className="ml-12cursor-pointer text-base lg:text-xl font-lato font-lato-normal"
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
            to="portfolio"
            smooth={true}
            duration={500}
            className="mr-8 cursor-pointer text-sm font-lato font-lato-normal"
          >
            PORTFOLIO
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
          <div className="absolute inset-0 bg-black "></div>
          <div
            className={`absolute inset-0 bg-cover bg-no-repeat flex justify-center items-center text-white `}
            style={{ backgroundImage: `url(${imag1})` }}
          >
            <div className=" relative text-center bottom-24 z-20 mix-blend-mode: normal bg-slate-600  rounded p-2">
              <h1 className="text-6xl mb-1 text-white font-lato font-lato-normal">
                HI, I'M RUTHINAS
              </h1>
              <p className="text-xl text-white font-lato font-lato-normal">
                VOICE OVER ARTIST & VIDEO PRESENTER
              </p>
            </div>
          </div>
        </section>
      </Element>
      <Element name="about">
        <section className="h-auto shadow-2xl rounded-md flex m-12 flex-col px-12 md:px-24 bg-gray-200 justify-center items-center text-center text-1xl">
          <h2 className="text-3xl mt-12 font-lato font-lato-normal ">
            A LITTLE BIT ABOUT ME\
          </h2>
          <img
            src={img3}
            alt="About Me"
            className="mt-4 mx-auto"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="">
            <p className=" mt-8 mb-12 font-lato font-lato-normal">
              Hello! I'm <span className="text-blue-700">Ruthinas,</span> a
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
        <section className="h-auto shadow-2xl rounded-md m-12 px-4 lg:px-12 py-24 bg-gray-100  flex flex-col  justify-center items-center text-center text-1xl">
          <h2 className="text-3xl font-lato font-lato-normal pt-8 pb-8 ">
            WHAT I DO
          </h2>
          <div className="flex w-full justify-between mx-64 gap-12 flex-col lg:flex-row">
            <div class=" px-4 flex flex-col rounded-md shadow-lg shadow-black/30 ">
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
            <div class=" px-4 flex flex-col  rounded-md shadow-lg shadow-black/30 ">
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
            <div class=" px-4 flex flex-col  rounded-md shadow-lg shadow-black/30 ">
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
      <Element name="portfolio">
        <section className="h-auto shadow-2xl rounded-md pl-52 pr-48 pb-52 bg-gray-100 flex flex-col justify-center items-center text-center text-1xl">
          <h2 className="text-3xl font-lato font-lato-normal pt-8 pb-8 ">
            PORTFOLIO
          </h2>
          <div className="flex w-full flex-col lg:flex-row  justify-between mx-64 gap-12 items-center ">
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
              <Meta title="Aquafina Water" description="www.aquafina.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 380 }}
              cover={<YoutubeEmbed videoId={videoId2} />}
            >
              <Meta title="Real Estate" description="www.amestate.com" />
            </Card>
          </div>
        </section>
      </Element>
      <Element name="contact">
        <section className="h-auto shadow-2xl rounded-md m-12 px-12 py-24 bg-gray-100 justify-center items-center text-center text-1xl ">
          <div className="grid place-items-center">
            <img src={pp} alt="paper-plane" className="h-14 w-14" />
            <h2 className="text-3xl font-lato font-lato-normal pt-8 pb-8 ">
              GET IN TOUCH!
            </h2>
            <p className="font-lato font-lato-normal text-base">
              DIscuss your needs. Feel free to send me an email to explore{" "}
              <br /> how I can contribute to your vision.
            </p>
            <div className="mt-8 px-6 py-3 border-2 border-black hover:bg-blue-900 hover:border-none hover:text-white">
              <button
                id="email-button"
                ref={emailButtonRef}
                onClick={handleClick}
              >
                Say Hello
              </button>
            </div>
          </div>
        </section>
      </Element>
      <footer className="bg-gray-900 h-64 flex flex-col justify-center items-center text-white">
        <div className="justify-center items-center mb-2 ">
          <a
            href="https://www.instagram.com/ruthinasconceptz?utm_source=qr"
            id="instagram"
          >
            <i class="fa-solid fa-brands fa-instagram bg-neutral-700 p-4 m-1"></i>
          </a>
          <a href="https://wa.me/08182128516">
            <i
              class="fa-solid fa-brands fa-whatsapp bg-neutral-700 p-4 m-1"
              target="_blank"
            ></i>
          </a>
        </div>
        &copy; 2024 Ruthinas Concepts
      </footer>
    </div>
  );
}

export default App;
