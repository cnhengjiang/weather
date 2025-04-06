import React, { useEffect, useState } from "react";
import { LocationData, WeatherData } from "types/types";
import Card from "./Card";
import styles from "./WeatherDisplay.module.scss";

interface IProps {
  data: WeatherData[] | null;
  location: LocationData | null;
}

const WeatherDisplay: React.FC<IProps> = ({ data, location }) => {
  const [detailIndex, setDetailIndex] = useState(0);
  useEffect(() => {
    setDetailIndex(0);
  }, [location]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.detail}>
        <div className={styles.left}>
          <div>
            {location?.adm1} {location?.adm2} {location?.label}
          </div>
          <div className={styles.icon}>
            {data && (
              <>
                <i className={`qi-${data[detailIndex].iconDay}`}></i>{" "}
                <div>{data[detailIndex].textDay}</div>
              </>
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div>风向：{data && data[detailIndex].windDirDay}</div>
          <div>风速：{data && data[detailIndex].windSpeedDay}公里/小时</div>
          <div>湿度：{data && data[detailIndex].humidity}%</div>
        </div>
      </div>
      <div className={styles.cardbox}>
        {data?.map((item, index) => {
          return (
            <Card
              key={index}
              myIndex={index}
              cardProps={item}
              changeDetail={() => setDetailIndex(index)}
              activeNumber={detailIndex}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherDisplay;
