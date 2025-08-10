import styles from "./styles/TechHard.styles.module.css";
import unreal from "../assets/unreal-engine.png";
import unity from "../assets/unity.png";
import oculus from "../assets/oculus.png";
import vive from "../assets/vive.png";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function TechHard() {
	const slides = [
		{
			id: 1,
			image: unreal,
		},
		{ id: 2, image: unity},
		{
			id: 3,
			image: oculus,
		},
		{
			id: 4,
			image: vive,
		},
	];
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useMediaQuery({maxWidth: 992})

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length )
    }, 4000);
    return () => clearInterval(intervalID)
  })

  const styleMobile = isMobile ?
  {
    display: "flex",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentSlide *100}%)` 
  }:
  {
    transition: "none",
    transform: "none"
  }
	return (
		<section id="technologies">
			<div className={styles.containerTitles}>
				<h2>TECHONOLOGIES & HARDWARE</h2>
				<h3>USED BY HYDRA VR.</h3>
			</div>
			<div className={styles.containerMain}>
        <div className={styles.containerSlider} style={styleMobile}>
          {slides.map((slide) => (
            <div key={slide.id} className={styles.contentSlide}>
              <img src={slide.image} alt="" />
            </div>
          ))}
        </div>
      </div>
     
		</section>
	);
}
