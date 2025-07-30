import styles from "./BtnMain.styles.module.css";

export default function BtnMain({ value, path, style, rest }) {
	return (
		<a href={path} className={styles.btnStyle} style={{ ...style }} {...rest}>
			{value}
		</a>
	);
}
