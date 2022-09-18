import { createContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { alarmState } from "redux/alarm/alarmsSelectors";

import Alarm from '../../alarmSignal.mp3'
import { monthTranslation, months } from "../../data/data";

let alarm = new Audio(Alarm);
	alarm.loop = true;

export const AlarmContext = createContext();

function ContextAlarm({ children }) {
  const alarms = useSelector(alarmState)
   
  const { t } = useTranslation();
  const lang = useTranslation();


  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [activeTime, setActiveTime] = useState(null)

  const [hasAlarm, setHasAlarm] = useState(false);

  const isCurrent = useRef(true);

  //CHANGE_LANGUAGES
  useEffect(() => {
    monthTranslation(lang.i18n.language)
  }, [lang]);

  //GET_CURRENT_DATE
  useEffect(() => {
    setInterval(() => {
      let date = new Date();

      let HH = date.getHours(),
        MM = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        
        year = date.getFullYear(),
        ampm;

      if (HH >= 12) {
        HH = HH - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }

      if (HH === 0) HH = 12;
      if (HH < 10) HH = `0${HH}`;
      if (MM < 10) MM = `0${MM}`;

      setHourDigital(HH);
      setMinutesDigital(MM);
      setAmPm(ampm);
      setDayNow(day);
      setMonthNow(months[month]);
      setYearNow(year);
    }, 1000);
  }, []);

  const currentTime = `${hourDigital}:${minutesDigital} ${amPm}`;

  //ACTIVE_PLAY
  useEffect(() => {
    if (isCurrent.current) {
      isCurrent.current = false;
      return
    };

    const activeAlarm = () => {
    for (const item of alarms) {
    if (item.time === currentTime && item.isToggle === true) {
      setActiveTime(item) 
      alarm.play();
      alarm.loop = true;
       setHasAlarm(true)
     }
    }
    }
   activeAlarm();
  }, [alarms, currentTime])
  
  const pauseAlarm = () => {
    alarm.pause();
    setAlarmTime("");
  };
  
  //STOP_MUSIC
  useEffect(() => {

    if (!activeTime) return;

    if (activeTime.isToggle === false) {
      alarm.pause();
      setHasAlarm(false);
      pauseAlarm();
    }
    setActiveTime(null);

  }, [activeTime, currentTime])
  

  return (
    <AlarmContext.Provider
      value={{
        hourDigital,
        minutesDigital,
        amPm,
        dayNow,
        monthNow,
        yearNow,
        alarmTime,
        setAlarmTime,
        pauseAlarm,
        hasAlarm,
        setHasAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
}

export default ContextAlarm;