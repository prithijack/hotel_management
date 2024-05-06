// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');

// Create an Express application
const app = express();

// Set up middleware to parse JSON bodies
app.use(bodyParser.json());

// Configure Google Sheets API authentication
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.CLIENT_MAIL,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Replace newline characters
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

// Define a route to handle POST requests to /api/bookRoom
app.post('/api/bookRoom', async (req, res) => {
  try {
    // Extract data from the request body
    const { checkInDate, numberOfDays, roomTypes, numberOfGuests, totalPrice } = req.body;

    // Get the current timestamp
    const timestamp = new Date().toISOString();

    // Append the data to the Google Sheets spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '16FAVFOKE1vBqUNJeCncHMZqpJxwMl2dQqt_shArnVeU',
      range: 'Sheet1!A:F', // Change the range accordingly
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, checkInDate, numberOfDays, roomTypes, numberOfGuests, totalPrice]],
      },
    });

    console.log('Data appended:', response.data);

    // Send a success response
    res.status(200).json({ success: true, message: 'Data stored successfully' });
  } catch (error) {
    console.error('Error storing data:', error);
    // Send an error response
    res.status(500).json({ success: false, message: 'Error storing data' });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
