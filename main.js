



let dan;
function makeDay(data){
switch (data) {
    case 0:
      dan = "Nedjelja";
      break;
    case 1:
      dan = "Ponedjeljak";
      break;
    case 2:
       dan = "Utorak";
      break;
    case 3:
      dan = "Srijeda";
      break;
    case 4:
      dan = "Četvrtak";
      break;
    case 5:
      dan = "Petak";
      break;
    case 6:
      dan = "Subota";
      break;
  }
}

var d=new Date("2019-10-05 03:00:00")
var c= d.getDay();
var input = document.querySelector('#input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('#temp');
var desc = document.querySelector('#desc');
var clouds = document.querySelector('#clouds');
var button= document.querySelector('#submit');
var icon = document.querySelector('#weather_icon');
var iconTemp;
var setdescription;
var pressure=document.querySelector('#pressure');
var wind=document.querySelector('#wind');
var country_flag = document.querySelector('#country_flag');


var day0 = document.querySelector('#day0');
var day1 = document.querySelector('#day1');
var day2 = document.querySelector('#day2');
var day3 = document.querySelector('#day3');
var day4 = document.querySelector('#day4');


var temp0 = document.querySelector('#temp0');
var temp1 = document.querySelector('#temp1');
var temp2 = document.querySelector('#temp2');
var temp3 = document.querySelector('#temp3');
var temp4 = document.querySelector('#temp4');
const temps= [temp0,temp1,temp2,temp3,temp4];

var img_forecast_0= document.querySelector("#img3_0");
var img_forecast_1= document.querySelector("#img3_1")
var img_forecast_2= document.querySelector("#img3_2")
var img_forecast_3= document.querySelector("#img3_3")
var img_forecast_4= document.querySelector("#img3_4")
var forecast_imgs= [img_forecast_0,img_forecast_1,img_forecast_2,img_forecast_3,img_forecast_4];

//var dayTemps=[dayTemp0,dayTemp1,dayTemp2,dayTemp3,dayTemp4];
const days= [day0,day1,day2,day3,day4];
function setIcon(data){
    switch(data) {
        case "01d":
          iconTemp="/imgs/01d.png";
          break;
        case "02d":
            iconTemp="/imgs/02d.png";
            break;
        case "03d":
            iconTemp="/imgs/03d.png";
            break;
        case "04d":
          iconTemp="/imgs/04d.png";
          break;
      
        case "09d":
            iconTemp="/imgs/09d.png";
            break;
        case "10d":
            iconTemp="/imgs/10d.png";
            break;
        case "11d":
            iconTemp="/imgs/11d.png";
            break;
         case "13d":
            iconTemp="/imgs/13d.png";
            break;
         case "50d":
            iconTemp="/imgs/50d.png";
            break;
           case "01n":
          iconTemp="/imgs/01n.png";
          break;
        case "02n":
            iconTemp="/imgs/02n.png";
            break;
        case "03n":
            iconTemp="/imgs/03n.png";
            break;
        case "04n":
          iconTemp="/imgs/04n.png";
          break;
      
        case "09n":
            iconTemp="/imgs/09n.png";
            break;
        case "10n":
            iconTemp="/imgs/10n.png";
            break;
        case "11n":
            iconTemp="/imgs/11n.png";
            break;
         case "13n":
            iconTemp="/imgs/13n.png";
            break;
         case "50n":
            iconTemp="/imgs/50n.png";
            break;

                    default:
                      iconTemp="/imgs/na.png";
                      
          // code block
      };
    }

    function setDesc(data){ 
      switch(data) {
          case 200-210:
            setdescription="Slaba kiša i grmljavina";
            break;
          case 211-232:
            setdescription="Jaka kiša i grmljavina";
            break;
          case 500:
            setdescription="Slaba kiša";
            break;
          case 501:
            setdescription="Umjerena kiša";
            break;
          case 502-510:
            setdescription="Jaka kiša";
            break;
          case 511:
            setdescription="Ledena kiša";
            break;
          case 520-531:
            setdescription="Pljuskovi";
            break;  
          case 600:
            setdescription="Slab snijeg";
            break;
          case 601:
            setdescription="Umjeren snijeg";
            break;
          case 602:
            setdescription="Jak snijeg";
            break;  
          case 611-620:
            setdescription="Susnježica";
            break;
          case 701:
            setdescription="Maglica";
            break;
          case 711:
            setdescription="Zagađen zrak";
            break;
          case 721:
            setdescription="Izmaglica";
            break;
          case 741:
            setdescription="Magla";
            break;
          case 800:
            setdescription="Vedro";
            break;
          case 801:
            setdescription="Djelomično oblačno";
            break;
          case 802:
            setdescription="Pretežno oblačno";
            break;
          case 803:
            setdescription="Umjereno oblačno";
            break;
          case 804:
            setdescription="Potpuna oblačnost";
            break;
           
      default: setdescription="";};}
  

button.addEventListener('click', function(name){
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+ input.value, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "907c687552mshce51ee782c26b91p1dce6cjsn33596477b75e"
        }
    })
