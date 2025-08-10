import BtnMain from "./BtnMain";
import arrowToRight from "../assets/arrowRight.png";
import imageHero from "../assets/hero-image.png";
import styles from "./styles/Hero.styles.module.css";
import Slider from "./Slider";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
	const isMobile = useMediaQuery({maxWidth: 991})
	const styleBtnHero = isMobile ?
	{
		height: "3.5rem", width: "14rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", marginBottom: "6rem"
	}:
	{
		height: "3.5rem", width: "14rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem"
	}
	return (
		<section className={styles.containerSection} id="hero">
			<div className={styles.bgImageContainer}>
				<div className={styles.container}>
					<div className={styles.mainContent}>
						<h1>
							<span className={styles.gradientTxt}>Dive</span> Into The Depths{" "}
							<br />
							Of <span className={styles.gradientTxt}>Virtual Reality</span>
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
							Lectus mauris eros in vitae .
						</p>
						<div className={styles.buildYWord}>
							<BtnMain path="#" value="Build your world" style={styleBtnHero} />
							<img src={arrowToRight} className={styles.imgHidden} alt="" />
						</div>
					</div>
					<div className={styles.imgContainer}>
						<img src={imageHero} alt="" />
					</div>
				</div>
			</div>
			<div className={styles.sliderComponentSyle}>		
				<Slider />
			</div>
		</section>
	);
}
