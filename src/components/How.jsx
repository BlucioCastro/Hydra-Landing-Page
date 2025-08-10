import styles from "./styles/How.styles.module.css";
import arrowLong from "../assets/arrow-long.png";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function How() {
	const isMobile = useMediaQuery({ maxWidth: 992 });
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [
		{
			id: 1,
			image: "src/assets/one.png",
      description: "3D Conception & Design"
		},
		{
			id: 2,
			image: "src/assets/two.png",
      description: "Interaction & Design"
		},
		{
			id: 3,
			image: "src/assets/three.png",
      description: "VR World & Design"
		},
		{
			id: 4,
			image: "src/assets/four.png",
      description: "Hydra VR & Design"
		},
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);
		return () => clearInterval(intervalId);
	});

  const styleMobile = isMobile ?
  {
    display: "flex ",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentSlide *100}%)`
  }:
  {
    transition: "none",
    transform: "none"
  }

	return (
		<section id="HowTo">
			<div className={styles.containerTitleAndTxt}>
				<div className={styles.titleContainer}>
					<div className={styles.containerH2}>
						<h2>HOW WE BUILD</h2>
					</div>
					<div className={styles.h3AndArrowlong}>
						<h3>WITH HYDRA VR</h3>
						<img
							src={arrowLong}
							alt="arrowLong"
							className={styles.arrowLongImg}
						/>
					</div>
				</div>
				<div className={styles.txtContainer}>
					<p>
						Vitae sapien pellentesque habitant morbi tristique senectus et netus
						et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
						amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
						aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
						in. Lectus magna fringilla urna porttitor rhoncus vitae.
					</p>
				</div>
			</div>
      <div className={styles.containerMain}>
        <div className={styles.containerSlide} style={styleMobile}>
          {slides.map((slide) => (
            <div key={slide.id} className={styles.content}>
              <img src={slide.image} alt="" className={styles.imageCard}/>
              <p className={styles.txtDescription}>{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
		</section>
	);
}
