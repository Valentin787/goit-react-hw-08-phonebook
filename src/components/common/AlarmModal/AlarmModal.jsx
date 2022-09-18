// import { useEffect } from "react";
// import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";
import { FcAlarmClock } from "react-icons/fc";
import NotificationsOffSharpIcon from '@mui/icons-material/NotificationsOffSharp';
import s from "./AlarmModal.module.css";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { AlarmContext } from "components/context/ContextAlarm";


const modalAlarm = document.querySelector("#alarm");

const AlarmModal = () => {
  const {   pauseAlarm, hasAlarm, setHasAlarm } = useContext(AlarmContext);
 

  const setAlarm = () => {
    if (hasAlarm) {
      pauseAlarm();
      setHasAlarm(false);
      return;
    }
  }
  useLockBodyScroll(true);
  
  return createPortal(
     <div className={s.wrapLoader}>
      <div className={s.modal}>
        <button
          onClick={setAlarm}
          className={s.btn}>
          <FcAlarmClock className={s.activeIcon} />
        </button>
      </div>
    </div>, modalAlarm
  )
}

export default AlarmModal



