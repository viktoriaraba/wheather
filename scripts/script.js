$(function(){
    getWeatherData('ua', dataReceived, showError);

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; 
        var city = data.city.name;
        var country = data.city.country;
    
        $('#location').html(city + ', <b>' + country + '</b>');

		$("#temp").html(parseInt(data.list[0].temp.day) + "&deg;C"); //&deg;
		$("#tempIcon").html('<img src="icons/'+ data.list[0].weather[0].icon +'.png" />');
			
		$("#nighttemp").html(parseInt(data.list[0].temp.night) + "&deg;C");
		$("#morntemp").html(parseInt(data.list[0].temp.morn) + "&deg;C");
		$("#daytemp").html(parseInt(data.list[0].temp.day) + "&deg;C");
		$("#evetemp").html(parseInt(data.list[0].temp.eve) + "&deg;C");
		
		$("#pressure").html(parseInt(data.list[0].pressure) );
		$("#humidity").html(parseInt(data.list[0].humidity));
		$("#wind").html(parseInt(data.list[0].speed));
		   
		$('#description').html(data.list[0].weather[0].description); 
		   
        

//var localTime = new Date(this.dt*1000 - offset); 
var d = new Date();
            var offset = -d.getTimezoneOffset() * 60 * 1000;
            var localTime = new Date(data.list[0].dt * 1000 - offset);
			
            $("#day").html(moment(localTime).format('dddd'));
            $("#date").html(moment(localTime).format('D'));
            $("#month").html(moment(localTime).format('MMMM'));


   
		$('#day1').html(moment(new Date(data.list[0].dt*1000 - offset)).calendar());
        $('#icon1').html('<img width="100" height="101" src="icons/'+ data.list[0].weather[0].icon +'.png" />');
        $('#temperature1').html(Math.round(data.list[0].temp.day) + '&deg;C');
        $('#condition1').html(data.list[0].weather[0].description);
        
        $('#day2').html(moment(new Date(data.list[1].dt*1000 - offset)).calendar());
        $('#icon2').html('<img width="70" height="70" src="icons/'+ data.list[1].weather[0].icon +'.png" />');
        $('#temperature2').html(Math.round(data.list[1].temp.day) + '&deg;C');
        $('#condition2').html(data.list[1].weather[0].description);        
            
        $('#day3').html(moment(new Date(data.list[2].dt*1000 - offset)).calendar());
        $('#icon3').html('<img width="70" height="70" src="icons/'+ data.list[2].weather[0].icon +'.png" />');
        $('#temperature3').html(Math.round(data.list[2].temp.day) + '&deg;C');
        $('#condition3').html(data.list[2].weather[0].description);    
        
        $('#day4').html(moment(new Date(data.list[3].dt*1000 - offset)).calendar());
        $('#icon4').html('<img width="70" height="70" src="icons/'+ data.list[3].weather[0].icon +'.png" />');
        $('#temperature4').html(Math.round(data.list[3].temp.day) + '&deg;C');
        $('#condition4').html(data.list[3].weather[0].description);    
        
        $('#day5').html(moment(new Date(data.list[4].dt*1000 - offset)).calendar());
        $('#icon5').html('<img width="70" height="70" src="icons/'+ data.list[4].weather[0].icon +'.png" />');
        $('#temperature5').html(Math.round(data.list[4].temp.day) + '&deg;C');
        $('#condition5').html(data.list[4].weather[0].description);    
        
        $('#day6').html(moment(new Date(data.list[5].dt*1000 - offset)).calendar());
        $('#icon6').html('<img width="70" height="70" src="icons/'+ data.list[5].weather[0].icon +'.png" />');
        $('#temperature6').html(Math.round(data.list[5].temp.day) + '&deg;C');
        $('#condition6').html(data.list[5].weather[0].description);    
        
        $('#day7').html(moment(new Date(data.list[6].dt*1000 - offset)).calendar());
        $('#icon7').html('<img width="70" height="70" src="icons/'+ data.list[6].weather[0].icon +'.png" />');
        $('#temperature7').html(Math.round(data.list[6].temp.day) + '&deg;C');
        $('#condition7').html(data.list[6].weather[0].description); 
		
    };

    function showError(msg){
        $('#error').html('Виникла помилка: ' + msg);
    }
});


