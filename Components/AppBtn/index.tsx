import styles from "./AppBtn.module.css"
interface btnProps {
  btnText: string;
  height?: string;
  icon?: string;
  onClick?: () => void;
}

export const PrimaryBtn = ({ btnText, height, onClick }: btnProps) => {
  return (
    <div onClick={onClick} style={{ height: height }} className={styles.appBtn}>
      <p>{btnText}</p>
    </div>
  )
}
export const SecondaryBtn = ({ btnText, height, onClick, icon }: btnProps) => {
  return (
    <div onClick={onClick} style={{ height: height }} className={`${styles.appBtn} ${styles.SecondaryBtn}`}>
      <p>{btnText}</p>
      {icon ? <img src={icon} alt="" /> : null}
    </div>
  )
}