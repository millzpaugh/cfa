var weatherData; 

function retrieveWeatherData(location){
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=dd6d612e24b7d9caa94e93448aaea752', 
		type: 'GET', 
		dataType: 'json', 
		success: function(response){
			weatherData = response; 
			displayWeatherData(response); 
		}
	})
}; 

function displayWeatherData(){
	console.log(weatherData.main.temp)
    degreesF = Math.round((weatherData.main.temp- 273) * 9/5 + 32);
    temp =  $("<li class='temp'> It is currently " + degreesF + " degrees Fahrenheit in " + weatherData.name + " with " + weatherData.weather[0].description + ".</li>");
    $("#weather-info").append(temp); 

}

function retrieveWeatherDataForAllLocations(locations){
	for (i=0;i<locations.length;i++){
		retrieveWeatherData(locations[i])
	}
}

$(function(){
	var locations = ["Oakland", "San Francisco", "San Jose"]; 
	retrieveWeatherDataForAllLocations(locations); 
})

