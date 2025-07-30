
export default function HamburguerMenu({ onClick }) {
	return (
		<div>
			<button onClick={onClick} style={{ border: "none", cursor: "pointer", backgroundColor:"#343045" }}>
				<img src="src\assets\Hamburger-Button.png" alt=""/>
			</button>
		</div>
	);
}
