import Link from "next/link";
import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <nav className={Styles.footerMain}>
      <div className={Styles.mainDiv}>
        <div className={Styles.div1}>
          <li>Made with 💚</li>
          <li>
            <Link href='https://www.instagram.com/akshays133'>
              <a
                className={Styles.tab}
               
              >
                Akshay Sharma
              </a>
            </Link>
            &
            <Link   href='https://www.twitter.com/agrit_tiwari'>
              <a
              
                className={Styles.tab}
              >
                Agrit Tiwari
              </a>
            </Link>
          </li>
        </div>
        <div className={Styles.div2}>
          <li>Powered By</li>
          <li>
            <a href='https://www.planetscale.com' className={Styles.tab}>
              PlanetScale
            </a>
            <strong>X</strong>
            <a href='https://www.hashnode.com' className={Styles.tab}>
              Hashnode
            </a>
          </li>
          <li>Hackathon</li>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
