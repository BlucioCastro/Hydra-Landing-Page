import { useEffect, useRef, useState } from "react";
import arrowLong from "../assets/arrow-long.png";
import BtnMain from "./BtnMain";
import styles from "./styles/Why.styles.module.css";
import { useMediaQuery } from "react-responsive";
import arrowLeft from "../assets/direction-left.png";
import arrowRight from "../assets/direction-right.png";
import NavigationBtn from "./NavigationBtn";
import SliderWhy from "./SliderWhy";
import serviceImage1 from "../../public/service-image1.png";
import serviceImage2 from "../../public/service-image2.png";
import serviceImage3 from "../../public/service-image3.png";
import serviceImage4 from "../../public/service-image4.png";

export default function Why() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const isMobile = useMediaQuery({ maxWidth: 992 });
	const slides = [
		{
			id: 1,
			image: serviceImage1,
			title: "SIMULATION",
			description:
				"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
		},
		{
			id: 2,
			image: serviceImage2,
			title: "EDUCATION",
			description:
				"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
		},
		{
			id: 3,
			image: serviceImage3,
			title: "SELF-CARE",
			description:
				"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
		},
		{
			id: 4,
			image: serviceImage4,
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
			}, 4000);
			return () => clearInterval(intervalRef.current);
		}
	}, [isMobile]);

	const nextSlide = () => {
		clearInterval(intervalRef.current);
		setCurrentSlide((prev) => (prev + 1) % slides.length);
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);
	};

	const prevSlide = () => {
		clearInterval(intervalRef.current);
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);
	};

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
		<section className={styles.thisSection} id="services">
			<div>
				<div className={styles.containerTitleAndTxt}>
					<div className={styles.titleContainer}>
						<div className={styles.containerH2}>
							<h2>WHY BUILD</h2>
						</div>
						<div className={styles.h3AndArrowlong}>
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
							Vitae sapien pellentesque habitant morbi tristique senectus et
							netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
							lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
							nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
							est placerat in. Lectus magna fringilla urna porttitor rhoncus
							vitae.
						</p>
					</div>
				</div>
				{isMobile ? (
					<div className={styles.slider}>
						<div className={styles.card}>
							<div className={styles.navBtnLeft}>
								<NavigationBtn imgBtn={arrowLeft} onClick={prevSlide} />
							</div>
							<div className={styles.container}>
								<div style={styleSlider} className={styles.containerSlides}>
									{slides.map((slide) => (
										<div key={slide.id} className={styles.content}>
											<img
												src={slide.image}
												alt=""
												className={styles.cardImage}
											/>
											<h2 className={styles.titles}>{slide.title}</h2>
											<div className={styles.line}></div>
											<p className={styles.cardDescription}>
												{slide.description}
											</p>
											<BtnMain
												value={"TRY IT NOW"}
												style={{
													display: "flex",
													justifyContent: "center",
													margin: "1.25rem 0",
													width: "100%",
												}}
											/>
										</div>
									))}
								</div>
							</div>
							<div className={styles.navBtnRight}>
								<NavigationBtn imgBtn={arrowRight} onClick={nextSlide} />
							</div>
						</div>
					</div>
				) : (
					<div className={styles.containerCardDesktop}>
						{slides.map((slide) => (
							<div key={slide.id}>
								<SliderWhy
									image={slide.image}
									title={slide.title}
									description={slide.description}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
