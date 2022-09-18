import { ThemeContext, themes } from "components/context/themeContext";
import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { AlarmContext } from "../../context/ContextAlarm";
import s from './AnalogClock.module.css'

function AnalogClock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const { hasAlarm } = useContext(AlarmContext);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
      mm = date.getMinutes() * 6,
      ss = date.getSeconds() * 6;

    setHour(`rotateZ(${hh + mm / 12}deg)`);
    setMinutes(`rotateZ(${mm}deg)`);
    setSeconds(`rotateZ(${ss}deg)`);
  };
  setInterval(clock, 1000);

  return (
    <div className={theme === themes.light ? s.clockCircleLight : s.clockCircleDark}>
      <span className={s.clockTwelve}></span>
      <span className={s.clockThree}></span>
      <span className={s.clockSix}></span>
      <span className={s.clockNine}></span>

      <div className={s.clockRounder}></div>
      <div className={s.clockHour} style={{ transform: hour }}></div>
      <div className={s.clockMinutes} style={{ transform: minutes }}></div>
      <div className={s.clockSeconds} style={{ transform: seconds }}></div>
    </div>
  );
}

export default AnalogClock;