import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";

export default function Footer() {
  return (
    <footer className="relative text-white pt-16 w-full">
      <div className="w-full bg-white bg-opacity-20 backdrop-blur-lg p-8 md:p-12 lg:p-16  border border-white border-opacity-30 shadow-lg">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Passionate Full-Stack Developer with expertise in React, Node.js,
              PHP, and MySQL. I love crafting elegant and scalable solutions that
              enhance user experiences.
            </p>

            {/* Swiper Carousel */}
            <div className="mt-6 mx-auto w-52 md:w-60 bg-white p-2 rounded-xl shadow-lg">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={5500} // Smooth infinite movement
                className="rounded-xl"
              >
                {[img1, img2, img3].map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-32 md:h-40 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm md:text-base">
              {["Home", "About", "Projects", "Services", "Contact", "Blog"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      className="hover:text-gray-300 transition duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* More Quick Links */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">More Links</h2>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "FAQs",
                "Portfolio",
                "Testimonials",
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-300 transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Me</h2>
            <p className="mt-2 text-lg"><strong>Email:</strong> <a href="mailto:vedantsonavane799@gmail.com" className="underline">vedantsonavane799@gmail.com</a></p>
                <p className="mt-2 text-lg"><strong>Phone:</strong> +91 8291998556</p>
                <p className="mt-2 text-lg"><strong>Address:</strong>   Thane 400615, Mumbai, INDIA</p>
          </div>
        </div>

        {/* Motivational Quote */}
        <motion.div
          className="mt-12 text-center italic text-base text-white md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "Code is like humor. When you have to explain it, it’s bad." – Cory House
        </motion.div>

        {/* Social Media Section */}
        {/* Social Media Section */}
        <motion.div
  className="mt-6 flex justify-center space-x-6"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {[ 
    { Icon: FaLinkedin, link: "#" }, 
    { Icon: FaInstagram, link: "#" }, 
    { Icon: FaGithub, link: "#" }, 
    { Icon: FaEnvelope, link: "mailto:youremail@example.com" } 
  ].map(({ Icon, link }, index) => (
    <a key={index} href={link} className="text-white hover:text-white transition duration-300">
      <Icon className="w-6 h-6 md:w-8 md:h-8" />
    </a>
  ))}
</motion.div>


        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white text-center py-6 text-sm md:text-base text-white">
          &copy; 2025 Vedant Sonavane. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
