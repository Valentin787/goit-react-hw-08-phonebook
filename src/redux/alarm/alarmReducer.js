import {combineReducers,createReducer } from "@reduxjs/toolkit";
import {getAlarms, addAlarm,toggleAlarm, deleteAlarm } from "./operation";


const aLarmsItemReducer = createReducer([], (builder) => {
  builder.addCase(getAlarms.fulfilled, (_, { payload }) =>  payload);

  builder.addCase(addAlarm.fulfilled, (state, { payload }) => [...state, payload]);
  builder.addCase(toggleAlarm.fulfilled, (state, { payload }) => state.map((item) => item.id === payload.id ? payload : item
  ));

  builder.addCase(deleteAlarm.fulfilled, (state, { payload }) => state.filter((item) => item.id !== payload.id
  ));

});

const loadingReducer = createReducer(false, (builder) => {
  ///GET_ALARMS
  builder.addCase(getAlarms.pending, () => true);
  builder.addCase(getAlarms.fulfilled, () => false);
  builder.addCase(getAlarms.rejected, () => false);
  ///ADD_ALARM
  builder.addCase(addAlarm.pending, () => true);
  builder.addCase(addAlarm.fulfilled, () => false);
  builder.addCase(addAlarm.rejected, () => false);
  ///DELETE_ALARM
  builder.addCase(deleteAlarm.pending, () => true);
  builder.addCase(deleteAlarm.fulfilled, () => false);
  builder.addCase(deleteAlarm.rejected, () => false);
});
const errorReducer = createReducer(null,(builder) => {
   ///GET_ALARMS
  builder.addCase(getAlarms.pending, () => null);
  builder.addCase(getAlarms.rejected, (_,{payload}) => payload);
  ///ADD_ALARM
  builder.addCase(addAlarm.pending, () => null);
  builder.addCase(addAlarm.rejected, (_,{payload}) => payload);
  ///DELETE_ALARM
  builder.addCase(deleteAlarm.pending, () => null);
  builder.addCase(deleteAlarm.rejected, (_,{payload}) => payload);
  
})


const dataReducer = combineReducers({
    item: aLarmsItemReducer,
    loading: loadingReducer,
    error: errorReducer
})
const alarmReducer = combineReducers({
    data:dataReducer,
})

export default alarmReducer