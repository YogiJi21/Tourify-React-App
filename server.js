const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get('/api/flights', async (req, res) => {
  try {
    const apiKey = "8535385646b4af622041ee370867a2e3cea3299c33cc2d6cf87539c6dce8830b";
    const baseUrl = "https://serpapi.com/search.json";

    const response = await axios.get(baseUrl, {
      params: {
        ...req.query,
        api_key: apiKey
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching flight data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});