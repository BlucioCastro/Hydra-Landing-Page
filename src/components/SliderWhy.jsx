import BtnMain from "./BtnMain";
import arrowLeft from "../assets/direction-left.png";
import arrowRight from "../assets/direction-right.png";
import styles from "./SliderWhy.styles.module.css";

export default function SliderWhy({ image, title, description, onClick }) {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
			<button onClick={onClick} className={styles.prev}>
				<img src={arrowLeft} alt="" />
			</button>
				<img src={image} alt="" className={styles.cardImage} />
				<h2>{title}</h2>
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
			<button onClick={onClick} className={styles.next}>
				<img src={arrowRight} alt="" />
			</button>
			</div>
		</div>
	);
}
