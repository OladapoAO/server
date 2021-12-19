iMageGrab().then(response = () => console.log('yay')).catch(error = () => console.log('This error is caused by the settings page'));


async function iMageGrab() {
    const response = await fetch('blacklist.webp');
    const blob = await response.blob();
    document.getElementById('test').src = URL.createObjectURL(blob);
    var text = 'This is a test page'
    document.getElementById('par').textContent = text;

}

