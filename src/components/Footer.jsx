import BtnMain from "./BtnMain";
import styles from "./styles/Footer.styles.module.css";

// importando imagens
import logoFooter from "../assets/logo-footer.png";
import footerLine from "../assets/Footer-Line.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import pinterest from "../assets/pinterest.png";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
	const isDesktop = useMediaQuery({minWidth: 992})
	const styleBtnFooter = isDesktop ?
	{
		width: "100%",
		marginBottom: "0"
	}
	:{
		width: "100%",
		marginBottom: "2rem"
	}
  return (
    <section className={styles.sectionMain}>
      <div className={styles.containerMain}>
        <div className={styles.containerInfos}>
          <div className={styles.containerHydraLogo}>
            <img src={logoFooter} alt="hydra-logo" className={styles.hydraLogo} />
          </div>

          <div>
            <img src={footerLine} alt="footer-line" className={styles.footerLine} />
          </div>

          <div className={styles.txtInfo}>
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>TECHNOLOGY</p>
            <p>JOIN HYDRA</p>
          </div>

          <div>
            <img src={footerLine} alt="footer-line" className={styles.footerLine} />
          </div>

          <div className={styles.txtInfo}>
            <p>F.A.Q</p>
            <p>SITEMAP</p>
            <p>CONDITIONS</p>
            <p>LICENSES</p>
          </div>

          <div>
            <img src={footerLine} alt="footer-line" className={styles.footerLine} />
          </div>

          <div className={styles.containerSocials}>
            <div className={styles.containerSocialize}>
              <p>SOCIALIZE WITH HYDRA</p>
              <div className={styles.containerLogos}>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
                <img src={youtube} alt="youtube" />
                <img src={instagram} alt="instagram" />
                <img src={pinterest} alt="pinterest" />
              </div>
            </div>
            <BtnMain value="BUILD YOUR WORLD" style={styleBtnFooter} />
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.contentFooter}>
          <p>
            2025© Hydra landing page - UI Design By - Zine.E Falouti - Developed by
            Blucio Castro - All Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  );
}