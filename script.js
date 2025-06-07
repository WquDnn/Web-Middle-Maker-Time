fetch('http://api.weatherapi.com/v1/forecast.json?key=5d8b0b5d6fb24500869132736253105&q=London&aqi=no&days=3')
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector(".city").innerHTML = data.location.name
    let temp = document.querySelector(".temp").innerHTML = data.current.temp_c
     let humidity = document.querySelector(".humidity").innerHTML = data.current.humidity
     let cloud = document.querySelector(".cloud").innerHTML = data.current.cloud
     let pres = document.querySelector(".precip_in").innerHTML = data.current.precip_in
     let feelslike = document.querySelector(".feelslike_c").innerHTML = data.current.feelslike_c;


      console.log(feelslike)
  
     }




     
   )

