// import React, { useState } from "react";
// import Reservation from "./Reservation";

// const Main = () => {
//     const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
//     const initializeTimes = () => {
//         setAvailableTimes(["17:00", "18:00", "19:00", "20:00"]);
//     };

//     const updateTimes = (date) => {
//         // Your logic for updating available times based on the selected date
//     };

//     return (
//         <div>
//             <h1>Little Lemon Reservations</h1>
//             <Reservation
//                 availableTimes={availableTimes}
//                 updateTimes={updateTimes}
//                 initializeTimes={initializeTimes}
//             />
//         </div>
//     );
// };

// export default Main;\

import React, { useState, useReducer } from "react";
import Reservation from "./Reservation";

const Main = () => {
    const [availableTimes, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "initialize":
                return ["17:00", "18:00", "19:00", "20:00"];
            case "update":
                const newTimes = state.map(time => {
                    if (time === action.selectedDate) {
                        return time;
                    }
                    return time + 1;
                });
                return newTimes;
            default:
                return state;
        }
    }, []);

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const updateTimes = (date) => {
        dispatch({ type: "update", selectedDate: date });
    };

    const initializeTimes = () => {
        dispatch({ type: "initialize" });
    };

    const handleFormSubmit = (data) => {
        setLastName(data.lastName);
        setFirstName(data.firstName);
        setSelectedTime(data.time);
        setSelectedDate(data.date);
        updateTimes(data.date);
        initializeTimes();
    };

    return (
        <div>
            <h1>Little Lemon Reservations</h1>
            <Reservation
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                initializeTimes={initializeTimes}
                handleFormSubmit={handleFormSubmit}
                lastName={lastName}
                firstName={firstName}
                selectedTime={selectedTime}
                selectedDate={selectedDate}
            />
        </div>
    );
};

export default Main;