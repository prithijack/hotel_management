import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.CLIENT_MAIL,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Replace newline characters
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

export default async function handler(req, res) {
    console.log("1...........");
  if (req.method === 'POST') {
    try {
        console.log("1...........");
      const { checkInDate, numberOfDays, roomTypes, numberOfGuests, totalPrice } = req.body;

      const timestamp = new Date().toISOString();

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: '16FAVFOKE1vBqUNJeCncHMZqpJxwMl2dQqt_shArnVeU',
        range: 'Sheet1!A:E', // Change the range accordingly
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[timestamp, checkInDate, numberOfDays, roomTypes, numberOfGuests, totalPrice]],
        },
      });

      console.log('Data appended:', response.data);

      res.status(200).json({ success: true, message: 'Data stored successfully' });
    } catch (error) {
      console.error('Error storing data:', error);
      res.status(500).json({ success: false, message: 'Error storing data' });
    }
  } else {
    console.log("405...........");
    console.log(req.method);
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
