import React, { useState } from 'react';
import './reservation.css'
import { submitAPI } from "../../api/api"; // Import the submitAPI function from the API file

const Reservation = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateReservation, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState('');
    const [guestsNumb, setNumberOfGuests] = useState('');
    const [reservationOc, setOccasion] = useState("SELECT OCCASION");

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateReservation: '',
        time: '',
        guestsNumb: '',
        reservationOc: '',
    });

    const validateForm = () => {
        const newErrors = {
            firstName: firstName.trim() === '' ? 'First Name is required' : '',
            lastName: lastName.trim() === '' ? 'Last Name is required' : '',
            email: email.trim() === '' ? 'Email Address is required' :
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Email Address is invalid' : '',
            dateReservation: dateReservation === '' ? 'Date Reservation is required' : '',
            time: time === '' ? 'Time is required' : '',
            guestsNumb: guestsNumb === '' ? 'Number of Guests is required' : '',
            reservationOc: reservationOc === 'SELECT OCCASION' ? 'Occasion is required' : '',
        };

        setErrors(newErrors);

        return !Object.values(newErrors).some(error => error !== '');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const formData = {
                firstName,
                lastName,
                email,
                time,
                dateReservation,
                guestsNumb,
                reservationOc
            };

            const isSuccess = await submitAPI(formData);

            if (isSuccess) {
                alert('Reservation successful!');
                setFirstName('');
                setLastName('');
                setDate('');
                setTime('');
                setEmail('');
                setNumberOfGuests('');
                setOccasion('Occasion');
            } else {
                throw new Error('Failed to submit reservation. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting reservation:', error);
            alert(error.message);
        }
    };

    const handleChange = (event) => {
        setOccasion(event.target.value)
    }

    return (

        <div>
            <div className="reservation__content">
                <div className="reservation__content-form">

                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="container"
                    >
                        <label className="date__container">Select Date
                            <input
                                type="date"
                                value={dateReservation}
                                onChange={(e) => setDate(e.target.value)} />
                            {errors.dateReservation && <p className="error">{errors.dateReservation}</p>}

                        </label>
                        <label className="first__name-container">
                            First Name
                            <input
                                type="text"
                                value={firstName}
                                placeholder="type your first name..."
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </label>
                        <label className="last__name-container">Last Name
                            <input
                                placeholder="type your last name..."
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}

                            />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}

                        </label>
                        <label className="time__container">Select Time
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            {errors.time && <p className="error">{errors.time}</p>}

                        </label>
                        <label className="email__address-container">Email Address
                            <input
                                type="email"
                                placeholder="type your email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <p className="error">{errors.email}</p>}

                        </label>
                        <select value={reservationOc} onChange={handleChange}>
                            <option value="SELECT OCCASION">SELECT OCCASION</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>

                        <label>NUMBER OF GUEST
                            <input
                                type="number"
                                min={1}
                                max={60}
                                placeholder='0'
                                value={guestsNumb}
                                onChange={(e) => setNumberOfGuests(e.target.value)}
                            />
                            {errors.guestsNumb && <p className="error">{errors.guestsNumb}</p>}

                        </label>
                        <button
                            type="submit"
                            className='reservation__button'
                        > Reserve a Table</button>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Reservation;

