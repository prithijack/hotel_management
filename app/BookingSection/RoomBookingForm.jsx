"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import axios from 'axios';
import styles from './RoomBookingForm.module.css'; // Import CSS module for styling

const RoomBookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [roomTypes, setRoomTypes] = useState([]);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const roomPrices = {
    'Double Room': 219,
    'Small Suite': 199,
    'Luxury Room': 302,
    'Junior Suite': 213,
    'Superior Room': 420,
    'Single Room': 350,
    'Deluxe Room': 270,
    'Standard Room': 280,
    'Family Room': 225,
  };

  const handleRoomTypeChange = (selectedOptions) => {
    setRoomTypes(selectedOptions);
    calculateTotalPrice(selectedOptions);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log("booking...........");
  //     const response = await axios.post('/api/bookRoom', {
  //       method: 'POST',
  //       headers: { 'content-type': 'application/json' },
  //       body: JSON.stringify({
  //         checkInDate: checkInDate.toISOString(),
  //         numberOfDays,
  //         roomTypes: roomTypes.map(option => option.value),
  //         numberOfGuests,
  //         totalPrice, // You might need to calculate this on the server side for security reasons
  //       }),
  //     });
  //     console.log(response.data.message);
  //     alert('Room Booked!');
  //     // Redirect to home page (replace with actual redirection logic)
  //     window.location.href = '/';
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to book room. Please try again later.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("booking...........");
      const response = await fetch('/api/bookRoom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          checkInDate: checkInDate.toISOString(),
          numberOfDays,
          roomTypes: roomTypes.map(option => option.value),
          numberOfGuests,
          totalPrice, // You might need to calculate this on the server side for security reasons
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to book room');
      }
  
      const data = await response.json();
      console.log(data.message);
      alert('Room Booked!');
      // Redirect to home page (replace with actual redirection logic)
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Failed to book room. Please try again later.');
    }
  };
  

  const calculateTotalPrice = (selectedOptions) => {
    let totalPrice = 0;
    const selectedRoomTypes = selectedOptions.map(option => option.value);
    selectedRoomTypes.forEach(roomType => {
      totalPrice += roomPrices[roomType];
    });
    totalPrice *= numberOfDays;
    setTotalPrice(totalPrice);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Room Booking Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Check-In Date:</label>
          <DatePicker selected={checkInDate} onChange={date => setCheckInDate(date)} minDate={new Date()} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label>Number of Days of Stay:</label>
          <input type="number" value={numberOfDays} onChange={e => setNumberOfDays(e.target.value)} min="1" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label>Room Type:</label>
          <Select
            options={Object.keys(roomPrices).map(roomType => ({ value: roomType, label: roomType }))}
            isMulti
            value={roomTypes}
            onChange={handleRoomTypeChange}
            className={styles.select}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Number of Guests:</label>
          <input type="number" value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)} min="1" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label>Total Price:</label>
          <span className={styles.totalPrice}>{`$${totalPrice}`}</span>
        </div>
        <br />
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default RoomBookingForm;
