import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/global.css";

import backgroundVideo1 from "../assets/portfoliobg.mp4";
import backgroundVideo2 from "../assets/portfoliobg2.mp4";
import backgroundVideo3 from "../assets/portfoliobg3.mp4";
import projectImage1 from '../assets/digitalearn.webp';  // Importing images
import projectImage2 from '../assets/ollato.png';
import projectImage3 from '../assets/urbane.png';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  // Select a random background video on each refresh
  const backgroundVideos = [backgroundVideo1, backgroundVideo2, backgroundVideo3];
  const backgroundVideo = backgroundVideos[Math.floor(Math.random() * backgroundVideos.length)];
  const sectionRef = useRef(null);
  const projects = [
    {
      title: "DigitalLearn",
      description:
        "A professional e-learning and e-commerce platform offering courses on coding, AWS, and cloud storage. Designed and developed in just 20 days using WordPress, the platform features video tutorials, quizzes, and assessments within a structured 1-month learning program.",
      url: "https://digitalearnsolution.com/",
      imageUrl: projectImage1,
    },
    {
      title: "OLLATO Eduversity",
      description:
        "A platform supporting students' mental health and stress management through expert guidance and personalized programs. Developed with HTML, CSS, PHP, featuring multi-panel access, video calling, payment API integration, and AWS deployment.",
      url: "https://www.ollato.com/",
      imageUrl: projectImage2,
    },
    {
      title: "Urbane Travels",
      description:
        "A state-of-the-art travel platform integrating various transportation APIs for smooth and efficient booking. With B2B, B2C, and admin panels, the website is developed using React, Node.js, and Tailwind CSS, hosted on Hosting Raja for optimal performance.",
      url: "https://www.urbanetravels.com",
      imageUrl: projectImage3,
    },
  ];
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Overlay to make text more readable */}
      <div className="absolute top-0 left-0 w-full h-full z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center w-full text-white">
        <section className="w-full min-h-screen flex flex-col items-center justify-center text-center p-6 md:p-10 relative" data-aos="fade-up">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Crafting Intelligent, Scalable Solutions That Elevate Digital Innovation
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg mt-6 text-white w-11/12 md:w-3/4 lg:w-1/2 leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Creating seamless digital experiences through cutting-edge technologies. With a passion for building robust,
            scalable, and high-performance applications, I specialize in delivering innovative solutions tailored to
            meet unique business needs.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
            <button
              type="button"
              className="w-full sm:w-auto text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Get Brochure
            </button>
            <button
              type="button"
              className="w-full sm:w-auto text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Download Resume
            </button>
          </div>
        </section>


        {/* About Me Section */}
        <section className="w-full mx-auto my-16 px-6 md:px-10 text-white text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Me</h2>

          <motion.p
            className="text-base sm:text-lg mt-4 leading-relaxed italic max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            I am a passionate software developer committed to crafting innovative solutions that elevate user experiences
            and drive business success. With a focus on continuous learning and growth, I strive to stay ahead of the
            curve in an ever-evolving tech landscape.
          </motion.p>

          {/* Responsive Two-Column Layout */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            <p className="w-full md:w-1/2 p-6 border border-white rounded-lg text-base sm:text-lg leading-relaxed">
              The journey into software development began with <strong>curiosity</strong> and a drive to create.
              From exploring the <em>fundamentals of programming</em> to tackling <strong>real-world challenges</strong>,
              every step has been a lesson in <u>perseverance</u> and <u>innovation</u>.
            </p>

            <p className="w-full md:w-1/2 p-6 border border-white rounded-lg text-base sm:text-lg leading-relaxed">
              Working with <strong>startups</strong> and collaborating on <em>impactful projects</em> has reinforced the belief that
              <u>technology is a powerful tool for change</u>. The focus remains on building
              <strong>scalable, high-performance applications</strong> that not only <em>solve problems</em>
              but also enhance <u>user experiences</u>.
            </p>
          </div>

          {/* Quote Section */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="quote-container bg-white bg-opacity-10 p-6 rounded-lg text-base sm:text-lg leading-relaxed">
              <p className="quote-text">
                "When something is important enough, you do it even if the odds are not in your favor." – Elon Musk
              </p>
            </div>
          </div>

          {/* Know More Button */}
          <div className="mt-10">
            <button className="w-full sm:w-auto text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg flex items-center justify-center mx-auto hover:bg-white hover:text-gray-900 transition duration-300">
              Know Me <FaArrowRight className="ml-2" />
            </button>
          </div>
        </section>


        {/* Tech Ecosystem Section */}
        <section
          ref={sectionRef}
          className="w-full my-16 p-6 md:p-10 text-center bg-transparent"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8">
            Tech Ecosystem
          </h2>

          <motion.p
            className="text-base md:text-lg mt-4 md:mt-6 text-white leading-relaxed px-4 md:px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            The tech ecosystem is a vibrant, ever-evolving landscape, where
            innovation thrives and collaboration fuels growth. From cutting-edge
            software solutions to advanced hardware technologies, it is a space
            where ideas transform into impactful products that shape the future of
            industries.
          </motion.p>

          {/* Languages & Frameworks Carousel */}
          <div className="mb-10" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Languages & Frameworks
            </h3>
            <Swiper
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              spaceBetween={15}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={4000}
              loop={true}
              modules={[Autoplay]}
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
              ].map((skill, index) => (
                <SwiperSlide
                  key={index}
                  className="p-4 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md border border-white"
                >
                  {skill}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Databases Carousel */}
          <div className="mb-10" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Databases
            </h3>
            <Swiper
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              spaceBetween={15}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
              speed={4000}
              loop={true}
              modules={[Autoplay]}
            >
              {["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"].map(
                (db, index) => (
                  <SwiperSlide
                    key={index}
                    className="p-4 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md border border-white"
                  >
                    {db}
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* DevOps & Cloud Carousel */}
          <div data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              DevOps & Cloud
            </h3>
            <Swiper
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              spaceBetween={15}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={4000}
              loop={true}
              modules={[Autoplay]}
            >
              {["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub"].map(
                (devops, index) => (
                  <SwiperSlide
                    key={index}
                    className="p-4 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md border border-white"
                  >
                    {devops}
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* Additional Tools & Design Software Carousel */}
          <div className="mt-12" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Additional Tools & Design Software
            </h3>
            <Swiper
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              spaceBetween={15}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
              speed={4000}
              loop={true}
              modules={[Autoplay]}
            >
              {[
                "Photoshop",
                "Illustrator",
                "Figma",
                "Sketch",
                "Adobe XD",
                "Blender",
                "InVision",
              ].map((tool, index) => (
                <SwiperSlide
                  key={index}
                  className="p-4 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md border border-white"
                >
                  {tool}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>



        {/* Skills & Expertise Section */}
         


        {/* Projects Section */}
        <section
          className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8 text-white text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-8">Projects</h2>
          <motion.p
            className="text-base sm:text-lg mt-4 text-white leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Each project is a reflection of innovation, problem-solving, and
            technical expertise. From concept to execution, I focus on building
            scalable, efficient, and user-friendly solutions that drive meaningful
            impact. Explore these projects to see creativity and functionality come
            together.
          </motion.p>

          <div className="flex flex-col gap-8 mt-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                data-aos="fade-up"
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2">
                  <img
                    className="w-full h-auto rounded-lg object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-white leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-white text-lg font-semibold underline transition-colors hover:text-gray-300"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Services Section */}
        <section
          className="w-full mx-auto my-16 px-6 sm:px-10 lg:px-16 text-white text-center bg-transparent"
          data-aos="fade-up"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Services</h2>
          <motion.p
            className="text-base sm:text-lg mt-4 text-white leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            We offer a range of professional services designed to help your business
            grow and thrive. From custom web development to comprehensive e-commerce
            solutions, our team is here to bring your ideas to life.
          </motion.p>

          <div className="space-y-12 mt-6">
            {["Web Development", "Mobile App Development", "Cloud Solutions"].map(
              (service, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row justify-between items-center bg-transparent p-0 rounded-lg"
                  data-aos="fade-up"
                >
                  <div className="lg:w-1/2 text-left">
                    <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4">
                      {index + 1}. {service}
                    </h3>
                  </div>
                  <div className="lg:w-1/2 bg-white bg-opacity-20 p-6 text-base sm:text-lg text-white rounded-lg shadow-lg">
                    <p>
                      {index === 0 &&
                        "We create responsive and dynamic websites using modern frameworks like React, Node.js, and Angular. Our team specializes in building fast and scalable web applications."}
                      {index === 1 &&
                        "Our team develops high-performing mobile apps for both iOS and Android platforms using React Native and Flutter. We focus on building intuitive, user-friendly apps."}
                      {index === 2 &&
                        "We offer scalable cloud infrastructure services, including hosting, deployment, and management, to help you scale your business efficiently."}
                    </p>
                    <p className="mt-2">
                      <a href="#get-brochure" className="underline text-white">
                        Get Brochure
                      </a>{" "}
                      |{" "}
                      <a href="#know-more" className="underline text-white">
                        Know More
                      </a>
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-8">
            <a
              href="#all-services"
              className="text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              See All Services
            </a>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="w-full my-16 p-6 md:p-10 text-center bg-transparent text-white" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8">Get in Touch</h2>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 bg-opacity-20 p-6 md:p-8 rounded-lg border border-white" data-aos="fade-up">
              <form action="#" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg mb-2" htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
                  </div>
                  <div>
                    <label className="block text-lg mb-2" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg mb-2" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <label className="block text-lg mb-2" htmlFor="inquiry">Inquiry Type</label>
                    <select id="inquiry" name="inquiry" className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                      <option value="freelancing">Freelancing</option>
                      <option value="pricing">Pricing</option>
                      <option value="hiring">Hiring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message" required></textarea>
                </div>

                <button type="submit" className="mt-6 text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">Submit</button>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="w-full lg:w-1/2 flex flex-col items-center space-y-6" data-aos="fade-up">
              <h3 className="text-2xl md:text-3xl font-semibold">Follow Me</h3>
              <div className="flex justify-center space-x-6 mt-4">
  <a href="https://github.com/yourusername" className="hover:text-gray-400">
    <FaGithub size={30} />
  </a>
  <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400">
    <FaLinkedin size={30} />
  </a>
  <a href="https://instagram.com/yourusername" className="hover:text-gray-400">
    <FaInstagram size={30} />
  </a>
  <a href="mailto:vedantsonavane799@gmail.com" className="hover:text-gray-400">
    <FaEnvelope size={30} />
  </a>
</div>

              <div className="mt-6 text-center">
                <h4 className="text-xl font-semibold">Contact Info</h4>
                <p className="mt-2 text-lg"><strong>Email:</strong> <a href="mailto:vedantsonavane799@gmail.com" className="underline">vedantsonavane799@gmail.com</a></p>
                <p className="mt-2 text-lg"><strong>Phone:</strong> +91 8291998556</p>
                <p className="mt-2 text-lg"><strong>Address:</strong>   Thane 400615, Mumbai, INDIA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}