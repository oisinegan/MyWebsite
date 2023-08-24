import React, { useState } from "react";
import Nav from "../components/nav.js";
import LandingPage from "../images/LandingPage.jpeg";
import CV from "../images/CV.png";
import LinkedIn from "../images/linkedIn.png";
import Github from "../images/github.png";
import Gmail from "../images/gmail.png";
import Cicon from "../images/Cicon.png";
import HomeRental from "../images/HomeRental.png";
import HomeRental1 from "../images/HomeRental1.png";
import HomeRental2 from "../images/HomeRental2.png";
import HomeRental3 from "../images/HomeRental3.png";
import HomeRental4 from "../images/HomeRental4.png";
import HomeRental5 from "../images/HomeRental5.png";
import HomeRental6 from "../images/HomeRental6.png";
import JH1 from "../images/JH1.png";
import JH2 from "../images/JH2.png";
import JH3 from "../images/JH3.png";
import JH4 from "../images/JH4.png";
import JH5 from "../images/JH5.png";
import JH6 from "../images/JH6.png";
import JH7 from "../images/JH7.png";
import HC1 from "../images/HC1.png";
import HC2 from "../images/HC2.png";
import HC3 from "../images/HC3.png";
import SF1 from "../images/SF1.png";
import SF2 from "../images/SF2.png";
import SF3 from "../images/SF3.png";
import SF4 from "../images/SF4.png";
import SM1 from "../images/SM1.png";
import SM2 from "../images/SM2.png";
import SM3 from "../images/SM3.png";
import SM4 from "../images/SM4.png";
import SM5 from "../images/SM5.png";
import SM6 from "../images/SM6.png";
import ss1 from "../images/ss1.png";
import ss4 from "../images/ss4.png";
import ss6 from "../images/ss6.png";

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
  BiLogoUnity,
} from "react-icons/bi";
import { DiFirebase, DiMysql } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

import { SiExpo, SiAgora, SiBootstrap, SiCsharp } from "react-icons/si";

