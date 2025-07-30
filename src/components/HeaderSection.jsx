import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import styles from "./HeaderSection.styles.module.css";
import Logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import BtnMain from "./BtnMain";

export default function () {
	const [menuOpen, setMenuOpen] = useState(false);
	const isDesktop = useMediaQuery({ minWidth: 992 });

	return (
		<header className={styles.headerStyle}>
			<div className={styles.logoContainer}>
				<img src={Logo} alt="logo" className={styles["img-logo"]} />
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
							<a href="#">ABOUT</a>
						</li>
						<li>
							<a href="#">SERVICES</a>
						</li>
						<li>
							<a href="#">TECHNOLOGIES</a>
						</li>
						<li>
							<a href="#">HOW TO</a>
						</li>
					</ul>
					<div className={styles.containerBtn}>
						<a href="#" className={styles.contactUs}>
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
								<a href="#">ABOUT</a>
							</li>
							<li>
								<a href="#">SERVICES</a>
							</li>
							<li>
								<a href="#">TECHNOLOGIES</a>
							</li>
							<li>
								<a href="#">HOW TO</a>
							</li>
						</ul>
						<div className={styles.containerBtn}>
							<a href="#" className={styles.contactUs}>
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
