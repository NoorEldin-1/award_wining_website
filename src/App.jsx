import "./App.css";
import navbarimg from "../public/assets/logo.png";
import landingimg from "../public/assets/entrance.webp";
import aboutimg from "../public/assets/about.webp";
import featuresimg1 from "../public/assets/gallery-2.webp";
import featuresimg2 from "../public/assets/gallery-5.webp";
import featuresimg3 from "../public/assets/contact-1.webp";
import featuresimg4 from "../public/assets/contact-2.webp";
import featuresvideo from "../public/assets/feature-5.mp4";
import storyvideo from "../public/assets/hero-2.mp4";
import contactimg1 from "../public/assets/gallery-1.webp";
import contactimg2 from "../public/assets/swordman.webp";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSortUp,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      <Intro />
    </>
  );
};

export default App;
const Navbar = () => {
  const navRef = useRef(null);
  const [isMenu, setIsMenu] = useState(false);
  const [navOnScroll, setNavOnScroll] = useState("show");
  const [scrollValue, setScrollValue] = useState(0);
  const links = ["nexus", "vault", "prologue", "about", "contact"].map(
    (e, i) => {
      return (
        <a
          href={`#${e}`}
          key={i}
          className={`font-bold text-[12px] uppercase text-blue-50 duration-300 hover:text-blue-100`}
        >
          {e}
        </a>
      );
    }
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavOnScroll("show");
        navRef.current.classList.replace("bg-black/90", "bg-transparent");
      } else if (window.scrollY < scrollValue) {
        setNavOnScroll(true);
        navRef.current.classList.replace("bg-transparent", "bg-black/90");
      } else if (window.scrollY > scrollValue) {
        setNavOnScroll(false);
        navRef.current.classList.replace("bg-transparent", "bg-black/90");
      }
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navOnScroll, scrollValue]);
  return (
    <>
      <motion.div
        ref={navRef}
        animate={
          navOnScroll === "show"
            ? { y: 0 }
            : navOnScroll
            ? { y: 0 }
            : { y: "-100vh" }
        }
        transition={{ duration: 0.5 }}
        className={`bg-transparent text-white flex justify-between gap-5 container mx-auto fixed z-50 top-2.5 left-1/2 -translate-x-1/2 rounded-2xl py-3 px-5 items-center duration-300 font-reg`}
      >
        <div className="flex gap-5 items-center">
          <img src={navbarimg} alt="" className="w-10" />
          <button
            data-content="Products"
            className={`bg-white w-[150px] h-[35px] rounded-4xl text-black block cursor-pointer uppercase font-bold text-[12px] relative overflow-hidden navbtn`}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className={`absolute top-1/2 right-7 -translate-y-1/2 w-2.5`}
            />
          </button>
        </div>
        <div className="flex gap-5 items-center max-sm:hidden">{links}</div>
        <div className={`max-sm:block sm:hidden relative`}>
          <FontAwesomeIcon
            icon={faTableCellsLarge}
            className={`text-2xl cursor-pointer`}
            onClick={() => setIsMenu(!isMenu)}
          />
          <AnimatePresence>
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.1 }}
                className={`w-[200px] bg-black p-4 rounded-md text-white absolute top-[210%] right-0 flex gap-3 flex-col rounded-tr-none`}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className={`text-2xl text-black absolute -top-[9px] right-0`}
                />
                {links}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};
