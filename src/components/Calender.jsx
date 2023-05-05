import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";

export default function Calender() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="body">
        <h1 className="text-center">Calendar</h1>
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            nextLabel="month>>"
            nextAriaLabel="Go to next month"
            next2Label="year>>"
            next2AriaLabel="Go to next year"
            prevLabel="<<month"
            prevAriaLabel="Go to prev month"
            prev2Label="<<year"
            prev2AriaLabel="Go to prev year"
          />
        </div>
        {date.length > 0 ? (
          <p className="text-center">
            <span className="bold">Start:</span> {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className="bold">End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className="text-center">
            <span className="bold">Default selected date:</span>{" "}
            {date.toDateString()}
          </p>
        )}
      </div>
    </div>
  );
}
