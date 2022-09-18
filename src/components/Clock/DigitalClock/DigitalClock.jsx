import { ThemeContext, themes } from "components/context/themeContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { AlarmContext } from "../../context/ContextAlarm";
import s from './DigitalClock.module.css'

function DigitalClock() {
  const { hourDigital, minutesDigital, amPm, dayNow, monthNow, yearNow } =
    useContext(AlarmContext);
  
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div>
      <div className={s.clockText}>
        <div className={theme === themes.light ? s.hourLight : s.hourDark}>{`${hourDigital}:`}</div>
        <div className={theme === themes.light ? s.minutesLight : s.minutesDark}>{minutesDigital}</div>
        <div className={theme === themes.light ? s.ampmLight : s.ampmDark}>{amPm}</div>
      </div>

      <div className={theme === themes.light ? s.clockDateLight : s.clockDateDark}>
        <span>{`${dayNow} `}</span>
        <span>{`${monthNow} , `}</span>
        <span>{yearNow}</span>
      </div>
    </div>
  );
}

export default DigitalClock;