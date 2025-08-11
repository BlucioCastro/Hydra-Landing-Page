import hamburguerBtn from "../assets/Hamburger-Button.png"

export default function HamburguerMenu({ onClick }) {
	return (
		<div>
			<button onClick={onClick} style={{ border: "none", cursor: "pointer", backgroundColor:"#343045" }}>
				<img src={hamburguerBtn} alt=""/>
			</button>
		</div>
	);
}
