import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../utils/Buttons";
import { motion } from "framer-motion";
import { useMyContext } from "../store/ContextApi";
import Landingpageimg from "./images/Landingpageimg.png";


const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const fadeInFromBotom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LandingPage = () => {
  // Access the token  state by using the useMyContext hook from the ContextProvider
  const { token } = useMyContext();

  return (
    <div className="min-h-[calc(100vh-74px)] flex justify-center">
      <div className="lg:w-[80%] w-full py-16  space-y-4  ">
        <motion.h1
          className="font-montserrat uppercase text-headerColor  xl:text-headerText md:text-4xl text-2xl mx-auto text-center font-bold sm:w-[95%] w-full"
          initial="hidden"
          animate="visible"
          variants={fadeInFromTop}
        >
          Turn your thoughts into secure, organized notes And Faster.
        </motion.h1>
        <h3 className="text-logoText md:text-2xl text-xl font-semibold text-slate-800 text-center">
          The #1 secured note-taking app.
        </h3>
        <p className="text-slate-700 text-center sm:w-[80%] w-[90%] mx-auto">
          Manage your notes effortlessly and securely. Just type, save, and
          access them from anywhere with robust encryption and seamless
          synchronization.
        </p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromBotom}
          className="flex items-center justify-center gap-3 py-10 "
          >
          {token ? (
            <>
              <Link to="/create-note">
                <Buttons className="sm:w-52 w-44 bg-customRed font-semibold hover:scale-105 transition-all duration-200 cursor-pointer text-white px-10 py-3 rounded-sm">
                  Create Note
                </Buttons>
              </Link>
              <Link to="/notes">
                <Buttons className="sm:w-52 w-44 bg-btnColor font-semibold hover:scale-105 transition-all duration-200 cursor-pointer text-white px-10 py-3 rounded-sm">
                  My Notes
                </Buttons>
              </Link>
            </>
            ) : (
            <>
              <Link to="/login">
                <Buttons className="sm:w-52 w-44 bg-customRed font-semibold hover:scale-105 transition-all duration-200 cursor-pointer text-white px-10 py-3 rounded-sm">
                  SignIn
                </Buttons>
              </Link>
              <Link to="/signup">
                <Buttons className="sm:w-52 w-44 bg-btnColor font-semibold hover:scale-105 transition-all duration-200 cursor-pointer text-white px-10 py-3 rounded-sm">
                  SignUp
                </Buttons>
              </Link>
            </>
          )}
        </motion.div>

        <motion.h1  
          initial="hidden"
          animate="visible"
          variants={fadeInFromBotom}
          className="text-slate-700 text-2xl font-semibold pb-5 pt-6">
            Why you should choose us!
        </motion.h1>
        
        <div className="flex md:flex-row flex-col md:gap-0 gap-16 justify-between max-width:600px">
          <ul className="list-disc sm:px-5 ps-10 text-slate-700 flex flex-col gap-5 flex-1 overflow-hidden">
            <li>Trusted by thousands of users worldwide.</li>
            <li>Experience reliable access to your notes anytime, anywhere.</li>
            <li>
              Quickly access your notes with our optimized search feature.
            </li>
            <li>
              Quickly access your notes with our optimized search feature.
            </li>
            <li>1000+ trusted users</li>
            <li>99.9% uptime</li>
            <li>2x faster note retrieval</li>
          </ul>
          <div className="flex-1 overflow-hidden">
            
          </div>
        </div>

        <div>
          <img className="landing-image" src={Landingpageimg} alt="landing page icon"></img>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
