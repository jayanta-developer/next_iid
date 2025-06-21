import styles from "./Home.module.css";

//images
import Images from '../public/assets/Images';

//data
import { serviceData } from "../public/assets/data";

//components
import Footer from '../Components/Footer';
import NavBar from "../Components/NavBar"
import { ServiceCard } from '../Components/Tools';
import { SecondaryBtn } from "../Components/AppBtn"

export default function Home() {
  return (
    <>
      <div className={`${styles.pageContainer} ${styles.homePage}`}>
        <NavBar />
        <div className={styles.wrapper}>
          {/* Hero section */}
          <div className={styles.homeSliderBox}>
            <img className={styles.homeBg1} src={Images.HomeBg1} alt="" />
            <div className={styles.hsTextBox}>
              <p className={styles.homeBHeader}>For every Indian who’s
                dreamt of starting their own business</p>
              <p className={styles.homeBSubHeader}>From business idea to execution, we’ve got your back. Courses, mentorship, and government support
                — all in one place.</p>
            </div>
            <div className={styles.hsImgBox}>
              <img src={Images.HomeBg2} alt="" />
            </div>
          </div>
          {/* Business Services section */}
          <div className={styles.serviceSection}>
            <p className={styles.sectionHeader}>Business Services</p>
            <p className={styles.sectionSubHeader}>We Provide Exclusive Services For Your Business</p>
            <div className={styles.serviceCardsBox}>
              {serviceData?.map((sv, i: number) => (
                <ServiceCard
                  title={sv.title}
                  subTitle={sv.subTitle}
                  icon={sv.icon}
                  background={sv.background}
                  border={sv.border}
                  key={i}
                />
              ))
              }
            </div>
            <div className={styles.serviceBottomBox}>
              <div className={styles.serviceBleftBox}>
                <div className={styles.sblTextBox}>
                  <p>Checkout Our</p>
                  <samp>Registration Services</samp>
                </div>
                <div className={styles.sblImgBox}>
                  <div><img src={Images.sevIcon1} alt="" /></div>
                  <div><img src={Images.sevIcon2} alt="" /></div>
                  <div><img src={Images.sevIcon3} alt="" /></div>
                  <div><img src={Images.sevIcon4} alt="" /></div>
                  <div><img src={Images.optionIcon} alt="" /></div>
                </div>
              </div>
              <div className={styles.serviceBRightBox}>
                <div className={styles.sblTextBox}>
                  <p>Get 365 Days</p>
                  <samp>Personalized Business Nurturing & Support </samp>
                </div>
                <SecondaryBtn height='63px' btnText='Join IID Membership' icon={Images.rightArrow} />
              </div>
            </div>
          </div>
        </div>
        {/* who we are section */}
        <div className={styles.whoWeAreSection}>
          <div className={styles.wwasTextBox}>
            <p className={styles.wTitle1}>Who we are?</p>
            <p className={styles.wTitle2}>Institute For Industrial Development</p>
            <p className={styles.wTitle3}>Institute for Industrial Development (IID) is an incubator with the Government of India, Ministry of Micro, Small and Medium Enterprises (MSME) , and the department of start-ups, an initiative by the Government of Uttar Pradesh.</p>
            <p className={styles.wTitle4}>Download Our Mobile App</p>
            <div className={styles.webStorBtnBox}>
              <img src={Images.appleStore} alt="" />
              <img src={Images.googleStore} alt="" />
            </div>
          </div>
          <div className={styles.wwasImgBox}>
            <img src={Images?.mobileImg} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
