import { useMediaQuery } from "react-responsive";
import BtnMain from "./BtnMain";
import styles from "./styles/ContactUs.styles.module.css";

export default function ContactUs() {
  const isDesktop = useMediaQuery({minWidth: 992})
  const styleBtn = isDesktop && {
    padding: "1.2rem 4rem",
    fontSize: "1rem" 
  }

	return (
		<section id="contactus">
			<div className={styles.container}>
				<div>
					<h2>JOIN HYDRA</h2>
					<div className={styles.line}></div>
					<p>Lets Build Your VR Experience</p>
				</div>
				<form action="">
					<div className={styles.firstAndLast}>
						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="First Name"
						/>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Last Name"
						/>
					</div>
					<div className={styles.emailAndTel}>
						<input type="email" name="email" id="email" placeholder="Email" />
						<input
							type="tel"
							name="tel"
							id="tel"
							placeholder="Phone Number (+1)"
						/>
					</div>
					<div className={styles.subAndTxt}>
						<input
							type="text"
							name="subject"
							id="subject"
							placeholder="Subject"
						/>
						<textarea
							name="tellUs"
							id="tellUs"
							cols="10"
							rows="10"
							placeholder="Tell Us Something"
						></textarea>
					</div>
				</form>
				<div className={styles.containerBtn}>
					<BtnMain value="SEND TO HYDRA" style={styleBtn}/>
				</div>
			</div>
		</section>
	);
}
