getLocation();
catchStarwars().then(response => console.log('yay')).catch(error => console.error(error));
getData();

function getLocation() {
    document.getElementById('geolocate').addEventListener('click', event => { if ('geolocation' in navigator) {
        console.log('geolocation is available');
        navigator.geolocation.getCurrentPosition(async position => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          document.getElementById('lat').textContent = lat;
          document.getElementById('long').textContent = long;

          const data = {lat, long};
          const options = {
              method: 'POST',
              headers: {
                  'Content-Type':'application/json'
              },
              body: JSON.stringify(data)
          }
          const response = await fetch('/api', options);
          const rdata = await response.json();
          console.log(rdata);

        })
        } else {
         console.log('geolocation is not available');
        }
       });
}

/*The fetch function is asynchronous, which means it returns as JS Promise 
The promise object  */

async function catchStarwars () {
    var pic = 'Star Wars';
    console.log(`This is a ${pic} Picture`);
    const response = await fetch('starwars.jpg');
    console.log(response);
    const blob = await response.blob();
    console.log(blob);
    document.getElementById('pic').src = URL.createObjectURL(blob);
}

 async function getData() {

     const response = await fetch('test.csv');
     const data = await response.text();
    

     const table = data.split('\n').slice(1);
     table.forEach ( row => {
         const columns = row.split(',');
         const year = columns[0];
         const temp = columns[1];
         console.log(year, temp);
     })
    

 }