/*
{"timestamp":1441311886949,"data":
	{"city":{"id":693665,"name":"Sknyliv","coord":{"lon":23.950001,"lat":49.799999},"country":"UA","population":0},
	"cod":"200","message":0.0163,"cnt":16,"list":[
	{"dt":1441274400,"temp":{"day":17,"min":14.63,"max":17,"night":14.63,"eve":17,"morn":17},"pressure":1002.84,"humidity":77,"weather":[{"id":801,"main":"Clouds","description":"трохи хмарно","icon":"02n"}],"speed":1.26,"deg":65,"clouds":12},
	{"dt":1441360800,"temp":{"day":16.49,"min":13.89,"max":21.11,"night":13.89,"eve":20.49,"morn":15.64},"pressure":999.79,"humidity":100,"weather":[{"id":502,"main":"Rain","description":"сильний дощ","icon":"10d"}],"speed":5.03,"deg":98,"clouds":92,"rain":16.23},
	{"dt":1441447200,"temp":{"day":16.84,"min":12.98,"max":18.58,"night":14.63,"eve":18.58,"morn":12.98},"pressure":1002.72,"humidity":93,"weather":[{"id":501,"main":"Rain","description":"помірний дощ","icon":"10d"}],"speed":2.46,"deg":209,"clouds":92,"rain":6.93},
	{"dt":1441533600,"temp":{"day":13.52,"min":10.73,"max":14.23,"night":10.73,"eve":14.23,"morn":13.06},"pressure":993.15,"humidity":99,"weather":[{"id":501,"main":"Rain","description":"помірний дощ","icon":"10d"}],"speed":6.31,"deg":308,"clouds":92,"rain":8.6},
	{"dt":1441620000,"temp":{"day":13.4,"min":10.27,"max":15.4,"night":10.27,"eve":13.8,"morn":10.51},"pressure":999.34,"humidity":80,"weather":[{"id":500,"main":"Rain","description":"легка злива","icon":"10d"}],"speed":8.71,"deg":249,"clouds":48},
	{"dt":1441706400,"temp":{"day":15.89,"min":9.07,"max":15.89,"night":9.07,"eve":12.3,"morn":11},"pressure":998.45,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"легка злива","icon":"10d"}],"speed":6.69,"deg":283,"clouds":49,"rain":2.25},
	{"dt":1441792800,"temp":{"day":15.84,"min":8.58,"max":15.84,"night":8.58,"eve":11.69,"morn":10.56},"pressure":1003.69,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"помірний дощ","icon":"10d"}],"speed":5.53,"deg":302,"clouds":46,"rain":3.9},
	{"dt":1441879200,"temp":{"day":16.94,"min":5.96,"max":16.94,"night":5.96,"eve":11.62,"morn":10.55},"pressure":1008.48,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"легка злива","icon":"10d"}],"speed":2.43,"deg":352,"clouds":41,"rain":0.4},
	{"dt":1441965600,"temp":{"day":17.03,"min":5.95,"max":17.03,"night":5.95,"eve":11.41,"morn":11.76},"pressure":1004.89,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"легка злива","icon":"10d"}],"speed":2.61,"deg":16,"clouds":34,"rain":1.75},
	{"dt":1442052000,"temp":{"day":15.27,"min":6.47,"max":15.27,"night":6.47,"eve":10.34,"morn":7.91},"pressure":1002.63,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"легка злива","icon":"10d"}],"speed":5.13,"deg":121,"clouds":0},
	{"dt":1442138400,"temp":{"day":15.54,"min":8.76,"max":15.54,"night":8.76,"eve":11.46,"morn":9.41},"pressure":999.83,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"легка злива","icon":"10d"}],"speed":6.27,"deg":129,"clouds":65,"rain":2.48},
	{"dt":1442224800,"temp":{"day":14.4,"min":8.55,"max":14.4,"night":8.55,"eve":12.07,"morn":9.71},"pressure":1002.06,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"легка злива","icon":"10d"}],"speed":5.22,"deg":46,"clouds":77,"rain":0.98},
	{"dt":1442311200,"temp":{"day":17.62,"min":4.74,"max":17.62,"night":4.74,"eve":10.8,"morn":9.69},"pressure":1010.15,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"чисте небо","icon":"01d"}],"speed":3.69,"deg":90,"clouds":0},
	{"dt":1442397600,"temp":{"day":18.15,"min":7.19,"max":18.15,"night":7.19,"eve":11.7,"morn":9.23},"pressure":1009.2,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"чисте небо","icon":"01d"}],"speed":3.59,"deg":122,"clouds":0},
	{"dt":1442484000,"temp":{"day":20.16,"min":10.06,"max":20.16,"night":12.64,"eve":13.29,"morn":10.06},"pressure":1003.98,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"чисте небо","icon":"01d"}],"speed":3.83,"deg":267,"clouds":37},
	{"dt":1442570400,"temp":{"day":16.91,"min":12.04,"max":16.91,"night":12.04,"eve":12.99,"morn":12.93},"pressure":993.05,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"помірний дощ","icon":"10d"}],"speed":5.57,"deg":245,"clouds":97,"rain":6.63}]}}
*/