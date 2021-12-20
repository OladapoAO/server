iMageGrab().then(response => console.log('fufilled')).catch(error => console.log('This error is caused by the settings page'));
createP();
setInterval(getISS, 30000);

async function iMageGrab() {
    const response = await fetch('blacklist.webp');
    const blob = await response.blob();
    document.getElementById('test').src = URL.createObjectURL(blob);
    // document.getElementById('par').textContent = 'A Test Page';
}

async function createP () {
    await iMageGrab();
    document.getElementById('par').textContent = 'A Test Page';
}

const url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS () {
    await iMageGrab();
    await createP();

    const response = await fetch(url);
    const iss_json = await response.json();
    const {latitude, longitude} = iss_json; 
    /*This technique is known as JavaScript Destructuing which takes the pieces of 
    a JS Object or Array and puts them into separate variables */
    console.log(`${latitude} & ${longitude}`);
    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
}



