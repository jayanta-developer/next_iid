import { useState, useEffect } from 'react'
import styles from "./NavBar.module.css"

//images
import Images from '../../public/assets/Images';

//components
import { PrimaryBtn, SecondaryBtn } from "../AppBtn"

//data types
interface navItemDataType {
  title: string,
  subTitles: string[]
}

export default function NavBar() {
  const [navActiveTab, setNavActiveTab] = useState<number>(0)
  const [subList, setSubList] = useState(false)

  const menuItem: navItemDataType[] = [
    {
      title: "Home",
      subTitles: []
    },
    {
      title: "About IID",
      subTitles: ["Associations & Tieup", "Workshop & Events", "Our Team"]
    },
    {
      title: "Business Solution",
      subTitles: ["Business Solution", "EDP", "Membership", "Government Schemes"]
    },
    {
      title: "Courses",
      subTitles: []
    },
    {
      title: "Project Reports",
      subTitles: ["Prototype Project Report", "Industrial Project Report", "Bankable Project Report"]
    },
    {
      title: "Services",
      subTitles: []
    },
  ]


  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id !== "navItem") {
        setSubList(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);



  return (
    <>
      <div className={styles.NavBar}>
        <div className={styles.NavImgBox}><img src={Images.clog} alt="" /></div>
        <div className={styles.NavTabBox}>
          {
            menuItem?.map((nv: navItemDataType, i: number) => (
              <div id='navItem' onClick={() => {
                setNavActiveTab(i)
                subList ? setSubList(false) : setSubList(true)
              }} key={i} className={navActiveTab === i ? `${styles.navItem} ${styles.navItemActive}` : `${styles.navItem}`}>
                <p id='navItem'>{nv?.title}</p>
                {nv?.subTitles.length ? <img id='navItem' className={styles.downArrow} src={Images.downArrow} alt="" /> : null}
                {navActiveTab === i && nv?.subTitles.length && subList ?
                  <div id='navItem' className={styles.subTitleNav}>
                    {
                      nv?.subTitles?.map((snv, j: number) => (
                        <div id='navItem' key={j} className={styles.subNav_Item}>
                          <p id='navItem'>{snv}</p>
                        </div>
                      ))
                    }

                  </div>
                  : null}
              </div>
            ))
          }
          <img src={Images.cartIcon} className={styles.cartImg} alt="" />
          <PrimaryBtn btnText="Log In" />
          <SecondaryBtn btnText="Register" />
        </div>

      </div>
    </>
  )
}
