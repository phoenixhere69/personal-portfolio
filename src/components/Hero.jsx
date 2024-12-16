import React from 'react'
import '../assets/hero.css';
import github from '../assets/images/github-mark-white.png';
import linkedin from '../assets/images/icons8-linkedin-48.png';
import twitter from '../assets/images/twitter.png';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Hero = () => {
  const devIcons = [
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Tomcat", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg" },
    { name: "Vim", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" },
    { name: "Red Hat", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original-wordmark.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Nginx", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
    { name: "Debian", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-plain-wordmark.svg" },
    { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Neovim", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg" },
    { name: "Jquery", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg" },
  ];

  const [isSliderActive, setIsSliderActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const shouldActivateSlider = window.innerWidth <= 768;
      setIsSliderActive(shouldActivateSlider);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='hero__section'>
      <div className="text--hero--section">
        <div className="intro__heading">
          <span className='intro-with-emoji'>Hello👋,</span>
        </div>
        <div className="secondary--text">
          <h4>I'm a Web <br /> Developer</h4>
        </div>
        <div className="tagline">
          <h5>I build things for web</h5>
        </div>
      </div>
      <div className="socials">
        <img src={github} alt="github-logo" className='github' />
        <img src={linkedin} alt="linkedin-logo" className='linkedin' />
        <img src={twitter} alt="linkedin-logo" className='linkedin' />
      </div>
      <div className="footer">
        <div className="experience">
          <span className='years'>4</span>
          <span className='text'>years of <br /> experience</span>
        </div>
        <div className="experience">
          <span className='projects_count'>12</span>
          <span className='text'>Projects completed <br /> around the world</span>
        </div>
        <div className="experience">
          {isSliderActive ? (
            <Swiper
              slidesPerView={4}
              centeredSlides={true}
              onSlideChange={() => console.log("Slide changed")}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            >
              {devIcons.map((icon, index) => (
                <SwiperSlide>
                  <img key={index} src={icon.src} alt={icon.name} />
                </SwiperSlide>
              ))}

            </Swiper>
          ) : (
            <div className='skills_container'>
              {devIcons.map((icon, index) => {
                return(
                <img key={index} src={icon.src} alt={icon.name} />
                )
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Hero