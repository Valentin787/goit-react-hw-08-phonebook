import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItems,toggleItem, saveItem, deleteItem } from '../../utils/alarmsApi';

const API_ENDPOINT = "/alarms";

const getAlarms = createAsyncThunk('alarms/getAlarmStatus', () => getItems(API_ENDPOINT)
);

const addAlarm = createAsyncThunk('alarm/addAlarmStatus', (newAlarm) => saveItem(API_ENDPOINT, newAlarm));

const toggleAlarm = createAsyncThunk('alarm/toggleAlarm Status', async (updateAlarm) => {
  // console.log(updateAlarm)
  const data = await toggleItem(API_ENDPOINT, updateAlarm)
  return data
}
);
const deleteAlarm = createAsyncThunk('alarm/deleteAlarmStatus', (removeAlarm) => {
  return deleteItem(API_ENDPOINT, removeAlarm)
}
);
export { getAlarms,addAlarm,toggleAlarm,deleteAlarm };