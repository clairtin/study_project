document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault(); 
  
    const keyword = document.getElementById('keyword').value;
    const statusDiv = document.getElementById('status');
    const imagesDiv = document.getElementById('images');
  
    statusDiv.textContent = 'searching...';
    imagesDiv.innerHTML = ''; 
  
    try {
    
      const response = await fetch(`/keywords/${keyword}`);
      if (!response.ok) throw new Error('failed to fetch images');
  
      const data = await response.json();
      statusDiv.textContent = '';
  
      if (data.urls.length === 0) {
        statusDiv.textContent = 'no images found.';
      } else {
       
        data.urls.forEach(url => {
          const img = document.createElement('img');
          img.src = url;
          imagesDiv.appendChild(img);
        });
      }
    } catch (error) {
      console.error('Error:', error.message);
      statusDiv.textContent = 'error . please try again.';
    }
  });
  