function Home() {
  const [resume, setResume] = useState(false);
  const [HomeRentalDetails, setHomeRentalDetails] = useState(false);
  const [JobHireDetails, setJobHireDetails] = useState(false);
  const [HuffmanDetails, setHuffmanDetails] = useState(false);
  const [EcommDetails, setEcommDetails] = useState(false);
  const [CovidDetails, setCovidDetails] = useState(false);
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

      {/* ABOUT */}
      <div className="bg-[#f9f9f9] flex flex-col pt-20 " id="about">
        <h1 className="text-5xl font-extrabold text-[#6B9080] px-8">
          About me
        </h1>

        <p className="py-6 px-8 text-xl">
          I am <span className="text-[#A4C3B2]">Oisin Egan</span>, a final year
          Computing student in Technological University Dublin (Tu860). Over the
          first three years of studying computing I have maintained a{" "}
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
      <div className="bg-[#f9f9f9]  flex flex-col " id="projects">
        <h1 className="text-5xl font-extrabold text-[#6B9080] px-8 mt-12">
          Projects
        </h1>
        <div className="flex flex-wrap">
          {/*Project 1*/}
          <div className="flex mx-16 my-8 w-1/3">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                class=" overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg w-full h-[24em]"
                  src={HomeRental}
                  alt=""
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 text-3xl text-center border-t-2 pt-2 font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]">
                  Home Rental Website
                </h5>
                <div className="flex my-4 justify-center">
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoReact className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">React</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoTailwindCss className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Tailwind</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoJavascript className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Express js</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoNodejs className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Node js</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <DiMysql className="h-12 w-12 " />
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
                class="fixed inset-0 flex justify-center items-center bg-gray-500/90 w-full p-4 overflow-x-hidden overflow-y-auto  max-h-full"
              >
                <div class=" w-full max-w-2xl max-h-full">
                  <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-2    rounded-t dark:border-gray-600">
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
                        The website allows for users to find homes in an area
                        via a search function or filter function. A Landlord can
                        sign in to list a rental property. The images are stored
                        in{" "}
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
                        user can view a property and contact the landlord using
                        a form. The form details are send to the landlords email
                        using{" "}
                        <span className="bg-[#cce3de] px-1"> SendGrid API</span>
                        . The Front end is deployed on{" "}
                        <span className="bg-[#cce3de] px-1"> Vercel.</span> The
                        Backend is deployed on{" "}
                        <span className="bg-[#cce3de] px-1"> Render</span> and
                        the database is{" "}
                        <span className="bg-[#cce3de] px-1"> PlanetScale</span>{" "}
                        a serverless SQL platform
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
          {/*Project 2*/}
          <div className="flex mx-16 my-8 w-1/3">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                class=" overflow-hidden bg-cover bg-no-repeat flex justify-center items-center"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg   w-1/2 h-[24em]"
                  src={JH1}
                  alt=""
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 text-3xl text-center border-t-2 pt-2 font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]">
                  Job Hiring Mobile App
                </h5>
                <div className="flex my-4 justify-center">
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoReact className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">React Native</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <SiExpo className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Expo</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <DiFirebase className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Firebase</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoReact className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">React</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <SiAgora className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Agora</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setJobHireDetails(true);
                    }}
                    type="button"
                    class="inline-block rounded bg-[#6B9080] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ]"
                  >
                    More details
                  </button>
                </div>
              </div>
            </div>
            {JobHireDetails && (
              <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                class="fixed inset-0 flex justify-center items-center bg-gray-500/90 w-full p-4 overflow-x-hidden overflow-y-auto  max-h-full"
              >
                <div class=" w-full max-w-2xl max-h-full">
                  <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-2    rounded-t dark:border-gray-600">
                      <button
                        type="button"
                        class="text-black  ay-400 bg-transparent hover:bg-[#a4c3b2] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                        onClick={() => {
                          setJobHireDetails(false);
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

                    <div className="w-full carousel  ">
                      <div
                        className="carousel-item w-full flex justify-center "
                        id="JH2"
                      >
                        <img
                          src={JH2}
                          className=" w-1/2 h-[40em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="JH3"
                      >
                        <img
                          src={JH3}
                          className=" w-1/2 h-[40em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="JH4"
                      >
                        <img
                          src={JH4}
                          className=" w-1/2 h-[40em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center "
                        id="JH5"
                      >
                        <img
                          src={JH5}
                          className=" w-1/2 h-[40em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="JH6"
                      >
                        <img
                          src={JH6}
                          className=" w-1/2 h-[40em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full  flex justify-center"
                        id="JH7"
                      >
                        <img
                          src={JH7}
                          className=" w-1/2 h-[40em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                      <a href="#JH2" className="btn btn-xs">
                        1
                      </a>
                      <a href="#JH3" className="btn btn-xs">
                        2
                      </a>
                      <a href="#JH4" className="btn btn-xs">
                        3
                      </a>
                      <a href="#JH5" className="btn btn-xs">
                        4
                      </a>
                      <a href="#JH6" className="btn btn-xs">
                        5
                      </a>
                      <a href="#JH7" className="btn btn-xs">
                        6
                      </a>
                    </div>

                    <div>
                      <h1 class="text-3xl  pt-2 px-8 font-semibold text-gray-900 dark:text-white">
                        Job Hiring Mobile app.
                      </h1>
                      {/*  <span className="bg-[#cce3de] px-1"> */}
                      <p className="py-6 px-8 text-xl ">
                        This was a{" "}
                        <span className="bg-[#cce3de] px-1">
                          year long group project
                        </span>{" "}
                        completed in 3rd year. We build a mobile application to
                        provide all-inclusive job hub where employers and
                        customers do not need to worry about other technologies
                        to connect with each other. A Company could communicate
                        with potential employees through messaging chat and/or
                        video chat. The app worked on both{" "}
                        <span className="bg-[#cce3de] px-1">
                          IOS and Android.
                        </span>{" "}
                        The app went through a full{" "}
                        <span className="bg-[#cce3de] px-1">SDLC</span>. The
                        Front end of the app was build using{" "}
                        <span className="bg-[#cce3de] px-1">
                          {" "}
                          React native and expo.
                        </span>{" "}
                        The Backend was build using{" "}
                        <span className="bg-[#cce3de] px-1">
                          {" "}
                          Firebases Firestore and Storage.
                        </span>{" "}
                        When a user applied for a job the company could view the
                        profile and contact them via message and/or videochat.
                        The{" "}
                        <span className="bg-[#cce3de] px-1">
                          messaging system
                        </span>{" "}
                        was build using{" "}
                        <span className="bg-[#cce3de] px-1">
                          StreamChat API
                        </span>{" "}
                        and the{" "}
                        <span className="bg-[#cce3de] px-1">
                          videochat system
                        </span>{" "}
                        was build using{" "}
                        <span className="bg-[#cce3de] px-1">Agora API</span>.
                      </p>
                    </div>
                    <div class="flex justify-between bg-[#cce3de] p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <BiLogoReact className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">React Native</p>
                      </div>
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <SiExpo className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">Expo</p>
                      </div>
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <DiFirebase className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">Firebase</p>
                      </div>
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <BiLogoReact className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">React</p>
                      </div>
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <SiAgora className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">Agora</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*Project 3*/}
          <div className="flex mx-16 my-8 w-1/3">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                class=" overflow-hidden bg-cover bg-no-repeat flex justify-center items-center"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg   w-full h-[24em]"
                  src={HC1}
                  alt=""
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 text-3xl text-center border-t-2 pt-2 font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]">
                  Huffman Coding
                </h5>
                <div className="flex my-4 justify-center">
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoJava className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Java</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setHuffmanDetails(true);
                    }}
                    type="button"
                    class="inline-block rounded bg-[#6B9080] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ]"
                  >
                    More details
                  </button>
                </div>
              </div>
            </div>
            {HuffmanDetails && (
              <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                class="fixed inset-0 flex justify-center items-center bg-gray-500/50 w-full p-4 overflow-x-hidden overflow-y-auto  max-h-full"
              >
                <div class=" w-full max-w-2xl max-h-full">
                  <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-2    rounded-t dark:border-gray-600">
                      <button
                        type="button"
                        class="text-black  ay-400 bg-transparent hover:bg-[#a4c3b2] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                        onClick={() => {
                          setHuffmanDetails(false);
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

                    <div className="w-full carousel  ">
                      <div
                        className="carousel-item w-full flex justify-center "
                        id="HC1"
                      >
                        <img
                          src={HC1}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="HC2"
                      >
                        <img
                          src={HC2}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="HC3"
                      >
                        <img
                          src={HC3}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                      <a href="#HC1" className="btn btn-xs">
                        1
                      </a>
                      <a href="#HC2" className="btn btn-xs">
                        2
                      </a>
                      <a href="#HC3" className="btn btn-xs">
                        3
                      </a>
                    </div>

                    <div>
                      <h1 class="text-3xl  pt-2 px-8 font-semibold text-gray-900 dark:text-white">
                        Text Compression: Huffman Coding
                      </h1>
                      {/*  <span className="bg-[#cce3de] px-1"> */}
                      <p className="py-6 px-8 text-xl ">
                        For this project I implemented a Huffman coding system
                        using a frequency table. I generated a{" "}
                        <span className="bg-[#cce3de] px-1">
                          referenced based binary tree
                        </span>{" "}
                        to represent the Huffman tree which represents the
                        bit-code for each letter in the alphabet. I used the
                        referenced based binary tree to encode and decode
                        messages as displayed above. This project was
                        implemented with{" "}
                        <span className="bg-[#cce3de] px-1">
                          Java and Java Swing.
                        </span>
                      </p>
                    </div>
                    <div class="flex justify-center bg-[#cce3de] p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <BiLogoJava className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">Java</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*Project 4*/}
          <div className="flex mx-16 my-8 w-1/3">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                class=" overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg w-full h-[20em] mt-8 mb-8"
                  src={SF1}
                  alt=""
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 text-3xl text-center border-t-2 pt-2 font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]">
                  E-Commerce Website
                </h5>
                <div className="flex my-4 justify-center">
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoPhp className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Php</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <DiMysql className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">MySql</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <SiBootstrap className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Bootstrap</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoJavascript className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Javascript</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setEcommDetails(true);
                    }}
                    type="button"
                    class="inline-block rounded bg-[#6B9080] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ]"
                  >
                    More details
                  </button>
                </div>
              </div>
            </div>
            {EcommDetails && (
              <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                class="fixed inset-0 flex justify-center items-center bg-gray-500/90 w-full p-4 overflow-x-hidden overflow-y-auto  max-h-full"
              >
                <div class=" w-full max-w-2xl max-h-full">
                  <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-2    rounded-t dark:border-gray-600">
                      <button
                        type="button"
                        class="text-black  ay-400 bg-transparent hover:bg-[#a4c3b2] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                        onClick={() => {
                          setEcommDetails(false);
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
                      <div className="carousel-item w-full" id="SF1">
                        <img
                          src={SF1}
                          className="w-full"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="carousel-item w-full" id="SF2">
                        <img
                          src={SF2}
                          className="w-full"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="carousel-item w-full" id="SF3">
                        <img
                          src={SF3}
                          className="w-full"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="carousel-item w-full" id="SF4">
                        <img
                          src={SF4}
                          className="w-full"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                      <a href="#SF1" className="btn btn-xs">
                        1
                      </a>
                      <a href="#SF2" className="btn btn-xs">
                        2
                      </a>
                      <a href="#SF3" className="btn btn-xs">
                        3
                      </a>
                      <a href="#SF4" className="btn btn-xs">
                        4
                      </a>
                    </div>

                    <div>
                      <h1 class="text-3xl  pt-2 px-8 font-semibold text-gray-900 dark:text-white">
                        E-commerce website
                      </h1>
                      <p className="py-6 px-8 text-xl ">
                        This group project is a basic E-commerce website mainly
                        using Php and Bootstrap. A user can log into their
                        accout and purchase items, view their cart and checkout.
                      </p>
                    </div>
                    <div class="flex justify-between bg-[#cce3de] p-2 px-8 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <BiLogoPhp className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">Php</p>
                      </div>
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <DiMysql className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">MySql</p>
                      </div>
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <SiBootstrap className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">Bootstrap</p>
                      </div>
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <BiLogoJavascript className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">Javascript</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*Project 5*/}
          <div className="flex mx-16 my-8 w-1/3">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                class=" overflow-hidden bg-cover bg-no-repeat flex justify-center items-center"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg  w-full h-[24em]"
                  src={SM5}
                  alt=""
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 text-3xl text-center border-t-2 pt-2 font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]">
                  Simulating Covid
                </h5>
                <div className="flex my-4 justify-center">
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <img src={Cicon} className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">C</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoJava className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Java</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setCovidDetails(true);
                    }}
                    type="button"
                    class="inline-block rounded bg-[#6B9080] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ]"
                  >
                    More details
                  </button>
                </div>
              </div>
            </div>
            {CovidDetails && (
              <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                class="fixed inset-0 flex justify-center items-center bg-gray-500/50 w-full p-4 overflow-x-hidden overflow-y-auto  max-h-full"
              >
                <div class=" w-full max-w-2xl max-h-full">
                  <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-2    rounded-t dark:border-gray-600">
                      <button
                        type="button"
                        class="text-black  ay-400 bg-transparent hover:bg-[#a4c3b2] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                        onClick={() => {
                          setCovidDetails(false);
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

                    <div className="w-full carousel  ">
                      <div
                        className="carousel-item w-full flex justify-center "
                        id="SM1"
                      >
                        <img
                          src={SM1}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM2"
                      >
                        <img
                          src={SM2}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM3"
                      >
                        <img
                          src={SM3}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM4"
                      >
                        <img
                          src={SM4}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM5"
                      >
                        <img
                          src={SM5}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM6"
                      >
                        <img
                          src={SM6}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                      <a href="#SM1" className="btn btn-xs">
                        1
                      </a>
                      <a href="#SM2" className="btn btn-xs">
                        2
                      </a>
                      <a href="#SM3" className="btn btn-xs">
                        3
                      </a>
                      <a href="#SM4" className="btn btn-xs">
                        4
                      </a>
                      <a href="#SM5" className="btn btn-xs">
                        5
                      </a>
                      <a href="#SM6" className="btn btn-xs">
                        6
                      </a>
                    </div>

                    <div>
                      <h1 class="text-3xl  pt-2 px-8 font-semibold text-gray-900 dark:text-white">
                        Simulating the Spread of Covid-19 using Cellular
                        Automata
                      </h1>
                      {/*  <span className="bg-[#cce3de] px-1"> */}
                      <p className="py-6 px-8 text-xl ">
                        For this project I was tasked with planning and creating
                        a{" "}
                        <span className="bg-[#cce3de] px-1">
                          cellular automata
                        </span>{" "}
                        to simulate the spread of Covid-19 based on a SEIRD
                        model. I created a{" "}
                        <span className="bg-[#cce3de] px-1">
                          serial program
                        </span>{" "}
                        and a{" "}
                        <span className="bg-[#cce3de] px-1">
                          parallel program
                        </span>{" "}
                        using pthreads to simulate the spread of Covid-19 in the{" "}
                        <span className="bg-[#cce3de] px-1">C </span>programming
                        language. I then created a visual program using{" "}
                        <span className="bg-[#cce3de] px-1">Java Swing</span>{" "}
                        which reads the files that the two programs create,
                        which shows how the programs simulate the spread of
                        Covid-19 over time. The files contain the worlds as they
                        generate for a specified number of iterations. After
                        completing the mentioned programs. I compared the{" "}
                        <span className="bg-[#cce3de] px-1">
                          computational performance
                        </span>{" "}
                        of the serial program versus the parallel program.
                      </p>
                    </div>
                    <div class="flex justify-center bg-[#cce3de] p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <img src={Cicon} className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">C</p>
                      </div>
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <BiLogoJava className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">Java</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*Project 6*/}
          <div className="flex mx-16 my-8 w-1/3">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                class=" overflow-hidden bg-cover bg-no-repeat flex justify-center items-center"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg  w-full h-[24em]"
                  src={ss6}
                  alt=""
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 text-3xl text-center border-t-2 pt-2 font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6b9080] to-[#a4c3b2]">
                  Survival Game
                </h5>
                <div className="flex my-4 justify-center">
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <SiCsharp className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">C#</p>
                  </div>
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoUnity className="h-12 w-12 " />
                    </div>
                    <p className="text-sm">Unity</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setCovidDetails(true);
                    }}
                    type="button"
                    class="inline-block rounded bg-[#6B9080] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] ]"
                  >
                    More details
                  </button>
                </div>
              </div>
            </div>
            {CovidDetails && (
              <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                class="fixed inset-0 flex justify-center items-center bg-gray-500/50 w-full p-4 overflow-x-hidden overflow-y-auto  max-h-full"
              >
                <div class=" w-full max-w-2xl max-h-full">
                  <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-2    rounded-t dark:border-gray-600">
                      <button
                        type="button"
                        class="text-black  ay-400 bg-transparent hover:bg-[#a4c3b2] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                        onClick={() => {
                          setCovidDetails(false);
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

                    <div className="w-full carousel  ">
                      <div
                        className="carousel-item w-full flex justify-center "
                        id="SM1"
                      >
                        <img
                          src={SM1}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM2"
                      >
                        <img
                          src={SM2}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM3"
                      >
                        <img
                          src={SM3}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM4"
                      >
                        <img
                          src={SM4}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM5"
                      >
                        <img
                          src={SM5}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div
                        className="carousel-item w-full flex justify-center"
                        id="SM6"
                      >
                        <img
                          src={SM6}
                          className=" w-full h-[30em]"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                      <a href="#SM1" className="btn btn-xs">
                        1
                      </a>
                      <a href="#SM2" className="btn btn-xs">
                        2
                      </a>
                      <a href="#SM3" className="btn btn-xs">
                        3
                      </a>
                      <a href="#SM4" className="btn btn-xs">
                        4
                      </a>
                      <a href="#SM5" className="btn btn-xs">
                        5
                      </a>
                      <a href="#SM6" className="btn btn-xs">
                        6
                      </a>
                    </div>

                    <div>
                      <h1 class="text-3xl  pt-2 px-8 font-semibold text-gray-900 dark:text-white">
                        Simulating the Spread of Covid-19 using Cellular
                        Automata
                      </h1>
                      {/*  <span className="bg-[#cce3de] px-1"> */}
                      <p className="py-6 px-8 text-xl ">
                        For this project I was tasked with planning and creating
                        a{" "}
                        <span className="bg-[#cce3de] px-1">
                          cellular automata
                        </span>{" "}
                        to simulate the spread of Covid-19 based on a SEIRD
                        model. I created a{" "}
                        <span className="bg-[#cce3de] px-1">
                          serial program
                        </span>{" "}
                        and a{" "}
                        <span className="bg-[#cce3de] px-1">
                          parallel program
                        </span>{" "}
                        using pthreads to simulate the spread of Covid-19 in the{" "}
                        <span className="bg-[#cce3de] px-1">C </span>programming
                        language. I then created a visual program using{" "}
                        <span className="bg-[#cce3de] px-1">Java Swing</span>{" "}
                        which reads the files that the two programs create,
                        which shows how the programs simulate the spread of
                        Covid-19 over time. The files contain the worlds as they
                        generate for a specified number of iterations. After
                        completing the mentioned programs. I compared the{" "}
                        <span className="bg-[#cce3de] px-1">
                          computational performance
                        </span>{" "}
                        of the serial program versus the parallel program.
                      </p>
                    </div>
                    <div class="flex justify-center bg-[#cce3de] p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <div className="flex flex-col  items-center  p-2 rounded-2xl">
                        <div className="p-1 rounded-full">
                          <SiCsharp className="h-12 w-12 " />
                        </div>
                        <p className="text-sm">C#</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
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
