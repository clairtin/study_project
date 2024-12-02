const express = require('express');
const axios = require('axios');
require('dotenv').config(); 

const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client')));


app.get('/keywords/:key', async (req, res) => {
  const keyword = req.params.key; 
  const apiKey = process.env.UNSPLASH_API_KEY; 

  try {
   
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: keyword, 
        per_page: 5     
      },
      headers: {
        Authorization: `Client-ID ${apiKey}` 
      }
    });

   
    const imageUrls = response.data.results.map(photo => photo.urls.full);

    res.status(200).json({ urls: imageUrls }); 
  } catch (error) {
    console.error('Ошибка при запросе к Unsplash:', error.message);
    res.status(500).json({ error: 'Не удалось получить изображения с Unsplash' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
