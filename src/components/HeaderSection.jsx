import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import styles from "./styles/HeaderSection.styles.module.css";
import Logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import BtnMain from "./BtnMain";

export default function () {
	const [menuOpen, setMenuOpen] = useState(false);
	const isDesktop = useMediaQuery({ minWidth: 992 });

	return (
		<header className={styles.headerStyle}>
			<div className={styles.logoContainer}>
				<a href="#hero">
					<img src={Logo} alt="logo" className={styles["img-logo"]}/>
				</a>
			</div>

			{!isDesktop && (
				<div className={styles.containerHamburg}>
					<HamburguerMenu
						onClick={() => setMenuOpen(!menuOpen)}
						className={styles.hambuguer}
					/>
				</div>
			)}

			{isDesktop ? (
				<nav className={styles.navBar}>
					<ul className={styles.containerUl}>
						<li>
							<a href="#about" target="_parent" className={styles.linksPage}>ABOUT</a>
						</li>
						<li>
							<a href="#services" target="_parent" className={styles.linksPage}>SERVICES</a>
						</li>
						<li>
							<a href="#technologies" target="_parent" className={styles.linksPage}>TECHNOLOGIES</a>
						</li>
						<li>
							<a href="#HowTo" target="_parent" className={styles.linksPage}>HOW TO</a>
						</li>
					</ul>
					<div className={styles.containerBtn}>
						<a href="#contactus" className={styles.contactUs}>
							CONTACT US
						</a>
						<a href="#" className={styles.join}>
							JOIN HYDRA
						</a>
					</div>
				</nav>
			) : (
				menuOpen && (
					<nav className={styles.navBar}>
						<ul className={styles.containerUl}>
							<li>
								<a href="#about" target="_parent">ABOUT</a>
							</li>
							<li>
								<a href="#services" target="_parent">SERVICES</a>
							</li>
							<li>
								<a href="#technologies" target="_parent">TECHNOLOGIES</a>
							</li>
							<li>
								<a href="#HowTo" target="_parent">HOW TO</a>
							</li>
						</ul>
						<div className={styles.containerBtn}>
							<a href="#contactus" className={styles.contactUs}>
								CONTACT US
							</a>
							<a href="#" className={styles.join}>
								JOIN HYDRA
							</a>
						</div>
					</nav>
				)
			)}
		</header>
	);
}
