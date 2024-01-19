fetch('https://cors-proxy.byteoftech.net/https://www.duckduckgo.com/html/?q=hippocampus', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
  //body: JSON.stringify({ key: 'value' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
