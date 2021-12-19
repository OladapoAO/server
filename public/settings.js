iMageGrab().then(response => console.log(response)).catch(error => console.log('This error is caused by the settings page'));


async function iMageGrab() {
    const response = await fetch('blacklist.webp');
    const blob = await response.blob();
    document.getElementById('test').src = URL.createObjectURL(blob);
    document.getElementById('par').textContent = 'A Test Page';
}