const Landing = () => {
  const landingRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 300) {
        landingRef.current.style.clipPath = `polygon(${
          window.scrollY / 10
        }% 0, ${100 - window.scrollY / 10}% 0, ${
          100 - window.scrollY / 25
        }% 100%, ${window.scrollY / 25}% 100%)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [landingRef]);
  return (
    <>
      <div
        ref={landingRef}
        style={{
          backgroundImage: `url(${landingimg})`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        className={`bg-cover bg-no-repeat bg-center h-screen relative duration-300`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black/50`}
        ></div>
        <p
          className={`font-gaming text-5xl sm:text-7xl md:text-8xl font-normal lg:text-9xl text-white/90 uppercase absolute top-24 left-6 tracking-tighter`}
        >
          redefine
        </p>
        <p
          className={`font-reg text-lg text-blue-50 capitalize absolute top-44 sm:top-48 md:top-56 lg:top-64 left-6 leading-7`}
        >
          Enter the Metagame Layer
          <br />
          Unleash the Play Economy
        </p>
        <button
          className={`font-reg bg-yellow-300 uppercase text-black/70 absolute top-64 sm:top-72 md:top-80 lg:top-[340px] left-6 cursor-pointer w-[230px] h-[40px] rounded-4xl text-sm font-bold overflow-hidden landing-btn`}
          data-content="watch trailer"
        >
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`absolute top-1/2 left-7 -translate-y-1/2 w-3`}
          />
        </button>
        <p
          className={`font-gaming text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white/90 uppercase absolute right-6 bottom-6 tracking-tighter font-normal`}
        >
          gaming
        </p>
      </div>
    </>
  );
};
const About = () => {
  return (
    <div className={`py-20 overflow-hidden relative`}>
      <p
        className={`text-center uppercase font-bold font-reg text-[12px] text-black/60 tracking-widest mb-5`}
      >
        Welcome to Zentry
      </p>
      <motion.p
        initial={{ opacity: 0, x: 175, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-center font-gaming text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
      >
        Discover the world's
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 175, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-center font-gaming text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
      >
        largest shared adventure
      </motion.p>
      <img
        src={aboutimg}
        alt=""
        className={`w-[500px] mx-auto my-10 overflow-hidden rounded-2xl`}
      />
      <p className={`text-center font-reg text-xl capitalize`}>
        The Game of Games begins—your life, now an epic MMORPG
      </p>
      <p
        className={`text-center capitalize font-reg text-xl text-black/60 max-w-[700px] mx-auto text-balance`}
      >
        Zentry unites every player from countless games and platforms, both
        digital and physical, into a unified Play Economy
      </p>
    </div>
  );
};
const Features = () => {
  return (
    <div
      className={`bg-black py-20 relative text-white font-reg overflow-hidden`}
    >
      <div className={`container mx-auto px-2`}>
        <p className={`font-bold capitalize mb-2`}>Into the Metagame Layer</p>
        <p className={`max-w-[500px] text-white/70 capitalize mb-20`}>
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
        <div className={`grid gap-10 grid-cols-2`}>
          <div
            onMouseMove={(e) => {
              const { width, height, left, top } =
                e.currentTarget.getBoundingClientRect();
              const centerX = left + width / 2;
              const centerY = top + height / 2;
              const { clientX, clientY } = e;
              const rx = (clientY - centerY) / height;
              const ry = (clientX - centerX) / width;
              e.currentTarget.style.transform = `perspective(4000px) rotate3D(${-rx},${ry},0,10deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate3d(0,0,0,0deg)`;
            }}
            className={`col-span-2 overflow-hidden rounded-3xl relative border-[1px] border-white/40 duration-100`}
          >
            <img
              src={featuresimg1}
              alt=""
              className={`w-full h-[400px] object-cover`}
            />
            <h1 className={`absolute top-5 left-5 font-gaming text-4xl`}>
              radiant
            </h1>
            <p
              className={`font-reg absolute top-20 left-5 text-sm capitalize font-bold text-white/75 max-w-[400px] text-balance`}
            >
              A cross-platform metagame app, turning your activities across Web2
              and Web3 games into a rewarding adventure.
            </p>
            <button
              onMouseMove={(e) => {
                e.currentTarget.children[1].style.opacity = "20%";
                e.currentTarget.children[1].style.left = `${
                  e.clientX - e.currentTarget.children[1].offsetWidth
                }px`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[1].style.opacity = "0%";
              }}
              className={`absolute bottom-5 left-5 cursor-pointer bg-black px-10 py-2 rounded-full uppercase font-reg font-bold text-sm text-white/75 border-[1px] border-white/40 overflow-hidden`}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                className={`absolute top-1/2 left-4 -translate-y-1/2 w-2`}
              />
              <div
                className={`absolute top-0 left-0 bg-white/50 w-1/2 h-full opacity-0`}
                style={{ boxShadow: "0px 0px 50px 10px white" }}
              ></div>
              coming soon
            </button>
          </div>
          {/* one ////////// one */}
          <div
            onMouseMove={(e) => {
              const { width, height, left, top } =
                e.currentTarget.getBoundingClientRect();
              const centerX = left + width / 2;
              const centerY = top + height / 2;
              const { clientX, clientY } = e;
              const rx = (clientY - centerY) / height;
              const ry = (clientX - centerX) / width;
              e.currentTarget.style.transform = `perspective(4000px) rotate3D(${-rx},${ry},0,10deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate3d(0,0,0,0deg)`;
            }}
            className={`col-span-2 md:col-span-1 overflow-hidden rounded-3xl relative border-[1px] border-white/40 duration-100`}
          >
            <img
              src={featuresimg2}
              alt=""
              className={`w-full object-cover h-full grayscale-50`}
            />
            <h1
              className={`absolute top-5 left-5 font-gaming text-4xl text-black`}
            >
              zigma
            </h1>
            <p
              className={`font-reg absolute top-20 left-5 text-sm capitalize font-bold text-black/75 max-w-[400px] text-balance`}
            >
              An anime and gaming-inspired NFT collection - the IP primed for
              expansion.
            </p>
            <button
              onMouseMove={(e) => {
                e.currentTarget.children[1].style.opacity = "20%";
                e.currentTarget.children[1].style.left = `${
                  e.clientX - e.currentTarget.children[1].offsetWidth
                }px`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[1].style.opacity = "0%";
              }}
              className={`absolute bottom-5 left-5 cursor-pointer bg-black px-10 py-2 rounded-full uppercase font-reg font-bold text-sm text-white/75 border-[1px] border-white/40 overflow-hidden`}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                className={`absolute top-1/2 left-4 -translate-y-1/2 w-2`}
              />
              <div
                className={`absolute top-0 left-0 bg-white/50 w-1/2 h-full opacity-0`}
                style={{ boxShadow: "0px 0px 50px 10px white" }}
              ></div>
              coming soon
            </button>
          </div>
          {/* two ////////// two */}
          <div className={`grid gap-10 col-span-2 md:col-span-1`}>
            <div
              onMouseMove={(e) => {
                const { width, height, left, top } =
                  e.currentTarget.getBoundingClientRect();
                const centerX = left + width / 2;
                const centerY = top + height / 2;
                const { clientX, clientY } = e;
                const rx = (clientY - centerY) / height;
                const ry = (clientX - centerX) / width;
                e.currentTarget.style.transform = `perspective(4000px) rotate3D(${-rx},${ry},0,10deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate3d(0,0,0,0deg)`;
              }}
              className={`overflow-hidden rounded-3xl relative duration-100 border-[1px] border-white/40`}
            >
              <img
                src={featuresimg3}
                alt=""
                className={`w-full object-cover h-[300px]`}
              />
              <h1
                className={`absolute top-5 left-5 font-gaming text-4xl text-white`}
              >
                nexus
              </h1>
              <p
                className={`font-reg absolute top-20 left-5 text-sm capitalize font-bold text-white/75 max-w-[400px] text-balance`}
              >
                A gamified social hub, adding a new dimension of play to social
                interaction for Web3 communities.
              </p>
              <button
                onMouseMove={(e) => {
                  e.currentTarget.children[1].style.opacity = "20%";
                  e.currentTarget.children[1].style.left = `${
                    e.clientX - e.currentTarget.children[1].offsetWidth
                  }px`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.children[1].style.opacity = "0%";
                }}
                className={`absolute bottom-5 left-5 cursor-pointer bg-black px-10 py-2 rounded-full uppercase font-reg font-bold text-sm text-white/75 border-[1px] border-white/40 overflow-hidden`}
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className={`absolute top-1/2 left-4 -translate-y-1/2 w-2`}
                />
                <div
                  className={`absolute top-0 left-0 bg-white/50 w-1/2 h-full opacity-0`}
                  style={{ boxShadow: "0px 0px 50px 10px white" }}
                ></div>
                coming soon
              </button>
            </div>
            <div
              onMouseMove={(e) => {
                const { width, height, left, top } =
                  e.currentTarget.getBoundingClientRect();
                const centerX = left + width / 2;
                const centerY = top + height / 2;
                const { clientX, clientY } = e;
                const rx = (clientY - centerY) / height;
                const ry = (clientX - centerX) / width;
                e.currentTarget.style.transform = `perspective(4000px) rotate3D(${-rx},${ry},0,10deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate3d(0,0,0,0deg)`;
              }}
              className={`overflow-hidden rounded-3xl relative duration-100 border-[1px] border-white/40`}
            >
              <img
                src={featuresimg4}
                alt=""
                className={`w-full object-cover h-[300px]`}
              />
              <h1
                className={`absolute top-5 left-5 font-gaming text-4xl text-black`}
              >
                azul
              </h1>
              <p
                className={`font-reg absolute top-20 left-5 text-sm capitalize font-bold text-black/75 max-w-[400px] text-balance`}
              >
                A cross-world AI Agent - elevating your gameplay to be more fun
                and productive.
              </p>
              <button
                onMouseMove={(e) => {
                  e.currentTarget.children[1].style.opacity = "20%";
                  e.currentTarget.children[1].style.left = `${
                    e.clientX - e.currentTarget.children[1].offsetWidth
                  }px`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.children[1].style.opacity = "0%";
                }}
                className={`absolute bottom-5 left-5 cursor-pointer bg-black px-10 py-2 rounded-full uppercase font-reg font-bold text-sm text-white/75 border-[1px] border-white/40 overflow-hidden`}
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className={`absolute top-1/2 left-4 -translate-y-1/2 w-2`}
                />
                <div
                  className={`absolute top-0 left-0 bg-white/50 w-1/2 h-full opacity-0`}
                  style={{ boxShadow: "0px 0px 50px 10px white" }}
                ></div>
                coming soon
              </button>
            </div>
          </div>
          {/* three ////////// three */}
          <div
            onMouseMove={(e) => {
              const { width, height, left, top } =
                e.currentTarget.getBoundingClientRect();
              const centerX = left + width / 2;
              const centerY = top + height / 2;
              const { clientX, clientY } = e;
              const rx = (clientY - centerY) / height;
              const ry = (clientX - centerX) / width;
              e.currentTarget.style.transform = `perspective(4000px) rotate3D(${-rx},${ry},0,10deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate3d(0,0,0,0deg)`;
            }}
            className={`col-span-2 md:col-span-1 overflow-hidden rounded-3xl bg-purple-600 relative duration-100 border-[1px] border-white/40 h-[300px]`}
          >
            <h1
              className={`absolute top-5 left-5 font-gaming text-4xl text-black`}
            >
              More
              <br />
              coming
              <br />
              soon.
            </h1>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className={`absolute bottom-8 right-8 text-4xl text-black duration-300 cursor-pointer hover:text-white`}
            />
          </div>
          {/* four ////////// four */}
          <div
            onMouseMove={(e) => {
              const { width, height, left, top } =
                e.currentTarget.getBoundingClientRect();
              const centerX = left + width / 2;
              const centerY = top + height / 2;
              const { clientX, clientY } = e;
              const rx = (clientY - centerY) / height;
              const ry = (clientX - centerX) / width;
              e.currentTarget.style.transform = `perspective(4000px) rotate3D(${-rx},${ry},0,10deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate3d(0,0,0,0deg)`;
            }}
            className={`col-span-2 md:col-span-1 overflow-hidden rounded-3xl`}
          >
            <video
              src={featuresvideo}
              autoPlay
              loop
              muted
              playsInline
              className={`w-full object-cover h-[300px]`}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};
const Story = () => {
  return (
    <div
      className={`bg-black py-20 relative text-white font-reg overflow-hidden`}
    >
      <div className={`container mx-auto px-2`}>
        <p
          className={`text-center font-bold uppercase text-sm tracking-widest text-white/75 mb-10`}
        >
          the multiversal ip world
        </p>
        <motion.h1
          initial={{ opacity: 0, x: 175, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center font-gaming text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
        >
          the story of
          <br />a hidden realm
        </motion.h1>
        <video
          onMouseMove={(e) => {
            const { width, height, left, top } =
              e.currentTarget.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const { clientX, clientY } = e;
            const rx = (clientY - centerY) / height;
            const ry = (clientX - centerX) / width;
            e.currentTarget.style.transform = `perspective(4000px) rotate3D(${-rx},${ry},0,20deg)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `perspective(4000px) rotate3D(0.4,1,0,40deg)`;
          }}
          src={storyvideo}
          autoPlay
          loop
          muted
          playsInline
          className={`object-cover h-[500px] my-20 w-full overflow-hidden rounded-3xl border-[1px] border-white/40 duration-100`}
          style={{
            transform: `perspective(4000px) rotate3D(0.4,1,0,40deg)`,
          }}
        ></video>
        <div className={`max-w-[400px] ml-auto`}>
          <p className={`mb-5 text-white/75 capitalize`}>
            Where realms converge, lies Zentry and the boundless pillar.
            Discover its secrets and shape your fate amidst infinite
            opportunities.
          </p>
          <button
            data-content="discover prologue"
            className={`bg-white w-[250px] h-[40px] rounded-4xl text-black block cursor-pointer uppercase font-bold text-[12px] relative overflow-hidden storybtn`}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className={`absolute top-1/2 right-7 -translate-y-1/2 w-2.5`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className={`py-20 px-5`}>
      <div
        className={`container mx-auto bg-black rounded-2xl max-sm:p-20 p-32 text-white font-reg relative overflow-hidden`}
      >
        <img
          src={contactimg1}
          alt=""
          className={`absolute left-5 top-2 w-[200px] h-[300px] object-cover opacity-75`}
          style={{
            transform: `perspective(4000px) rotate3D(0.9,1,0,40deg)`,
          }}
        />
        <img
          src={contactimg2}
          alt=""
          className={`absolute right-5 bottom-2 w-[200px] h-[300px] object-cover opacity-75`}
          style={{
            transform: `perspective(4000px) rotate3D(-0.9,1,0,40deg)`,
          }}
        />
        <p
          className={`text-sm font-bold text-center text-white/75 uppercase tracking-widest mb-10 relative`}
        >
          Join Zentry
        </p>
        <motion.p
          initial={{ opacity: 0, x: 175, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-center font-gaming text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative`}
        >
          let's build the
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 175, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-center font-gaming text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative`}
        >
          new era of
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 175, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-center font-gaming text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative`}
        >
          gaming together.
        </motion.p>
        <button
          data-content="contact us"
          className={`bg-white w-[180px] h-[40px] rounded-4xl text-black block cursor-pointer uppercase font-bold text-[12px] relative overflow-hidden mx-auto mt-10 contactbtn`}
        >
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`absolute top-1/2 right-7 -translate-y-1/2 w-2.5`}
          />
        </button>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div
      className={`p-5 flex items-center gap-2 justify-between rounded-tl-2xl rounded-tr-2xl bg-purple-600 text-reg`}
    >
      <p className={`font-bold text-[12px] sm:text-sm capitalize`}>
        ©NoorEl-din <span>{new Date().getFullYear()}</span>. All rights reserved
      </p>
      <div className={`flex gap-5`}>
        <FontAwesomeIcon
          icon={faFacebook}
          className={`duration-300 hover:text-white cursor-pointer`}
        />
        <FontAwesomeIcon
          icon={faDiscord}
          className={`duration-300 hover:text-white cursor-pointer`}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className={`duration-300 hover:text-white cursor-pointer`}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className={`duration-300 hover:text-white cursor-pointer`}
        />
      </div>
      <a
        href=""
        className={`text-[12px] sm:text-sm font-bold capitalize duration-300 hover:underline`}
      >
        privacy policy
      </a>
    </div>
  );
};
const Intro = () => {
  const [isIntro, setIsIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 2000);
  }, []);
  return (
    <AnimatePresence>
      {isIntro && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed bg-[#dfdff0] top-0 left-0 z-50 w-full h-full grid place-content-center`}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: "360deg" }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className={`w-[40px] h-[40px] relative`}
          >
            <motion.span
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className={`w-3 h-3 rounded-full absolute top-0 left-1/2 -translate-x-1/2 bg-purple-600`}
            ></motion.span>
            <motion.span
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className={`w-3 h-3 rounded-full absolute bottom-0 right-0 bg-purple-600`}
            ></motion.span>
            <motion.span
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                delay: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className={`w-3 h-3 rounded-full absolute bottom-0 left-0 bg-purple-600`}
            ></motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
