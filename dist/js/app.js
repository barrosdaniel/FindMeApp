const button = document.querySelector('.js-button');

button.addEventListener('click', function () {
  const position = window.navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    window.location.href = `https://www.google.com.au/maps/place/${latitude},${longitude}`;
  })
})