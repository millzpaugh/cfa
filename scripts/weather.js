var weatherData; 

function retrieveWeatherData(param, location){
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/' + param + '?q=' + location + '&APPID=dd6d612e24b7d9caa94e93448aaea752', 
		type: 'GET', 
		dataType: 'jsonp', 
		success: function(response){
			weatherData = response; 
			displayWeatherData(response); 
		}
	})
}; 

function displayWeatherData(){
    degreesF = Math.round((weatherData.main.temp- 273) * 9/5 + 32);
    var temp =  $("<li class='temp'> It is currently " + degreesF + " degrees Fahrenheit in " + weatherData.name + " with " + weatherData.weather[0].description + ".</li>");
    $("#weather-info").append(temp); 

}

function retrieveWeatherDataForAllLocations(param, locations){
	for (i=0;i<locations.length;i++){
		retrieveWeatherData(param, locations[i])
	}
}

$(function(){
	$("#weather-info").empty()
	var locations = ["Oakland", "San Francisco", "San Jose"]; 
	retrieveWeatherDataForAllLocations('weather', locations); 
})

