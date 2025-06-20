import styles from "./Tools.module.css"
//images
import Images from "../../public/assets/Images";


export const GoTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export const Reloader = (del: number) => {
  setTimeout(() => {
    window.location.reload();
  }, del);
};

export const HandleNavigateClick = (url: string, Navigate: Function) => {
  Navigate(url);
  GoTop();
};

interface serverCardDataType {
  title: string,
  subTitle: string,
  icon: string,
  background: string,
  border: string,

}
export const ServiceCard = ({ icon, title, subTitle, background, border }: serverCardDataType) => {
  return (
    <div style={{ background, border: "1px solid", borderColor: border }} className={styles.serviceCard}>
      <img className={styles.serverCardImg} src={icon} alt="" />
      <p>{title}</p>
      <samp>{subTitle}</samp>
      <img className={styles.navArrow} src={Images.navArrow} alt="" />
    </div>
  )
}