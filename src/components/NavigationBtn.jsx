import styles from "./NavigationBtn.styles.module.css"
export default function NavigationBtn({imgBtn, onClick}){

  return(
    <button className={styles.navBtn} onClick={onClick}>
      <img src={imgBtn} alt="" />
    </button>
  )
}