.then(response => response.json())
.then(data => {
    var tempValue =Math.round( data.main.temp-273) + "°C"; 
    var nameValue = data.name;
    setIcon(data.weather[0].icon);
    icon.setAttribute("src",iconTemp);
    
    
  main.innerHTML = nameValue;
  temp.innerHTML = "<strong>"+tempValue+"</strong>";
  input.value ="";
  var description=data.weather[0].id;
  setDesc(description);
  desc.value=description;
  desc.innerHTML=setdescription;
  var windvalue=data.wind.speed;
  wind.innerHTML="<img src='./imgs/windsock.png' width='50px'> "+windvalue+" m/s";
  var pressurevalue=data.main.pressure;
  pressure.innerHTML="<img src='./imgs/barometer.png' width='50px'> "+pressurevalue+" hPa";


  fetch("https://countryflagsapi.com/svg/"+data.sys.country, {
	"method": "GET",
	
})
.then(data => {
  console.log(data.url);
  country_flag.setAttribute("src",data.url);

})
.catch(err => {
	console.error(err);
});

  
})

.catch(err => alert("Wrong city name!"));
})



button.addEventListener('click', function(name){
    fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q="+input.value, {
	"method": "GET",
	"headers": {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "907c687552mshce51ee782c26b91p1dce6cjsn33596477b75e"
	}
})
.then(data => data.json())
.then(data => {
   
    for(i=0;i<5;i++){
    let summer=8*i;
    let d= new Date(data.list[summer].dt_txt);
	  let s = d.getDay();
    makeDay(s);
    days[i].innerHTML="<strong>" +dan+ "</strong>";
    temps[i].innerHTML="<strong>" +Math.round(data.list[summer].main.temp -273)+ "°C</strong>"
        setIcon(data.list[summer].weather[0].icon);
    forecast_imgs[i].setAttribute("src",iconTemp);


    

    }

    
    
})
.catch(err => {
	console.error(err);
});

})

var dtemp1=document.querySelector('#daily_temp1');
var dtemp2=document.querySelector('#daily_temp2');
var dtemp3=document.querySelector('#daily_temp3');
var dtemp4=document.querySelector('#daily_temp4');
var dtemp5=document.querySelector('#daily_temp5');
var dtemps=[dtemp1,dtemp2,dtemp3,dtemp4,dtemp5];
var hr1=document.querySelector('#hr');
var hr2=document.querySelector('#hr1');
var hr3=document.querySelector('#hr2');
var hr4=document.querySelector('#hr3');
var hr5=document.querySelector('#hr4');
var hrs=[hr1,hr2,hr3,hr4,hr5];


var dimg1=document.querySelector('#dimg0');
var dimg2=document.querySelector('#dimg1');
var dimg3=document.querySelector('#dimg2');
var dimg4=document.querySelector('#dimg3');
var dimg5=document.querySelector('#dimg4');
var dimgs=[dimg1,dimg2,dimg3,dimg4,dimg5];
var button= document.querySelector('#submit');
button.addEventListener('click', function(name){
    fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q="+input.value, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "907c687552mshce51ee782c26b91p1dce6cjsn33596477b75e"
        }
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for(var i=0; i<5; i++){
            var temp1Value =+Math.round( data.list[i].main.temp-273) + "°C";
            dtemps[i].innerHTML = "<strong>"+temp1Value+"</strong>";
            var dayValue = data.list[i].dt_txt;
            var d=new Date(dayValue);
            var s=d.getHours();
            hrs[i].innerHTML ="<strong>"+ s + ":00</strong>";
            setIcon(data.list[i].weather[0].icon);
            dimgs[i].setAttribute("src",iconTemp);
          }

     })
    .catch(err =>"" );
    });
    

