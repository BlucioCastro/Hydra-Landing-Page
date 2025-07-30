import BtnMain from "./BtnMain";
import arrowLong from "../assets/arrow-long.png"
import styles from "./Introduction.styles.module.css"

export default function Introduction(){
  return(
    <section>
      <div className={styles.introMainContainer}>
        <div className={styles.containerIntroduction}>
          <h2>
            INTRODUCTION
          </h2>
          <div className={styles.toHydra}>
            <h3>TO HYDRA VR</h3>
            <img src={arrowLong} alt="arrowLong" className={styles.arrowLong} />
          </div>
        </div>
        <div className={styles.introductionTxt}>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div>
          <img src="src\assets\about-image.png" alt="aboutImg" className={styles.aboutImg} />
        </div>
        <div>
          <div className={styles.about}>
            <h2>ABOUT</h2>
            <h3>HYDRA VR</h3>
          </div>
          <div className={styles.aboutTxtContainer}>
            <p className={styles.aboutTxt}>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
          </div>
          <div className={styles.containerAboutBtn}>
            <BtnMain value="Lets Get in Touch" style={{width:"37rem", textAlign: "center", fontSize: "1.1rem"}} />
          </div>
        </div>
      </div>
    </section>
  )
}