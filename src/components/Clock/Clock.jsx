import ContextAlarm from '../context/ContextAlarm'
import Appear from 'components/Appear';
import AnalogClock from './AnalogClock/AnalogClock'
import DigitalClock from './DigitalClock/DigitalClock'
import AlarmOption from './AlarmOption/AlarmOption'
import AlarmList from './AlarmList/AlarmList'

import s from './Clock.module.css'


const Clock = () => {
  return (
    <Appear time={800}>
    <section className={s.container}>
      <div className={s.clockContainer}>
        <div className={s.clockContainer}>
          <ContextAlarm>
            <AnalogClock />
            <DigitalClock />
            <AlarmOption />
            <AlarmList/>
          </ContextAlarm>
        </div>
      </div>
      </section>
      </Appear>
  )
}


export default Clock