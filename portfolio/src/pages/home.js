import React, { useState } from "react";

import LandingPage from "../images/LandingPage.jpeg";

import LinkedIn from "../images/linkedIn.png";
import Github from "../images/github.png";
import Gmail from "../images/gmail.png";
import Cicon from "../images/Cicon.png";

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
import { HashLink } from "react-router-hash-link";

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

import {
  SiExpo,
  SiAgora,
  SiBootstrap,
  SiCsharp,
  SiTailwindcss,
} from "react-icons/si";

import copy from "copy-to-clipboard";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref: landingRef, inView: landingInView } = useInView();
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: projectsRef, inView: projectsInView } = useInView();
  const { ref: projectsRef1, inView: projectsInView1 } = useInView();
  const { ref: projectsRef2, inView: projectsInView2 } = useInView();
  const { ref: projectsRef3, inView: projectsInView3 } = useInView();
  const { ref: projectsRef4, inView: projectsInView4 } = useInView();
  const { ref: projectsRef5, inView: projectsInView5 } = useInView();
  const { ref: contactRef, inView: ContactInView } = useInView();
  const [msgDetails, setMsgDetails] = useState();
  const [isSubmitted, SetIsSubmitted] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const LandingImg = {
    backgroundImage: `url(${LandingPage})`,
    zIndex: "-1",
  };

  const copyEmail = () => {
    setEmailClicked(true);
    copy("oisinegan00@gmail.com");
    setTimeout(() => {
      setEmailClicked(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMsgDetails((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://websiteserver.onrender.com/SendMessage",
      {
        method: "post",
        body: JSON.stringify(msgDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();

    if (result === "EMAIL SENT") {
      SetIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col no-scrollbar ">
      {/*NAV */}
      {isSafari ? null : (
        <nav
          className={`  flex w-full flex-nowrap justify-end bg-white  text-black shadow-sm
        focus:text-[#CAD2C5] sm:flex-wrap sm:justify-start sm:py-4   sticky top-0 z-50 ${
          landingInView ? "md:hidden" : ""
        }`}
        >
          <div class="flex w-full flex-wrap  justify-end px-3">
            {/* Collapse button */}
            <button
              class="block border-0 bg-transparent px-2 text-[#EBEBEB] hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 sm:hidden"
              type="button"
              onClick={toggleCollapse}
              data-te-collapse-init
              data-te-target="#navbarSupportedContent8"
              aria-controls="navbarSupportedContent8"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  class="h-16 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {/* nav items */}
            <div
              class={`!visible mt-2 ${
                isCollapsed ? "hidden" : "flex"
              } flex-grow basis-[100%] items-center justify-center sm:justify-end sm:mt-0 sm:!flex sm:basis-auto`}
              id="navbarSupportedContent8"
              data-te-collapse-item
            >
              <ul
                class="list-style-none flex flex-col pl-0 sm:mt-0 sm:flex-row"
                data-te-navbar-nav-ref
              >
                <HashLink
                  to="/#about"
                  className=" my-1 pl-2 sm:my-0 sm:pl-2 sm:pr-1 mx-2 font-bold text-black hover:text-[#6B9080] "
                >
                  About
                </HashLink>

                <HashLink
                  to="/#projects"
                  className=" my-1 pl-2 sm:my-0 sm:pl-2 sm:pr-1 mx-2 font-bold text-black hover:text-[#6B9080]"
                >
                  Projects
                </HashLink>

                <HashLink
                  to="/#contact"
                  className=" my-1 pl-2 sm:my-0 sm:pl-2 sm:pr-1 mx-2 font-bold text-black hover:text-[#6B9080] "
                >
                  Contact
                </HashLink>
              </ul>
            </div>
          </div>
        </nav>
      )}
      {/* Landing Page */}
      <div className="h-screen" ref={landingRef}>
        <div
          class=" overflow-hidden  bg-cover bg-no-repeat p-12 h-[calc(93vh)] md:h-full text-center "
          style={LandingImg}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div class=" flex h-full items-center justify-center relative z-10">
            <div class="text-white  p-2 rounded-lg">
              <h2 class="mb-4 text-6xl text-[#EAF4F4]  font-semibold animate-fade-left animate-duration-[5000ms]">
                Oisin Egan
              </h2>
              <h4 class="mb-6 text-2xl text-[#A4C3B2]  font-semibold animate-fade-right animate-duration-[5000ms]">
                Final year computing student.
              </h4>
              <div className="flex justify-between ">
                <a
                  href="https://www.linkedin.com/in/OisinEgan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="LinkedIn Logo"
                    src={LinkedIn}
                    className="animate-fade-right animate-duration-[2000ms]"
                  ></img>
                </a>

                <a
                  href="https://github.com/oisinegan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Github Logo"
                    src={Github}
                    className="animate-fade-up animate-duration-[2000ms]"
                  ></img>
                </a>

                <button onClick={copyEmail}>
                  <img
                    alt="Gmail logo"
                    src={Gmail}
                    className="animate-fade-left animate-duration-[2000ms]"
                  ></img>
                </button>
              </div>
              {emailClicked && (
                <p className="pt-4 text-[#A4C3B2] font-semibold">
                  Email copied to clipboard
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT AND SKILLS     */}
      <div className="min-h-screen flex items-center justify-center" id="about">
        <div className="flex flex-col lg:flex-row  mx-12  mt-20" ref={aboutRef}>
          <div className="flex basis-1/2 flex-col items-center justify-center ">
            <div className="md:w-3/4">
              <div>
                <h1
                  className={`text-5xl flex justify-center font-extrabold text-black  px-8 mb-2 ${
                    aboutInView
                      ? "md:animate-fade-right md:animate-duration-[3000ms]"
                      : "md:hidden"
                  }`}
                >
                  About me
                </h1>

                <p
                  className={`py-6 pl-4 text-xl ${
                    aboutInView
                      ? "md:animate-fade-up md:animate-duration-[3000ms]"
                      : "md:hidden"
                  }`}
                >
                  I am <span className="text-[#A4C3B2]">Oisin Egan</span>, a
                  final year Computing student in Technological University
                  Dublin (Tu860). Over the first three years of studying
                  computing I have maintained a{" "}
                  <span className="text-[#A4C3B2]">3.5 gpa or higher</span>. I
                  like sports, programming and learning new things. Outside of
                  academic studies, I enjoy developing{" "}
                  <span className="text-[#A4C3B2]">
                    full stack applications
                  </span>{" "}
                  using new technologies that I don't learn in university to
                  maximize my skills.
                </p>

                <div
                  className={`flex  justify-center items-center mt-4 ${
                    aboutInView
                      ? "md:animate-fade-right md:animate-duration-[2500ms]"
                      : "md:hidden"
                  }`}
                >
                  <a
                    rel="noopener noreferrer"
                    href="https://oisinegancv.tiiny.site/"
                    target="_blank"
                    class="ml-8  mb-8  text-xl text-white bg-[#6B9080] hover:bg-[#A4C3B2]  font-medium rounded-lg text-sm px-5 py-2.5 mr-6  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex justify-center flex-col">
            <div>
              <h1
                className={`text-5xl flex justify-center font-extrabold text-black   px-8 mt-4 ${
                  aboutInView
                    ? "md:animate-fade-left md:animate-duration-[3000ms]"
                    : "md:hidden"
                }`}
              >
                Skills
              </h1>
              <div className="flex justify-center flex-wrap pt-6  ">
                <div
                  className={`grid grid-cols-3 gap-4 2xl:grid-cols-4 bg-[#f9f9f9]  rounded-3xl p-4 mb-8 ${
                    aboutInView
                      ? "md:animate-fade-up md:animate-duration-[3000ms]"
                      : "md:hidden"
                  }`}
                >
                  {/*HTML*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl ">
                    <div className="p-1 rounded-full">
                      <BiLogoHtml5 className="h-14 w-14 " />
                    </div>
                    <p className="">Html</p>
                  </div>
                  {/*React*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoReact className="h-14 w-14 " />
                    </div>
                    <p className="">React</p>
                  </div>
                  {/*Tailwinds*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoTailwindCss className="h-14 w-14 " />
                    </div>
                    <p className="">Tailwind</p>
                  </div>

                  {/*React Native*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoReact className="h-14 w-14 " />
                    </div>
                    <p className="">React N</p>
                  </div>

                  {/*Css */}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoCss3 className="h-14 w-14 " />
                    </div>
                    <p className="">Css</p>
                  </div>

                  {/*Next js*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <TbBrandNextjs className="h-14 w-14 " />
                    </div>
                    <p className="">Next js</p>
                  </div>

                  {/*Java*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoJava className="h-14 w-14 " />
                    </div>
                    <p className="">Java</p>
                  </div>
                  {/*Node*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoNodejs className="h-14 w-14 " />
                    </div>
                    <p className="">Node</p>
                  </div>
                  {/*Php*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoPhp className="h-14 w-14 " />
                    </div>
                    <p className="">Php</p>
                  </div>

                  {/*MySql */}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <DiMysql className="h-14 w-14 " />
                    </div>
                    <p className="">MySql</p>
                  </div>

                  {/*JS*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoJavascript className="h-14 w-14 " />
                    </div>
                    <p className="">Javascript</p>
                  </div>

                  {/*JS*/}
                  <div className="flex flex-col  items-center  p-2 rounded-2xl">
                    <div className="p-1 rounded-full">
                      <BiLogoFirebase className="h-14 w-14 " />
                    </div>
                    <p className="">Firebase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects  */}
      <div
        className="bg-[#f9f9f9]  flex flex-col px-2  min-h-screen"
        id="projects"
      >
        <h1 className="text-7xl flex justify-center font-extrabold text-black  px-8 my-24">
          Projects
        </h1>
        <div className="flex  flex-wrap ">
          <div
            className="flex flex-col lg:flex-row w-full mt-6 mb-24  min-h-screen"
            ref={projectsRef}
          >
            <div
              className={`basis-1/2 flex flex-col items-center justify-center p-6 ${
                projectsInView
                  ? "md:animate-fade-right md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <div className="w-full carousel  md:min-h-[30em] shadow-2xl shadow-[#cce3de] rounded-md ">
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
            </div>
            <div
              className={`basis-1/2 flex flex-col justify-center lg:px-14 xl:px-20 ${
                projectsInView
                  ? "md:animate-fade-left md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <h3 class="mb-2 text-4xl text-center  pt-2 font-semibold leading-tight text-black">
                Home Rental Website
              </h3>

              <p className="py-2 px-8 text-lg ">
                I developed a full stack home rental website using{" "}
                <span className="bg-[#cce3de] px-1">
                  React, Tailwind, Expres js, Node js and MySql.
                </span>{" "}
                The website allows for users to find homes in an area via a
                search function or filter function. A Landlord can sign in to
                list a rental property. The images are stored in{" "}
                <span className="bg-[#cce3de] px-1">firebase storage.</span> The
                sign in system was implemented using{" "}
                <span className="bg-[#cce3de] px-1"> JSON web tokens.</span> The
                passwords in the database are hashed using{" "}
                <span className="bg-[#cce3de] px-1"> Bycrypt.</span> A user can
                view a property and contact the landlord using a form. The form
                details are send to the landlords email using{" "}
                <span className="bg-[#cce3de] px-1"> SendGrid API</span>. The
                Front end is deployed on{" "}
                <span className="bg-[#cce3de] px-1"> Vercel.</span> The Backend
                is deployed on{" "}
                <span className="bg-[#cce3de] px-1"> Render</span> and the
                database is{" "}
                <span className="bg-[#cce3de] px-1"> PlanetScale</span> a
                serverless SQL platform
              </p>

              <div className="flex my-2 justify-center">
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoReact className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">React</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <SiTailwindcss className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Tailwind</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoJavascript className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Express js</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoNodejs className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Node js</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <DiMysql className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">MySql</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://home-rental-client.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    class=" inline-block  rounded bg-[#6B9080] px-6 ml-4 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]]"
                  >
                    View Live
                  </button>
                </a>
                <a
                  href="https://github.com/oisinegan/HomeRental"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    class=" inline-block  rounded bg-[#6B9080] px-6 ml-4 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]]"
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col-reverse bg-[#f1f1f1] lg:flex-row w-full py-6 mt-6 mb-24 min-h-screen"
            ref={projectsRef1}
          >
            <div
              className={`basis-1/2 flex flex-col justify-center lg:ml-20 ${
                projectsInView1
                  ? "md:animate-fade-right md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <h3 class="mb-2 text-4xl text-center  pt-2 font-semibold leading-tight text-black">
                Job Hiring Mobile App
              </h3>

              <p className="py-2 px-8 text-lg ">
                This was a{" "}
                <span className="bg-[#cce3de] px-1">
                  year long group project
                </span>{" "}
                completed in 3rd year. We build a mobile application to provide
                all-inclusive job hub where employers and customers do not need
                to worry about other technologies to connect with each other. A
                Company can communicate with potential employees through
                messaging chat and/or video chat. The app works on both{" "}
                <span className="bg-[#cce3de] px-1">IOS and Android.</span> The
                app went through a full{" "}
                <span className="bg-[#cce3de] px-1">SDLC</span>. The Front end
                of the app was build using{" "}
                <span className="bg-[#cce3de] px-1">
                  {" "}
                  React native and expo.
                </span>{" "}
                The Backend was build using{" "}
                <span className="bg-[#cce3de] px-1">
                  {" "}
                  Firebases Firestore and Storage.
                </span>{" "}
                When a user applies for a job the company can view the profile
                and contact them via message and/or videochat. The{" "}
                <span className="bg-[#cce3de] px-1">messaging system</span> was
                build using{" "}
                <span className="bg-[#cce3de] px-1">StreamChat API</span> and
                the <span className="bg-[#cce3de] px-1">videochat system</span>{" "}
                was build using{" "}
                <span className="bg-[#cce3de] px-1">Agora API</span>.
              </p>

              <div className="flex my-2 justify-center">
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoReact className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">React N</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <SiExpo className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Expo</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <DiFirebase className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Firebase</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoReact className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">React</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <SiAgora className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Agora</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://github.com/oisinegan/Major-Group-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    class=" inline-block  rounded bg-[#6B9080] px-6 ml-4 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]]"
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>

            <div
              className={`basis-1/2 p-6 flex flex-col items-center justify-center ${
                projectsInView1
                  ? "md:animate-fade-left md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <div className="flex justify-center">
                <div className="  carousel md:h-[30em] lg:h-auto   w-5/12 lg:w-1/2  md:min-h-[28em] md:max-h-[50em] shadow-2xl shadow-[#cce3de] rounded-md ">
                  <div className="carousel-item w-full   " id="JH1">
                    <img
                      src={JH1}
                      className="w-full  "
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full" id="JH2">
                    <img
                      src={JH2}
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full" id="JH3">
                    <img
                      src={JH3}
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full" id="JH4">
                    <img
                      src={JH4}
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full" id="JH5">
                    <img
                      src={JH5}
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full  " id="JH6">
                    <img
                      src={JH6}
                      className="w-full "
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full  " id="JH7">
                    <img
                      src={JH7}
                      className="w-full "
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full py-2 gap-2">
                <a href="#JH1" className="btn btn-xs">
                  1
                </a>
                <a href="#JH2" className="btn btn-xs">
                  2
                </a>
                <a href="#JH3" className="btn btn-xs">
                  3
                </a>
                <a href="#JH4" className="btn btn-xs">
                  4
                </a>
                <a href="#JH5" className="btn btn-xs">
                  5
                </a>
                <a href="#JH6" className="btn btn-xs">
                  6
                </a>
                <a href="#JH7" className="btn btn-xs">
                  7
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full mt-6 mb-24 min-h-screen"
            ref={projectsRef2}
          >
            <div
              className={`basis-1/2 flex flex-col items-center justify-center p-6 ${
                projectsInView2
                  ? "md:animate-fade-right md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <div className="w-full carousel  md:min-h-[30em] shadow-2xl shadow-[#cce3de] rounded-md ">
                <div className="carousel-item w-full" id="SM1">
                  <img
                    src={SM1}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="SM2">
                  <img
                    src={SM2}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="SM3">
                  <img
                    src={SM3}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="SM4">
                  <img
                    src={SM4}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="SM5">
                  <img
                    src={SM5}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="SM6">
                  <img
                    src={SM6}
                    className="w-full"
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
            </div>
            <div
              className={`basis-1/2 flex flex-col justify-center lg:px-14 xl:px-20 ${
                projectsInView2
                  ? "md:animate-fade-left md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <h3 class="mb-2 text-4xl text-center  pt-2 font-semibold leading-tight text-black">
                Simulating the Spread of Covid-19 using a Cellular Automata
              </h3>

              <p className="py-2 px-8 text-lg ">
                For this project I was tasked with planning and creating a{" "}
                <span className="bg-[#cce3de] px-1">cellular automata</span> to
                simulate the spread of Covid-19 based on a SEIRD model. I
                created a{" "}
                <span className="bg-[#cce3de] px-1">serial program</span> and a{" "}
                <span className="bg-[#cce3de] px-1">parallel program</span>{" "}
                using pthreads to simulate the spread of Covid-19 in the{" "}
                <span className="bg-[#cce3de] px-1">C</span> programming
                language. I then created a visual program using{" "}
                <span className="bg-[#cce3de] px-1">Java Swing</span> which
                reads the files that the two programs create, which shows how
                the programs simulate the spread of Covid-19 over time. The
                files contain the worlds as they generate for a specified number
                of iterations. After completing the mentioned programs. I
                compared the{" "}
                <span className="bg-[#cce3de] px-1">
                  computational performance
                </span>{" "}
                of the serial program versus the parallel program.
              </p>

              <div className="flex my-2 justify-center">
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <img src={Cicon} alt="C icon" className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">C</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoJava className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Java</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://github.com/oisinegan/Simulating_Covid19_With_CellularAutomata"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    class=" inline-block  rounded bg-[#6B9080] px-6 ml-4 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]]"
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col-reverse bg-[#f1f1f1] lg:flex-row w-full py-6 mt-6 mb-24 min-h-screen"
            ref={projectsRef3}
          >
            <div
              className={`basis-1/2 flex flex-col justify-center lg:px-14 xl:px-20 ${
                projectsInView3
                  ? "md:animate-fade-right md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <h3 class="mb-2 text-4xl text-center  pt-2 font-semibold leading-tight text-black">
                Huffman Coding
              </h3>

              <p className="py-2 px-8 text-lg ">
                For this project I implemented a Huffman coding system using a
                frequency table. I generated a{" "}
                <span className="bg-[#cce3de] px-1">
                  referenced based binary tree
                </span>{" "}
                to represent the Huffman tree which represents the bit-code for
                each letter in the alphabet. I used the referenced based binary
                tree to encode and decode messages as displayed above. This
                project was implemented with{" "}
                <span className="bg-[#cce3de] px-1">Java and Java Swing.</span>
              </p>

              <div className="flex my-2 justify-center">
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoJava className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Java</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://github.com/oisinegan/HuffmanCoding"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    class=" inline-block  rounded bg-[#6B9080] px-6 ml-4 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]]"
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>
            <div
              className={`basis-1/2 flex flex-col items-center justify-center p-6 ${
                projectsInView3
                  ? "md:animate-fade-left md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <div className="w-full carousel  md:min-h-[30em] shadow-2xl shadow-[#cce3de] rounded-md ">
                <div className="carousel-item w-full" id="HC1">
                  <img
                    src={HC1}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="HC2">
                  <img
                    src={HC2}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="HC3">
                  <img
                    src={HC3}
                    className="w-full"
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
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full mt-6 mb-24 min-h-screen"
            ref={projectsRef4}
          >
            <div
              className={`basis-1/2 flex flex-col items-center justify-center p-6 ${
                projectsInView4
                  ? "md:animate-fade-right md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <div className="w-full carousel  md:min-h-[30em] shadow-2xl shadow-[#cce3de] rounded-md ">
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
            </div>
            <div
              className={`basis-1/2 flex flex-col justify-center lg:px-14 xl:px-20 ${
                projectsInView4
                  ? "md:animate-fade-left md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <h3 class="mb-2 text-4xl text-center  pt-2 font-semibold leading-tight text-black">
                E-commerce website
              </h3>

              <p className="py-2 px-8 text-lg ">
                This group project is a basic E-commerce website build with Php
                and Bootstrap. A user can log into their accout and purchase
                items, view their cart and checkout.
              </p>

              <div className="flex my-2 justify-center">
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoPhp className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Php</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <DiMysql className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">MySql</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <SiBootstrap className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Bootstrap</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoJavascript className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Javascript</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://github.com/oisinegan/Project_SET_WD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    class=" inline-block  rounded bg-[#6B9080] px-6 ml-4 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]]"
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col-reverse bg-[#f1f1f1] lg:flex-row w-full py-12 mt-6 min-h-screen"
            ref={projectsRef5}
          >
            <div
              className={`basis-1/2 flex flex-col justify-center lg:px-14 xl:px-20 ${
                projectsInView5
                  ? "md:animate-fade-right md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <h3 class="mb-2 text-4xl text-center  pt-2 font-semibold leading-tight text-black">
                Zombie Fps Survival Game
              </h3>

              <p className="py-2 px-8 text-lg ">
                For this project we were tasked with creating a game. I worked
                as part of a team to develop a zombie survival game. It involved
                three rounds and a person had to shoot zombie to collect points,
                the points were used to progress to the next round. The user can
                also collect power ups such as fast movement and healing. We
                developed an alpha version and a final version of the survival
                game.
              </p>

              <div className="flex my-2 justify-center">
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <SiCsharp className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">C#</p>
                </div>
                <div className="flex flex-col  items-center  p-1 rounded-2xl">
                  <div className="p-1 rounded-full">
                    <BiLogoUnity className="h-12 w-12 " />
                  </div>
                  <p className="text-sm">Unity</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://github.com/oisinegan/FinalIMMProject"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    class=" inline-block  rounded bg-[#6B9080] px-6 ml-4 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]]"
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>
            <div
              className={`basis-1/2 flex flex-col items-center justify-center p-6 ${
                projectsInView5
                  ? "md:animate-fade-left md:animate-duration-[3000ms]"
                  : "md:hidden"
              }`}
            >
              <div className="w-full carousel  md:min-h-[30em] shadow-2xl shadow-[#cce3de] rounded-md ">
                <div className="carousel-item w-full" id="ss1">
                  <img
                    src={ss1}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="ss4">
                  <img
                    src={ss4}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full" id="ss6">
                  <img
                    src={ss6}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
              </div>
              <div className="flex justify-center w-full py-2 gap-2">
                <a href="#ss1" className="btn btn-xs">
                  1
                </a>
                <a href="#ss4" className="btn btn-xs">
                  2
                </a>
                <a href="#ss6" className="btn btn-xs">
                  3
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact  */}
      <div
        class="py-6 dark:bg-gray-800 dark:text-gray-50 h-screen  flex items-center "
        id="contact"
        ref={contactRef}
      >
        <div
          className={`w-full ${
            ContactInView
              ? "md:animate-fade md:animate-duration-[4000ms]"
              : "md:hidden"
          }`}
        >
          <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div class="py-6 md:py-0 md:px-6">
              <h1 class="text-5xl font-bold mb-6">Get in touch</h1>

              <div class="space-y-4">
                <p class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Dublin</span>
                </p>
                <p class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/OisinEgan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>linkedin.com/in/OisinEgan</span>
                  </a>
                </p>
                <p class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>oisinegan00@gmail.com</span>
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              class="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            >
              <label class="block">
                <span class="mb-1">Full name</span>
                <input
                  name="fullName"
                  required
                  onChange={handleChange}
                  type="text"
                  placeholder="Joe Smith"
                  class="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
                />
              </label>
              <label class="block">
                <span class="mb-1">Email address</span>
                <input
                  name="email"
                  required
                  onChange={handleChange}
                  type="email"
                  placeholder="name@email.com"
                  class="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
                />
              </label>
              <label class="block">
                <span class="mb-1">Message</span>
                <textarea
                  rows="4"
                  name="message"
                  required
                  maxLength={2000}
                  onChange={handleChange}
                  placeholder="Your message..."
                  class="block w-full rounded-md shadow-md focus:ring focus:ri focus:ri dark:bg-gray-800"
                ></textarea>
              </label>
              <button
                type="submit"
                class="self-center px-6 py-2 text-lg rounded focus:ring bg-[#A4C3B2] hover:ring focus:ri  focus:ri hover:ri ring-[#A4C3B2]"
              >
                Submit
              </button>
            </form>
          </div>
          {isSubmitted && (
            <div
              class="bg-green-100 border border-green-400 text-green-700 px-8 py-8 rounded relative mx-4 mt-8"
              role="alert"
            >
              <strong class="font-bold">Received! </strong>
              <span class="block sm:inline">
                Your message has been received! Thank you!
              </span>
              <button type="button" onClick={() => SetIsSubmitted(false)}>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    class="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/*Footer  */}
      <footer class="footer footer-center flex justify-between px-8  w-full p-4 bg-[#A4C3B2] text-gray-800">
        <div>
          <div class="text-center text-lg">
            <a
              class="font-semibold hover:text-white"
              href="https://oisin-egan.vercel.app/"
            >
              Oisin Egan
            </a>
          </div>
        </div>
        <div className="flex">
          <a
            class="font-semibold  hover:text-white"
            href="https://www.linkedin.com/in/OisinEgan"
            target="_Blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            class="font-semibold  hover:text-white"
            href="https://github.com/oisinegan"
            target="_Blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
