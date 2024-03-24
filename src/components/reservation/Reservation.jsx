import { useState, React } from 'react';
// import Nav from '../nav/Nav'; // Assuming you have a Nav component
// import Footer from '../footer/Footer'; // Assuming you have a Footer component
import './reservation.css'



const Reservation = () => {



    function validateForm() {
        // Check if the First Name is an Empty string or not.

        if (firstName.length == 0) {
            alert('Invalid Form, First Name can not be empty')
            return
        }

        // Check if the Email is an Empty string or not.

        if (email.length == 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }
    }

    const [firstName, setFirstName] = useState('') // useState to store First Name
    const [lastName, setLastName] = useState('') // useState to store Last Name
    const [dateReservation, setDate] = useState('')
    const [email, setEmail] = useState('') // useState to store Email address of the user

    const [guestsNumb, setNumberOfGuests] = useState('') // useState to store Email address of the user

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`
        You reserved a table!
        -RESERVATION DETAILS-
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Reservation date: ${dateReservation}
        Occasion: ${reservationOc}
        `)
    }
    const [reservationOc, setOccasion] = useState("Occasion");

    const handleChange = (event) => {
        setOccasion(event.target.value)
    }
    return (
        <div>
            <div className="reservation__content">
                <div className="reservation__content-form">
                    <form>
                        <label className="date__container">DATE
                            <input type="date"
                                value={dateReservation}
                                onChange={(e) => setDate(e.target.value)} />
                        </label>
                        <label className="first__name-container">
                            <input
                                type="text"
                                value={firstName}
                                placeholder="FIRST NAME"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>
                        <label className="last__name-container">
                            <input
                                placeholder="LAST NAME"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>
                        <label className="time__container">TIME
                            <input
                                type="datetime-local"

                            />
                        </label>
                        <label className="email__address-container">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <select value={reservationOc} onChange={handleChange}>
                            <option value="Occasion">Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                        <label>NUMBER OF GUEST
                            <input
                                type="number"
                                placeholder='2'
                                value={guestsNumb}
                                onChange={(e) => setNumberOfGuests(e.target.value)}
                            />
                        </label>
                    </form>
                    <button
                        type="submit"
                        className='reservation__button'
                        // onClick={handleSubmit}
                        onClick={() => {
                            validateForm()
                        }}
                    > Reserve a Table</button>
                </div>

            </div>
        </div >
    );
}

export default Reservation;


