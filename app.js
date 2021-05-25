var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');

button.addEventListener('click', function(){
    var cityName = document.querySelector('.cityName');
    var temp = document.querySelector('.temp');
    var desc = document.querySelector('.desc');

    var apiKey = 'd44b8b87ab08971059c64e9dc941e512';

    fetch('http://api.weatherstack.com/current?access_key=' + apiKey +
          '&query='+ inputValue.value)
      .then(response => response.json())
      .then(data => {
        let nameValue = data['location']['name'];
        let tempValue = JSON.stringify(data['current']['temperature']);
        let descValue = data['current']['weather_descriptions'][0];
        let iconImg = data['current']['weather_icons'][0];

        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue + ' °C';
        desc.innerHTML = descValue;
        document.getElementById('icon').src = iconImg;
      })
      .catch(err => alert("Error: City not found or Fail to fetch"))
})


