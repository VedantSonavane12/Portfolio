import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// Import background images
import backgroundImage1 from "../assets/carousel1.jpg";
import backgroundImage2 from "../assets/carousel2.jpg";
import backgroundImage3 from "../assets/carousel3.jpg";
import backgroundImage4 from "../assets/carousel1.jpg";
import backgroundImage5 from "../assets/carousel2.jpg";

// Import showcase card images
import project1 from "../assets/carousel1.jpg";
import project2 from "../assets/carousel2.jpg";
import project3 from "../assets/carousel3.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const [currentBackground, setCurrentBackground] = useState(backgroundImage1);
  const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setCurrentBackground(prev => {
        const currentIndex = backgroundImages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const steps = [
    {
      step: 1,
      title: "Part-time at Decathlon",
      position: "Customer Service Representative",
      company: "Decathlon",
      location: "New York, NY",
      startDate: "June 2018",
      endDate: "August 2018",
      desc: "Blended love for sports with customer service and teamwork.",
    },
    {
      step: 2,
      title: "Education & Transition",
      position: "Self-Taught Developer",
      company: "Freelance",
      location: "Remote",
      startDate: "September 2018",
      endDate: "Present",
      desc: "Left formal education to follow my passion for software development.",
    },
    {
      step: 3,
      title: "Joining OLLATO Education",
      position: "Software Developer",
      company: "OLLATO Education",
      location: "San Francisco, CA",
      startDate: "January 2020",
      endDate: "December 2021",
      desc: "Built scalable platforms for online learning at OLLATO Education.",
    },
    {
      step: 4,
      title: "Shifting to Delhi & UrbanEtravels",
      position: "Senior Developer",
      company: "UrbanEtravels",
      location: "Delhi, India",
      startDate: "January 2022",
      endDate: "Present",
      desc: "Gained hands-on experience in travel-tech solutions.",
    },
    {
      step: 5,
      title: "New Chapter: Tech Consulting",
      position: "Tech Consultant",
      company: "TechSolutions Inc.",
      location: "Remote",
      startDate: "January 2024",
      endDate: "Present",
      desc: "Providing expert advice and solutions to businesses in the tech industry.",
    }
  ];
  return (
    <div className="relative w-full min-h-screen">

      {/* Rotating Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${currentBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 text-white">
          {/* Title Section */}
          <div className="container mx-auto px-4 py-16 text-white">
            {/* Title Section */}
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-16">
                <h2 className="text-6xl font-bold text-white" data-aos="fade-up">My Journey</h2>
                <p className="text-lg mt-4 italic" data-aos="fade-up">
                  From a passionate sports enthusiast to a dedicated software developer, my journey has been one of continuous learning, growth, and transformation. Along the way, I discovered the world of freelancing, which allowed me to work on diverse projects, collaborate with clients from around the globe, and hone my skills in a dynamic environment. Each project brought new challenges and opportunities, shaping me into the versatile developer I am today.
                </p>
              </div>
              <div className="flex flex-col gap-16 py-12">
                {steps.map(({ step, title, position, company, location, startDate, endDate, desc }, index) => (
                  <div
                    key={step}
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="relative w-full max-w-3xl">
                      {/* Step Circle - Centered on Top */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white text-black flex items-center justify-center rounded-full text-xl font-bold shadow-md">
                        {step}
                      </div>

                      {/* Job Details - Alternates Left/Right with Centered Text */}
                      <div className="text-white border border-white px-6 py-12 rounded-lg hover:shadow-lg hover:bg-white hover:bg-opacity-10 transition-all text-center">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="text-lg font-medium">{position} at {company}</p>
                        <p className="text-lg font-medium">{location}</p>
                        <p className="text-lg font-medium">{startDate} - {endDate}</p>
                        <p className="mt-2">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          <h2 className="text-6xl font-bold text-white mb-8">Hear from My Clients</h2>
          <p className="text-lg mt-6 text-white leading-relaxed">    I take pride in delivering top-notch services that exceed expectations. Here’s what my clients have to say about their experience
            working with me. Their feedback speaks to my dedication, expertise, and passion for delivering excellence.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8 mx-auto p-12" data-aos="fade-up">
          {[
            {
              img: project1,
              name: "John Doe",
              position: "CEO, TechCorp",
              feedback: "An absolute pleasure to work with! Delivered beyond expectations.",
              rating: 5
            },
            {
              img: project2,
              name: "Sarah Lee",
              position: "Founder, EduPlus",
              feedback: "Highly skilled developer with great attention to detail!",
              rating: 4.5
            },
            {
              img: project3,
              name: "Michael Smith",
              position: "CTO, DataWave",
              feedback: "Amazing work! The project was completed ahead of schedule.",
              rating: 5
            },
            {
              img: project1,
              name: "Emma Johnson",
              position: "Marketing Director, BrightAds",
              feedback: "Absolutely fantastic! The communication was seamless, and the results were outstanding.",
              rating: 5
            },
            {
              img: project2,
              name: "David Martinez",
              position: "Lead Developer, InnovateX",
              feedback: "Exceptional skills and professionalism. Would definitely work together again.",
              rating: 4.5
            },
            {
              img: project3,
              name: "Sophia Williams",
              position: "Project Manager, WebFlex",
              feedback: "Great experience from start to finish. The project was handled with great expertise.",
              rating: 5
            },
            {
              img: project1,
              name: "Daniel Brown",
              position: "CEO, StartUpHub",
              feedback: "Exceeded my expectations. Timely delivery and superb quality.",
              rating: 5
            },
            {
              img: project2,
              name: "Olivia Taylor",
              position: "Co-Founder, E-Learn",
              feedback: "Very talented and detail-oriented. Will surely collaborate again in the future!",
              rating: 4.5
            },
            {
              img: project3,
              name: "Liam Anderson",
              position: "Head of Operations, FinTech Solutions",
              feedback: "Delivered a high-quality project with great attention to detail.",
              rating: 5
            },
            {
              img: project1,
              name: "Emily White",
              position: "VP, DigitalMarketing Pro",
              feedback: "Super responsive and highly skilled. A pleasure to work with.",
              rating: 5
            },
          ].map(({ img, name, position, feedback, rating }, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-115  ">

              <img
                src={img}
                alt={name}
                className="w-20 h-20 object-cover rounded-full border-4 border-gray-200 shadow-md"
              />

              <h3 className="text-xl font-bold mt-4">{name}</h3>
              <p className="text-gray-600">{position}</p>
              <p className="text-lg mt-2 text-center">{feedback}</p>

              {/* Star Ratings */}
              <div className="flex mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-yellow-400 text-2xl ${i < Math.floor(rating) ? 'fas fa-star' : 'far fa-star'}`}></span>
                ))}
                {rating % 1 !== 0 && <span className="text-yellow-400 text-2xl fas fa-star-half-alt"></span>}
              </div>
            </div>


          ))}
        </div>




        <section
          ref={sectionRef}
          className="w-full my-16 p-10 text-center bg-transparent"
          data-aos="fade-up"
        >
          <h2 className="text-6xl font-bold text-white mb-8">Tech Ecosystem</h2>
          <motion.p
            className="text-lg mt-6 text-white leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            The tech ecosystem is a vibrant, ever-evolving landscape, where innovation thrives and collaboration fuels growth. From cutting-edge software solutions to advanced hardware technologies, it is a space where ideas transform into impactful products that shape the future of industries. As a software developer, I leverage this dynamic environment to create solutions that are not only scalable but also drive real-world transformation.
          </motion.p>

          {/* Languages Carousel (Left to Right) */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-3xl font-semibold text-white mb-6 mt-4">Languages & Frameworks</h3>
            <Swiper
              slidesPerView={4}  // Show only 6 items
              spaceBetween={20}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
              speed={5000}
              loop={true}
              modules={[Autoplay]}
              className="mt-4"
            >
              {[
                "JavaScript",
                "PHP",
                "Python",
                "TypeScript",
                "Java",
                "C++",
                "React",
                "Node.js",
                "Vue.js",
                "Ruby on Rails",
                "Flutter",
                "Django",
                "Angular",
                "Swift",
                "Go"
              ].map((skill, index) => (
                <SwiperSlide key={index} className="p-6 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md border-2 border-white">
                  {skill}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Databases Carousel (Right to Left) */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-3xl font-semibold text-white mb-4">Databases</h3>
            <Swiper
              slidesPerView={4}  // Show only 6 items
              spaceBetween={20}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
              speed={5000}
              loop={true}
              modules={[Autoplay]}
              className="mt-4"
            >
              {["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis", "SQLite"].map((db, index) => (
                <SwiperSlide key={index} className="p-6 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md border-2 border-white">
                  {db}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* DevOps & Cloud Carousel (Left to Right) */}
          <div data-aos="fade-up">
            <h3 className="text-3xl font-semibold text-white mb-4">DevOps & Cloud</h3>
            <Swiper
              slidesPerView={4}  // Show only 6 items
              spaceBetween={20}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
              speed={5000}
              loop={true}
              modules={[Autoplay]}
              className="mt-4"
            >
              {["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub"].map((devops, index) => (
                <SwiperSlide key={index} className="p-6 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md border-2 border-white">
                  {devops}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Additional Tools & Design Software Carousel (Left to Right) */}
          <div className="mt-12" data-aos="fade-up">
            <h3 className="text-3xl font-semibold text-white mb-6">Additional Tools & Design Software</h3>
            <Swiper
              slidesPerView={4}  // Show only 6 items
              spaceBetween={20}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
              speed={5000}
              loop={true}
              modules={[Autoplay]}
              className="mt-4"
            >
              {[
                "Photoshop",
                "Illustrator",
                "Figma",
                "Sketch",
                "Adobe XD",
                "Blender",
                "InVision",
                "Webflow",
                "Canva",
                "Zeplin"
              ].map((tool, index) => (
                <SwiperSlide key={index} className="p-6 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md border-2 border-white">
                  {tool}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>


        {/* Skills & Expertise Section */}
        <section className="w-full mx-auto my-16 p-10 text-white text-center" data-aos="fade-up">
          <h2 className="text-6xl font-bold text-white mb-8">Skills & Expertise</h2>
          <motion.p
            className="text-lg mt-4 text-white leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Equipped with a diverse skill set and practical experience, I specialize in crafting efficient, scalable, and innovative solutions. From front-end development to back-end architecture, my expertise spans multiple technologies, ensuring seamless digital experiences and high-performance applications.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {/* Education */}
            <div className="p-6 border border-white rounded-2xl text-lg leading-relaxed bg-transparent hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <ul className="list-inside list-disc text-left">
                <li>Bachelor of Science in Computer Science</li>
                <li>Specialized in Software Development & Artificial Intelligence</li>
                <li>Conducted AI-driven Research Projects with Distinction</li>
              </ul>
            </div>

            {/* Skills & Hands-on Experience */}
            <div className="p-6 border border-white rounded-2xl text-lg leading-relaxed bg-transparent hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4">Skills & Hands-on Experience</h3>
              <ul className="list-inside list-disc text-left">
                <li>Proficient in JavaScript, Python, and PHP</li>
                <li>Experienced with React, Node.js, and Django frameworks</li>
                <li>Full-stack Web and Mobile App Development</li>
                <li>Database Architecture (MySQL & MongoDB)</li>
                <li>Cloud Infrastructure & API Integration</li>
              </ul>
            </div>

            {/* NDA */}
            <div className="p-6 border border-white rounded-2xl text-lg leading-relaxed bg-transparent hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4">NDA & Confidential Projects</h3>
              <ul className="list-inside list-disc text-left">
                <li>Collaborated on Proprietary Software for Fortune 500 Clients</li>
                <li>Ensured Full Compliance with Data Security Protocols</li>
                <li>Implemented Secure Development Lifecycle (SDLC) Practices</li>
              </ul>
            </div>

            {/* Corporate Experience */}
            <div className="p-6 border border-white rounded-2xl text-lg leading-relaxed bg-transparent hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4">Corporate Experience</h3>
              <ul className="list-inside list-disc text-left">
                <li>Led Agile Development Teams in Fast-paced Tech Environments</li>
                <li>Managed Full Lifecycle Software Development Projects</li>
                <li>Collaborated with Global, Cross-functional Stakeholders</li>
                <li>Delivered Scalable, High-performance Software Solutions</li>
                <li>Championed Continuous Improvement & Innovation Initiatives</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Explore More Button */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
  {/* Contact Button */}
  <a href="/contact" className="text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg flex items-center hover:bg-white hover:text-black transition duration-300">
    Contact Me
  </a>

  {/* Projects Button */}
  <a href="/projects" className="text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg flex items-center hover:bg-white hover:text-black transition duration-300">
    View Projects
  </a>

  {/* Services Button */}
  <a href="/services" className="text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg flex items-center hover:bg-white hover:text-black transition duration-300">
    My Services
  </a>
</div>

      </div>
    </div>
  );
};

export default About;