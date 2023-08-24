import React, { useState } from "react";
import Nav from "../components/nav.js";
import LandingPage from "../images/LandingPage.jpeg";
import CV from "../images/CV.png";
import LinkedIn from "../images/linkedIn.png";
import Github from "../images/github.png";
import Gmail from "../images/gmail.png";
import HomeRental from "../images/HomeRental.png";
import HomeRental1 from "../images/HomeRental1.png";
import HomeRental2 from "../images/HomeRental2.png";
import HomeRental3 from "../images/HomeRental3.png";
import HomeRental4 from "../images/HomeRental4.png";
import HomeRental5 from "../images/HomeRental5.png";
import HomeRental6 from "../images/HomeRental6.png";

import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJava,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoJavascript,
  BiLogoFirebase,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

function Home() {
  const [resume, setResume] = useState(false);
  const [HomeRentalDetails, setHomeRentalDetails] = useState(false);
  const LandingImg = {
    backgroundImage: `url(${LandingPage})`,
    zIndex: "-1",
  };
  return (
    <div className="flex flex-col ">
      {/*NAV */}
      <Nav />

      {/* Landing Page */}
      <div className="h-screen ">
        <div
          class="relative overflow-hidden  bg-cover bg-no-repeat p-12 h-full text-center "
          style={LandingImg}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div class="flex h-full items-center justify-center">
            <div class="text-white  p-2 rounded-lg">
              <h2 class="mb-4 text-6xl text-[#EAF4F4]  font-semibold animate-fade-left animate-duration-[5000ms]">
                Oisin Egan
              </h2>
              <h4 class="mb-6 text-2xl text-[#A4C3B2]  font-semibold animate-fade-right animate-duration-[5000ms]">
                Final year computing student.
              </h4>
              <div className="flex justify-between ">
                <img
                  src={LinkedIn}
                  className="animate-fade-right animate-duration-[2000ms]"
                ></img>

                <img
                  src={Github}
                  className="animate-fade-up animate-duration-[2000ms]"
                ></img>

                <img
                  src={Gmail}
                  className="animate-fade-left animate-duration-[2000ms]"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT AND EDUCATION */}
      <div className="bg-[#f9f9f9] flex flex-col pt-20 " id="about">
        <h1 className="text-5xl font-extrabold text-[#6B9080] px-8">
          About me
        </h1>

        <p className="py-6 px-8 text-xl">
          I am <span className="text-[#A4C3B2]">Oisin Egan</span>, a 23 year old
          Computing student in Technological University Dublin (Tu860). I am in
          my final year of studies. Over the first three years of studying
          computing I have maintained a{" "}
          <span className="text-[#A4C3B2]">3.5 gpa or higher</span>. I like
          sports, programming and learning new things. Outside of academic
          studies, I enjoy developing{" "}
          <span className="text-[#A4C3B2]">full stack applications</span> using
          new technologies that I don't learn in university to maximize my
          skills.
        </p>

        <div className="flex  justify-center items-center mt-8">
          <button
            type="button"
            onClick={() => {
              setResume(true);
            }}
            class="ml-8 mb-8  text-xl text-white bg-[#6B9080] hover:bg-[#A4C3B2]  font-medium rounded-lg text-sm px-5 py-2.5 mr-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Resume
          </button>
        </div>

        {resume && (
          <div class="  w-full  flex justify-center  pb-10 overflow-y-auto h-[full] md:inset-0  max-h-full ">
            <div class=" w-full max-w-2xl max-h-full">
              <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-[#6B9080] dark:text-white">
                    My Resume
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setResume(false);
                    }}
                    class="text-[#6B9080] bg-transparent hover:bg-[#A4C3B2]  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <img src={CV} className="h-auto w-full " />

                <div class="flex items-center justify-end px-12 py-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="button"
                    onClick={() => {
                      setResume(false);
                    }}
                    class="text-white bg-[#6B9080] hover:bg-[#A4C3B2]  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Skills  */}
      <div id="skills">
        <div className="flex flex-col ">
          <h1 class="text-5xl font-bold text-gray-900 leading-tight mb-8 pb-4 flex flex-col items-center mt-24  ">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]">
              Front End
            </span>
            <span class=" w-1/3 h-1 bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]"></span>
          </h1>
          <div className="flex justify-center flex-wrap ">
            <div className="flex justify-between mx-12 xl:w-1/2  flex-wrap">
              {/*HTML*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl ">
                <div className="p-1 rounded-full">
                  <BiLogoHtml5 className="h-24 w-24 " />
                </div>
                <p className="">Html</p>
              </div>
              {/*React*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoReact className="h-24 w-24 " />
                </div>
                <p className="">React</p>
              </div>
              {/*Tailwinds*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoTailwindCss className="h-24 w-24 " />
                </div>
                <p className="">Tailwind Css</p>
              </div>

              {/*React Native*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoReact className="h-24 w-24" />
                </div>
                <p className="">React Native</p>
              </div>

              {/*Css */}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoCss3 className="h-24 w-24 " />
                </div>
                <p className="">Css</p>
              </div>

              {/*Next js*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <TbBrandNextjs className="h-24 w-24 " />
                </div>
                <p className="">Next js</p>
              </div>
            </div>
          </div>

          <h1 class="text-5xl font-bold text-gray-900 leading-tight mb-8 pb-4 flex flex-col items-center mt-24 ">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]">
              Back End
            </span>
            <span class=" w-1/3 h-1 bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]"></span>
          </h1>
          <div className="flex justify-center flex-wrap mb-24 ">
            <div className="flex justify-between xl:w-1/2  mx-12  flex-wrap ">
              {/*Java*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoJava className="h-24 w-24" />
                </div>
                <p className="">Java</p>
              </div>
              {/*Node*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoNodejs className="h-24 w-24 " />
                </div>
                <p className="">Node</p>
              </div>
              {/*Php*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoPhp className="h-24 w-24" />
                </div>
                <p className="">Php</p>
              </div>

              {/*MySql */}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <DiMysql className="h-24 w-24 " />
                </div>
                <p className="">MySql</p>
              </div>

              {/*JS*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoJavascript className="h-24 w-24 " />
                </div>
                <p className="">Javascript</p>
              </div>

              {/*JS*/}
              <div className="flex flex-col  items-center  p-2 rounded-2xl">
                <div className="p-1 rounded-full">
                  <BiLogoFirebase className="h-24 w-24 " />
                </div>
                <p className="">Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects  */}
      <div className="bg-[#f9f9f9] h-screen flex flex-col " id="projects">
        <h1 className="text-5xl font-extrabold text-[#6B9080] px-8 mt-12">
          Projects
        </h1>
        <div className="flex mx-16 my-8 w-1/2">
          <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              class=" overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img className="rounded-t-lg w-full" src={HomeRental} alt="" />
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-2xl  font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                Full stack Home Rental Website
              </h5>
              <div className="flex my-4 justify-center">
                <div className="flex flex-col  items-center  p-2 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoReact className="h-14 w-14 " />
                  </div>
                  <p className="text-sm">React</p>
                </div>
                <div className="flex flex-col  items-center  p-2 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoTailwindCss className="h-14 w-14 " />
                  </div>
                  <p className="text-sm">Tailwind</p>
                </div>
                <div className="flex flex-col  items-center  p-2 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoJavascript className="h-14 w-14 " />
                  </div>
                  <p className="text-sm">Express js</p>
                </div>
                <div className="flex flex-col  items-center  p-2 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoNodejs className="h-14 w-14 " />
                  </div>
                  <p className="text-sm">Node js</p>
                </div>
                <div className="flex flex-col  items-center  p-2 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <DiMysql className="h-14 w-14 " />
                  </div>
                  <p className="text-sm">MySql</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setHomeRentalDetails(true);
                  }}
                  type="button"
                  class="inline-block rounded bg-[#6B9080] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ]"
                >
                  More details
                </button>
                <a
                  href="https://home-rental-client.vercel.app/"
                  target="_blank"
                >
                  <button
                    type="button"
                    class=" inline-block  rounded bg-[#6B9080] px-6 ml-4 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]]"
                  >
                    View Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          {HomeRentalDetails && (
            <div
              id="defaultModal"
              tabindex="-1"
              aria-hidden="true"
              class="fixed inset-0 flex justify-center items-center bg-gray-500/50 w-full p-4 overflow-x-hidden overflow-y-auto  max-h-full"
            >
              <div class=" w-full max-w-2xl max-h-full">
                <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-start justify-between p-2   border-b rounded-t dark:border-gray-600">
                    <button
                      type="button"
                      class="text-black  ay-400 bg-transparent hover:bg-[#a4c3b2] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="defaultModal"
                      onClick={() => {
                        setHomeRentalDetails(false);
                      }}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="w-full carousel ">
                    <div className="carousel-item w-full" id="HomeRental1">
                      <img
                        src={HomeRental1}
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                    <div className="carousel-item w-full" id="HomeRental2">
                      <img
                        src={HomeRental2}
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                    <div className="carousel-item w-full" id="HomeRental3">
                      <img
                        src={HomeRental3}
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                    <div className="carousel-item w-full" id="HomeRental4">
                      <img
                        src={HomeRental4}
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                    <div className="carousel-item w-full" id="HomeRental5">
                      <img
                        src={HomeRental5}
                        className="w-full h-60 mt-24"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                    <div className="carousel-item w-full  " id="HomeRental6">
                      <img
                        src={HomeRental6}
                        className="w-full "
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#HomeRental1" className="btn btn-xs">
                      1
                    </a>
                    <a href="#HomeRental2" className="btn btn-xs">
                      2
                    </a>
                    <a href="#HomeRental3" className="btn btn-xs">
                      3
                    </a>
                    <a href="#HomeRental4" className="btn btn-xs">
                      4
                    </a>
                    <a href="#HomeRental5" className="btn btn-xs">
                      5
                    </a>
                    <a href="#HomeRental6" className="btn btn-xs">
                      6
                    </a>
                  </div>

                  <div>
                    <h1 class="text-3xl  pt-2 px-8 font-semibold text-gray-900 dark:text-white">
                      HomeRental.
                    </h1>
                    <p className="py-6 px-8 text-xl ">
                      I developed a full stack home rental website using{" "}
                      <span className="bg-[#cce3de] px-1">
                        React, Tailwind, Expres js, Node js and MySql.
                      </span>{" "}
                      The website allows for users to find homes in an area via
                      a search function or filter function. A Landlord can sign
                      in to list a rental property. The images are stored in{" "}
                      <span className="bg-[#cce3de] px-1">
                        firebase storage.
                      </span>{" "}
                      The sign in system was implemented using{" "}
                      <span className="bg-[#cce3de] px-1">
                        {" "}
                        JSON web tokens.
                      </span>{" "}
                      The passwords in the database are hashed using{" "}
                      <span className="bg-[#cce3de] px-1"> Bycrypt.</span> A
                      user can view a property and contact the landlord using a
                      form. The form details are send to the landlords email
                      using{" "}
                      <span className="bg-[#cce3de] px-1"> SendGrid API</span>.
                      The Front end is deployed on{" "}
                      <span className="bg-[#cce3de] px-1"> Vercel.</span> The
                      Backend is deployed on{" "}
                      <span className="bg-[#cce3de] px-1"> Render</span> and the
                      database is{" "}
                      <span className="bg-[#cce3de] px-1"> PlanetScale</span> a
                      serverless SQL platform
                    </p>
                  </div>
                  <div class="flex justify-between bg-[#cce3de] p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <div className="flex flex-col  items-center    rounded-2xl">
                      <div className="p-1 rounded-full">
                        <BiLogoReact className="h-14 w-14 " />
                      </div>
                      <p className="text-sm">React</p>
                    </div>
                    <div className="flex flex-col  items-center rounded-2xl">
                      <div className="p-1 rounded-full">
                        <BiLogoTailwindCss className="h-14 w-14 " />
                      </div>
                      <p className="text-sm">Tailwind</p>
                    </div>
                    <div className="flex flex-col  items-center   rounded-2xl">
                      <div className="p-1 rounded-full">
                        <BiLogoJavascript className="h-14 w-14 " />
                      </div>
                      <p className="text-sm">Express js</p>
                    </div>
                    <div className="flex flex-col  items-center rounded-2xl">
                      <div className="p-1 rounded-full">
                        <BiLogoNodejs className="h-14 w-14 " />
                      </div>
                      <p className="text-sm">Node js</p>
                    </div>
                    <div className="flex flex-col  items-center rounded-2xl">
                      <div className="p-1 rounded-full">
                        <DiMysql className="h-14 w-14 " />
                      </div>
                      <p className="text-sm">MySql</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Contact  */}
      <div
        className="bg-white h-screen flex justify-center items-center"
        id="contact"
      >
        <h1 className="text-5xl font-extrabold ">CONTACT</h1>
      </div>
      {/* FOOTER  */}
      <div className="bg-[#A4C3B2]">
        <h1>FOOTER</h1>
      </div>
    </div>
  );
}

export default Home;
