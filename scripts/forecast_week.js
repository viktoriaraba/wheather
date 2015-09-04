 $(function(){
    getWeatherData('ua', dataReceived, showError);

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; 
        var city = data.city.name;
        var country = data.city.country;
    
        $('#location').html(city + ', <b>' + country + '</b>');
 $('#day1').html(moment(new Date(data.list[0].dt*1000 - offset)).calendar());
        $('#icon1').html('<img width="100" height="101" src="icons/'+ data.list[0].weather[0].icon +'.png" />');
        $('#temperature1').html(Math.round(data.list[0].temp.day) + '&deg;C');
        $('#condition1').html(data.list[0].weather[0].description);
        
        $('#day2').html(moment(new Date(data.list[1].dt*1000 - offset)).calendar());
        $('#icon2').html('<img width="100" height="101" src="icons/'+ data.list[1].weather[0].icon +'.png" />');
        $('#temperature2').html(Math.round(data.list[1].temp.day) + '&deg;C');
        $('#condition2').html(data.list[1].weather[0].description);        
            
        $('#day3').html(moment(new Date(data.list[2].dt*1000 - offset)).calendar());
        $('#icon3').html('<img width="100" height="101" src="icons/'+ data.list[2].weather[0].icon +'.png" />');
        $('#temperature3').html(Math.round(data.list[2].temp.day) + '&deg;C');
        $('#condition3').html(data.list[2].weather[0].description);    
        
        $('#day4').html(moment(new Date(data.list[3].dt*1000 - offset)).calendar());
        $('#icon4').html('<img width="100" height="101" src="icons/'+ data.list[3].weather[0].icon +'.png" />');
        $('#temperature4').html(Math.round(data.list[3].temp.day) + '&deg;C');
        $('#condition4').html(data.list[3].weather[0].description);    
        
        $('#day5').html(moment(new Date(data.list[4].dt*1000 - offset)).calendar());
        $('#icon5').html('<img width="100" height="101" src="icons/'+ data.list[4].weather[0].icon +'.png" />');
        $('#temperature5').html(Math.round(data.list[4].temp.day) + '&deg;C');
        $('#condition5').html(data.list[4].weather[0].description);    
        
        $('#day6').html(moment(new Date(data.list[5].dt*1000 - offset)).calendar());
        $('#icon6').html('<img width="100" height="101" src="icons/'+ data.list[5].weather[0].icon +'.png" />');
        $('#temperature6').html(Math.round(data.list[5].temp.day) + '&deg;C');
        $('#condition6').html(data.list[5].weather[0].description);    
        
        $('#day7').html(moment(new Date(data.list[6].dt*1000 - offset)).calendar());
        $('#icon7').html('<img width="100" height="101" src="icons/'+ data.list[6].weather[0].icon +'.png" />');
        $('#temperature7').html(Math.round(data.list[6].temp.day) + '&deg;C');
        $('#condition7').html(data.list[6].weather[0].description); 
		
    };
	  function showError(msg){
        $('#error').html('Виникла помилка: ' + msg);
    }
});