import Link from "next/link";
import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <nav className='footer bg-[#43c05a]'>
      <div className={Styles.mainDiv}>
        <div className={Styles.div1}>
          <li>Made with 💚</li>
          <li>
            <Link href='#'>
              <a
                className={Styles.tab}
                href='https://www.instagram.com/akshays133'
              >
                Akshay Sharma
              </a>
            </Link>{" "}
            &{" "}
            <Link href='#'>
              <a
                href='https://www.twitter.com/agrit_tiwari'
                className={Styles.tab}
              >
                Agrit Twari
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
