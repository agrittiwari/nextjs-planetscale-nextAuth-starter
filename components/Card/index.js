/* eslint-disable @next/next/no-img-element */
import React from "react";
import Style from "./Card.module.css";
const Card = ({ val }) => {
  const { event, yearsAgo, country, user } = val;
  const userName = user.name.toLowerCase();
  const countryName = country.split(",")[0];
  const countrySvg = country.split(",")[1];
  return (
    <div className={Style.wrap}>
      <div className={Style.mainDiv}>
        <div className={Style.div2}>
          <div className={Style.div2part1}>
            <img
              className={Style.userImg}
              src={
                user
                  ? user.image
                  : "https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              }
              alt='user Image'
            />
          </div>
          <div className={Style.div2part2}>
            <p className={Style.name}>
              {userName
                ? userName.replace(/^./, userName[0].toUpperCase())
                : "A Happy User"}
            </p>
            <p className={Style.country}>
              <img src={countrySvg} alt={countryName} width={50} height={20} />
              {countryName}
            </p>
          </div>
          <div className={Style.div2part3}>
            <p className={Style.time}>YEAR: {yearsAgo}</p>
          </div>
        </div>
        <div className={Style.dashDiv} />
        <div className={Style.div1}>
          <p className={Style.event}>{event}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
