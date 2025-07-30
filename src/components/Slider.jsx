import { useEffect, useRef, useState } from "react";
import styles from "./Slider.styles.module.css";
import dirLeft from "../assets/direction-left.png";
import NavigationBtn from "./NavigationBtn";
import dirRight from "../assets/direction-right.png";
import { useMediaQuery } from "react-responsive";

export default function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const isMobile = useMediaQuery({ maxWidth: 992 });
	const slides = [
		{
			id: 1,
			img: "src/assets/Location-Icon.png",
			title: "Pay Us a Visit",
			content: "Union St, Seattle, WA 98101, United States",
		},
		{
			id: 2,
			img: "src/assets/phone-call.png",
			title: "Give Us a Call",
			content: "(110) 1111-1010",
		},
		{
			id: 3,
			img: "src/assets/mail.png",
			title: "Send Us a Message",
			content: "Contact@HydraVTech.com",
		},
	];

	const intervalRef = useRef(null);
	const isDesktop = () => {
		// irei exibir o slider de forma estatica
	};
	
	useEffect(() => {
		if (isMobile) {
			intervalRef.current = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % slides.length);
			}, 3000);
			return () => clearInterval(intervalRef.current);
		}
	}, [isMobile]);

	const nextSlide = () => {
		clearInterval(intervalRef.current);
		setCurrentSlide((prev) => (prev + 1) % slides.length);
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 3000);
	};

	const prevSlide = () => {
		clearInterval(intervalRef.current);
		setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 3000);
	};
	const titleStyle = isMobile ? {
		display: "none"
	}: {
		display: "block"
	}
	const slideStyles = isMobile ? {
		display: "flex",
		transition: "transform 0.5s ease",
		transform: `translateX(-${currentSlide *100}%)`
	}:
	{
		transition: "none",
		transform: "none",
	}
	return (
		<div className={styles.slider}>
			<div className={styles.btnHidden}>
				<NavigationBtn imgBtn={dirLeft} onClick={prevSlide} />
			</div>
			<div className={styles.container}>
				<div style={slideStyles} className={styles.divContent}>				
					{slides.map((slide) => (
						<div key={slide.id} className={styles.containerSlider}>
							<img
								src={slide.img}
								alt={slide.title}
								className={styles.sliderImg}
							/>
							<div>
								<h2 style={titleStyle} className={styles.titleSlide}>{slide.title}</h2>
								<p>{slide.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles.btnHidden}>
				<NavigationBtn imgBtn={dirRight} onClick={nextSlide} />
			</div>
		</div>
	);
}
