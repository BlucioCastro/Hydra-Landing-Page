import { useEffect, useRef, useState } from "react";
import arrowLong from "../assets/arrow-long.png";
import SliderWhy from "./SliderWhy";
import styles from "./Why.styles.module.css";
import { useMediaQuery } from "react-responsive";

export default function Why() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const isMobile = useMediaQuery({ maxWidth: 992 });
	const slides = [
		{
			id: 1,
			image: "public/service-image1.png",
			title: "SIMULATION",
			description:
				"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
		},
		{
			id: 2,
			image: "public/service-image2.png",
			title: "EDUCATION",
			description:
				"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
		},
		{
			id: 3,
			image: "public/service-image3.png",
			title: "SELF-CARE",
			description:
				"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
		},
		{
			id: 4,
			image: "public/service-image4.png",
			title: "OUTDOOR",
			description:
				"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
		},
	];
	const intervalRef = useRef(null);
	useEffect(() => {
		if (isMobile) {
			intervalRef.current = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % slides.length);
			}, 3000);
			return () => clearInterval(intervalRef.current);
		}
	}, [isMobile]);
	const styleSlider = isMobile
		? {
				display: "flex",
				transition: "transform 0.5s ease",
				transform: `translateX(-${currentSlide * 100}%)`,
		  }
		: {
				transition: "none",
				transform: "none",
		  };

	return (
		<section>
			<div>
				<div className={styles.titleContainer}>
					<div>
						<h2>WHY BUILD</h2>
					</div>
					<div>
						<h3>WITH HYDRA?</h3>
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
				<div className={styles.container}>
					<div style={styleSlider} className={styles.containerSlides}>
						{slides.map((slide) => (
							<div key={slide.id} className={styles.content}>
								<SliderWhy
									image={slide.image}
									title={slide.title}
									description={slide.description}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
