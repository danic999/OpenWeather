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
            "x-rapidapi-key": "7e09d4c43amshea491446bb7f80ap1afe1djsna012c7dc92d3"
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
            hrs[i].innerHTML ="<strong>"+ s + ":00</strong>";}
            setIcon(data.list[summer].weather[0].icon);
            dimgs[i].setAttribute("src",iconTemp);


     })
    .catch(err =>"" );
    });
    