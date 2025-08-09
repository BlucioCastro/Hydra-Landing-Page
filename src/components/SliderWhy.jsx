import BtnMain from "./BtnMain";

import styles from "./styles/SliderWhy.styles.module.css";

export default function SliderWhy({ image, title, description, onClick }) {
	return (
		<div className={styles.containerCard}>
			<div className={styles.card}>
			
				<img src={image} alt="" className={styles.cardImage} />
				<h2 className={styles.titles}>{title}</h2>
				<div className={styles.line}></div>
				<p className={styles.cardDescription}>{description}</p>
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
		</div>
	);
}
					{/* <button onClick={nextSlide} className={styles.next} style={styleNavBtn}>
						<img src={arrowRight} alt="" />
					</button> */}