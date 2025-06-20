import styles from "./Footer.module.css";
import Link from "next/link";
import Images from '../../public/assets/Images';
// import { HandleNavigateClick } from "../Tools";

export default function Footer() {

  return (
    <>
      <div className={styles.Footer}>
        {/* <img className={styles.footerBg} src={Images.footerBg} alt="" /> */}
        <div className={styles.footerTopSection}>
          <div className={styles.footerSection}>
            {/* <img
              src={Images.ClogWhite}
              className={styles.footerClog}
              alt=""
            onClick={() => HandleNavigateClick("/", Navigate)}
            /> */}
            <div className={styles.FContactBox}>
              {/* <img src={Images.wcall} alt="" /> */}
              <p>+91-1234567890</p>
            </div>
            <div className={styles.FContactBox}>
              {/* <img src={Images.wmessage} alt="" /> */}
              <p>test@gmail.com</p>
            </div>
            <div className={styles.FContactBox}>
              {/* <img src={Images.wlocation} alt="" /> */}
              <p>B-11/H 91S Mohan Cooperative New Delhi India 110044</p>
            </div>
            <div className={styles.footerMediaBox}>
              {/* <img src={Images.wfacebook} alt="" /> */}
              {/* <img src={Images.wteewt} alt="" /> */}
              {/* <img src={Images.wlinkdin} alt="" /> */}
              {/* <img src={Images.wYouTube} alt="" /> */}
            </div>
          </div>
          <div className={styles.footerSection}>
            <h2>Navigation</h2>
            <p >Home</p>
            <p >About Us</p>
            <p >Blog</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
          <div className={styles.footerSection}>
            <h2>Services</h2>
            <p>Cinema</p>
            <p>Magazine</p>
            <p >Influencer</p>
            <p>Newspaper</p>
            <p>Digital</p>
          </div>
          <div className={styles.footerSection}>
            <p>BTL</p>
            <p>Outdoor</p>
            <p>Radio</p>
            <p>Television</p>
            <p>Others</p>
          </div>
        </div>
        <div className={styles.hrline}>
          {/* <img src={Image.gotopIcon} alt="" onClick={GoTop} /> */}
        </div>
        <div className={styles.footerBootomSection}>
          <p>© Copyright 2025 Reserved</p>
        </div>
      </div>
    </>
  );
}
