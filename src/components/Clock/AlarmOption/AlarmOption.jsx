import  { useContext, useEffect, useState } from "react";
import { minutesNumber, hourNumber } from "../../../data/func";
import useSelect from "../../hooks/useSelect";
import { AlarmContext } from "../../context/ContextAlarm";
import { useDispatch } from "react-redux";
import { addAlarm } from "redux/alarm/operation";
import { nanoid } from 'nanoid';
import { CSSTransition } from 'react-transition-group';
import {backgroundColors} from '../../../data/colors'

import NotificationAddRoundedIcon from '@mui/icons-material/NotificationAddRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { ToastContainer,toast } from 'react-toastify/dist/react-toastify';
import "react-toastify/dist/ReactToastify.css";

import s from './AlarmOption.module.css'
import  '../../Appear/style.css'

function AlarmOption() {

  const dispatch = useDispatch()
  const [hour, setHour] = useSelect("Hour");
  const [minutes, setMinutes] = useSelect("Minutes");
  const [amPmOption, setAmPmOption] = useSelect("Am-Pm");
  const [addAlarmModal, setAddAlarmModal] = useState(false);
  const [notAddAlarm, setNotAddAlarm] = useState(!addAlarmModal);

  const [newAlarm, setNewAlarm] = useState(null);

  const { hasAlarm } = useContext(AlarmContext);


  const getRandom = (max) => {
    const getId = Math.floor(Math.random(backgroundColors.id) * (max - 1) + 1);
    const findElement = backgroundColors.find(({ id }) => id === getId);
    return findElement.color
  }

  ///OPEN_ADD_MODAL

  const openModal = () => {
    setAddAlarmModal(prevState => !prevState);
    setNotAddAlarm(prevState => !prevState)
  };
    

  const onSubmitNewAlarm = (e) => { 
    e.preventDefault();

    const alarm = {
      time: `${hour}:${minutes} ${amPmOption}`,
      isToggle: false,
      id: nanoid(),
      color:getRandom(backgroundColors.length+1)
    }
    setNewAlarm(alarm);

  }
  useEffect(() => {
    if (!newAlarm) return;
    if (newAlarm.time.includes("Hour") || newAlarm.time.includes("Minutes")) {
      toast.warning("ЕЙ,👋 треба вибрати час :(")
      return
    };
    dispatch(addAlarm(newAlarm))
    toast.success("Ну що ж, будь готовий прокинутись в цей час 🫵 :)")
    setNewAlarm(null);

  }, [dispatch, newAlarm])

  return (
    <div className={s.optionContainer}>
      <button
        className="btnClose"
        onClick={openModal}>
        <CSSTransition
          timeout={500}
          in={addAlarmModal}
          unmountOnExit
        >
        <CancelRoundedIcon
            sx={{
              color: "#e62b2b",
              fontSize: "56px"
            }}
          />
        </CSSTransition>
      </button>

      <button
        className="btnAdd"
        onClick={openModal}>
      <CSSTransition timeout={500} in={notAddAlarm} unmountOnExit>
        <NotificationAddRoundedIcon
            sx={{
              color: "#0876e9",
              fontSize: "56px"
            }}
          />
        </CSSTransition>
      </button>
      
      <div
        className="banner"
      >
        <CSSTransition timeout={500} in={addAlarmModal} unmountOnExit>
        <form
         onSubmit={onSubmitNewAlarm}
            className={hasAlarm ? s.wrapperOption : s.disable}>
          <div
            className={s.selectContainer}
          >
              <select {...setHour}
              className={s.select}
            >
                <option disabled value="Hour">
                  Hour
                </option>
          {hourNumber.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
              </select>
              <select {...setMinutes}
              className={s.select}
            >
                <option disabled value="Minutes">         
                Minutes
                </option>
          {minutesNumber.map((minutes, index) => (
            <option key={index} value={minutes}>
              {minutes}
            </option>
          ))}
              </select>
              <select {...setAmPmOption}
              className={s.select}
            >
                <option disabled value="Am-Pm">
                  Am/Pm
                </option>
                <option value="AM">Am</option>
                <option value="PM">Pm</option>
              </select>
            </div>
            <div
              className={s.buttonContainer}
            >
              <button
                className={s.btnAddInForm}
                type="submit">
                <DataSaverOnIcon
                fontSize="large" 
                sx={{ color: "#a1ee13" }}
                />
                {/* <strong
                  className={s.btnAddText}
                >ADD
                </strong> */}
              </button>
              <button
                className={s.btnReset}
                type="reset">
                {/* <strong>Reset</strong> */}
                <RestoreIcon
                fontSize="large" 
                sx={{ color: "#ee133f" }}
                />
              </button>
            </div>
      </form>
        </CSSTransition>
      </div>
       <ToastContainer theme="dark"/>
    </div>
  );
}

export default AlarmOption;