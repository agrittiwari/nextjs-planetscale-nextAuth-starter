import React from "react";
import Style from "./Card.module.css";
const Card = ({ val }) => {
  const { event, yearsAgo,country, user } = val;
  return (
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
          alt=''
        />
      </div>
      <div className={Style.div2part2}>
        <p className={Style.name}>{user ? user.name : 'A Happy User'}</p>
        <p className={Style.country}>{country}</p>
      </div>
      <div className={Style.div2part3}><p className={Style.time}>This Story is from {yearsAgo}</p></div>
      </div>  <div className={Style.div1}>
       
        <p className={Style.event}>{event}</p>
             
      </div>
    </div>
  );
};

export default Card;
