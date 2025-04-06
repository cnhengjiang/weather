
import classNames from "classnames";
import React from "react";
import { WeatherData } from "types/types";
import styles from "./Card.module.scss";
interface IProps{
  cardProps:WeatherData,
  changeDetail:()=>void,
  myIndex:number,
  activeNumber:number
}
const Card: React.FC<IProps> = ({cardProps,changeDetail,activeNumber,myIndex}) => {
  return (
    <div className={classNames(styles.card,{[styles.active]:myIndex === activeNumber})} onClick={changeDetail}>
      <div>{cardProps.fxDate}</div>
      <div>{cardProps.textDay}</div>
      <div>{cardProps.tempMax} ℃</div>
      <div>{cardProps.tempMin} ℃</div>
    </div>
  );
}
export default Card
