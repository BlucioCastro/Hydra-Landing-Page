import BtnMain from "./BtnMain";
import arrowLeft from "../assets/direction-left.png"
import arrowRight from "../assets/direction-right.png"

export default function SliderWhy({image, title, description}){
  return(
    <div>
      <button>
        <img src={arrowLeft} alt="" /></button>
      <div>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <BtnMain value={"TRY IT NOW"}/>
      </div>
      <button>
        <img src={arrowRight} alt="" />
      </button>
    </div>
  )
}