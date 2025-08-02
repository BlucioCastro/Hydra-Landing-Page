import arrowLong from "../assets/arrow-long.png"
import SliderWhy from "./SliderWhy"
import styles from "./Why.styles.module.css"
import sliderImg from "../../public/service-image1.png"

export default function Why(){
  return(
    <section>
      <div>
        <div>
          <div>
            <h2>WHY BUILD</h2>
          </div>
          <div>
            <h3>WITH HYDRA?</h3>
            <img src={arrowLong} alt="arrowLong" className={styles.arrowLongImg}/>
          </div>
        </div>
        <div>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
        <SliderWhy image={sliderImg} title={"ola"} description={"hey"}/>
      </div>
    </section>
  )
}