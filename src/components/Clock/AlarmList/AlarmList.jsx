import { useContext, useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { AlarmContext } from "../../context/ContextAlarm";
import { alarmState } from 'redux/alarm/alarmsSelectors';
import { deleteAlarm, getAlarms, toggleAlarm } from 'redux/alarm/operation';
import AlarmModal from 'components/common/AlarmModal/AlarmModal';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { ToastContainer, toast } from 'react-toastify/dist/react-toastify';
import { ThemeContext, themes } from 'components/context/themeContext';
import "react-toastify/dist/ReactToastify.css";
import s from './AlarmList.module.css'




const AlarmList = () => {
  
  const { theme } = useContext(ThemeContext);
  const alarms = useSelector(alarmState);
  const dispatch = useDispatch();
  const [activeAlarm, setActiveAlarm] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  
  const {
    pauseAlarm,
    hasAlarm,
    setHasAlarm } = useContext(AlarmContext);

  //FIRST_FETCH

  useEffect(() => {
    dispatch(getAlarms())
  }, [dispatch]);


  //TOGGLE

  const handleChange = (item) => setActiveAlarm({ ...item, isToggle: !item.isToggle });

  useEffect(() => {
    if (!activeAlarm) return;
    const handlerToggleAlarm = () => {
      dispatch(toggleAlarm(activeAlarm))
      setActiveAlarm(null)
    }
    
    handlerToggleAlarm()
  }, [activeAlarm, dispatch]);

  const setAlarm = () => {
    if (hasAlarm) {
      pauseAlarm();
      setHasAlarm(false);
      return;
    }
  };
     
  //DELETE_ALARM

  const onDeleteAlarm = (id) => setDeleteId(id);

  useEffect(() => {
    if (!deleteId) return;
    console.log(deleteId);
    dispatch(deleteAlarm(deleteId));
    toast.success(`Контакт видалений зі списку контактів :))`, {
      icon: `❎`
    });
    setDeleteId(null);

  }, [deleteId, dispatch]);

  const deleteBtnColor = theme === themes.light ?"#3b423a":"#f0f6f0"

  return (
    <>
    {hasAlarm && <AlarmModal />}
   
    <ul>
      {alarms && alarms.map((item) => {
        return <li
          className={s.item}
          key={item.id}
          style={{backgroundColor: item.color}}
        >
          <span className={theme === themes.light ?s.itemTextLight:s.itemTextDark}>{item.time}</span>
          <Switch
            value={item.time}
            checked={item.isToggle}
            onClick={hasAlarm? setAlarm:()=>handleChange(item)}
            inputProps={{ 'aria-label': 'controlled' }}
           
          />
          
          <DeleteForeverRoundedIcon
            onClick={(()=>onDeleteAlarm(item.createdAt))}
            sx={{
              color: deleteBtnColor,
              fontSize: "30px"
            }}
          />
      </li>}
      )}
     
    </ul>
     <ToastContainer theme="dark"/>
    </>
  )
}

AlarmList.propTypes = {}

export default AlarmList