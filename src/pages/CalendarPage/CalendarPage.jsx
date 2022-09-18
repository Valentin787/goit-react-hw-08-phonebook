import DateCalendar from 'components/DateCalendar/DateCalendar'

import s from './CalendarPage.module.css'


let now = new Date();

const CalendarPage = () => {

  return (
    <div className={""}>
      <DateCalendar
        year={now.getFullYear()}
        month={now.getMonth() + 1}
        day={now.getDate()} />
      
    </div>
  )
}

export default CalendarPage