import React from "react";
import { useWeather } from "../../../context/WeatherContext";
import styles from "./style.module.css";
function WeatherTable({ weath, i }) {
  const { weather } = useWeather();
  const getDayOfDate = (dateString)=>{
      const date = new Date(dateString)
      const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
      return daysOfWeek[date.getDay()]
  }
  return (
    <>
      <table style={{marginTop: "10px", marginLeft: "10px"}}>
        <thead>
          <tr >
            {/* Weather API forecast gives 3 day forecast for free version so i put twice upcoming data to show like i get 6 days data*/}
          {weather.map((weath, i) => {
            return (
              <td className={styles.bg} key={i}>
                <div>
                  <p className={styles.dateTag}>{getDayOfDate(weath.date)}</p>
                <img alt="icon" src={weath.day.condition.icon}/>
                <hr className={styles.hrColor}></hr>
                </div>
                <div className={`${styles.tempBox}`}>
                <span>{Math.round(weath.day.maxtemp_c)}</span><span>{weath.day.mintemp_c}</span>
                </div>
              </td>
            );
          })}
          {weather.map((weath, i) => {
            return (
              <td className={styles.bg} key={i}>
                <div>
                  <p className={styles.dateTag}>{getDayOfDate(weath.date)}</p>
                <img alt="icon" src={weath.day.condition.icon}/>
                <hr className={styles.hrColor}></hr>
                </div>
                <div className={`${styles.tempBox}`}>
                <span>{Math.round(weath.day.maxtemp_c)}</span><span>{weath.day.mintemp_c}</span>
                </div>
              </td>
            );
          })}
          </tr>
          
        </thead>
      </table>
    </>
  );
}

export default WeatherTable;
