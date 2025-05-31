fetch('http://api.weatherapi.com/v1/current.json?key=5d8b0b5d6fb24500869132736253105&q=London&aqi=no')
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector(".city").innerHTML = data.location.name
    let temp = document.querySelector(".temp").innerHTML = data.current.temp_c
     let humidity = document.querySelector(".humidity").innerHTML = data.current.humidity
     let cloud = document.querySelector(".cloud").innerHTML = data.current.cloud
     let pres = document.querySelector(".precip_in").innerHTML = data.current.precip_in
    
     if (humidity <= 40 && cloud <= 70 && pres == 0 && temp >= 30) {

        console.log("Сонячно")
     }else if (cloud >= 70 && humidity >= 40 && pres <= 20 ) {
        console.log("хмарно")
     }else {
        console.log("da ya")
     }

     
})

