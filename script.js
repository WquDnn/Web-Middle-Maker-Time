let city = "Kyiv"
document.querySelector(".Today").classList.add("active")
function getWeather(city, day) {

   fetch(`https://api.weatherapi.com/v1/forecast.json?key=5d8b0b5d6fb24500869132736253105&q=${city}&aqi=no&days=3`)
      .then(res => res.json())
      .then(data => {
         console.log(data)
         if (data.error) {
            alertify.error(data.error.message)
            return
         }
         document.querySelector(".weat").innerHTML = "Weather today - " + data.location.name
         document.querySelector(".city").innerHTML = data.location.name
         let temp = document.querySelector(".temp").innerHTML = data.forecast.forecastday[day].day.avgtemp_c + "℃"
         let humidity = document.querySelector(".humidity").innerHTML = data.forecast.forecastday[day].day.avghumidity + "%"
         let maxwind_mph = document.querySelector(".maxwind_mph").innerHTML = data.forecast.forecastday[day].day.maxwind_mph + "%"
         let pres = document.querySelector(".precip_in").innerHTML = data.forecast.forecastday[day].day.totalprecip_in + "%"
         let maxtemp_c = document.querySelector(".maxtemp_c").innerHTML = data.forecast.forecastday[day].day.maxtemp_c + "℃"
         let mintemp_c = document.querySelector(".mintemp_c").innerHTML = data.forecast.forecastday[day].day.mintemp_c + "℃"
         let chanceofrain = document.querySelector(".chanceofrain").innerHTML = data.forecast.forecastday[day].day.daily_chance_of_rain + "%"
         let feelsLike1 = document.querySelector(".feelsLike").innerHTML = feelsLike(data.forecast.forecastday[day].day.avgtemp_c, data.forecast.forecastday[day].day.avghumidity / 100) + "℃"
         let tempnow = document.querySelector(".tempnow").innerHTML = data.current.temp_c + "℃"






         document.querySelector(".stan").innerHTML = data.current.condition.text + `<img src="${data.current.condition.icon}">`

         if (humidity <= 40 && pres == 0 && temp >= 30) {
            document.body.style.background = "linear-gradient(rgb(151, 234, 234) 60%, rgba(240, 239, 239, 0.975))"
            document.querySelector(".box").style.background = "url(https://cikavosti.com/wp-content/uploads/2015/01/24-01-15-foto-600x400-11.jpg)"
            console.log("Сонячно")
         } else if (humidity >= 40 && pres <= 20) {
            // if (humidity <= 40 && cloud <= 70 && pres == 0 && temp >= 30) {
            //    document.body.style.background = "linear-gradient(rgb(151, 234, 234) 60%, rgba(240, 239, 239, 0.975))"
            //    document.querySelector(".box").style.background = "url(https://cikavosti.com/wp-content/uploads/2015/01/24-01-15-foto-600x400-11.jpg)"
            //    console.log("Сонячно")
            // } else if (cloud >= 70 && humidity >= 40 && pres <= 20) {

            document.body.style.background = "linear-gradient(rgb(110, 157, 157) 60%, rgba(240, 239, 239, 0.975))"
            document.querySelector(".box").style.background = "url(https://media.acc.cv.ua/news/article/2019/02/02/41015/xwBR5Yr1tYrfgygXB3mA.w575.jpg)"
            console.log("Хмарно")
         } else {

            document.body.style.background = "linear-gradient(rgb(176, 228, 228) 60%, rgba(240, 239, 239, 0.975))"
            document.querySelector(".box").style.background = "url(https://konkurent.ua/media/cache/71/95/71956ce3219d48d638ca06a70004d460.webp)"
            console.log("Мінлива хмарність")
         }

         if (feelsLike1 == "Sunny") {

         }



      })
}


getWeather(city, 0)

document.querySelector(".Tomorrow").addEventListener("click", function (e) {
   document.querySelector(".tempnow")
   getWeather(city, 1)
   document.querySelectorAll(".buttons button").forEach(b => {
      b.classList.remove("active")
   })
   e.target.classList.add("active")

})

document.querySelector(".DAT").addEventListener("click", function (e) {
   getWeather(city, 2)
   document.querySelectorAll(".buttons button").forEach(b => {
      b.classList.remove("active")
   })
   e.target.classList.add("active")
})

document.querySelector(".Today").addEventListener("click", function (e) {
   getWeather(city, 0)
   document.querySelectorAll(".buttons button").forEach(b => {
      b.classList.remove("active")
   })
   e.target.classList.add("active")
})


document.querySelector("#input").addEventListener("input", (e) => {
   fetch(`https://api.weatherapi.com/v1/search.json?key=5d8b0b5d6fb24500869132736253105&q=${e.target.value}`).then(res => res.json()).then(data => {
      document.querySelector("#list").innerHTML = data.map(city => `<option value="${city.name}"></option>`).join("")
   })
})

document.querySelector("#search").addEventListener("click", () => {

   city = document.querySelector("#input").value
   getWeather(city, 0)

})


function feelsLike(temp, humidity) {
   let T = temp * 9 / 5 + 32;
   let RH = humidity;

   let HI = -42.379 + 2.04901523 * T + 10.14333127 * RH
      - 0.22475541 * T * RH - 0.00683783 * T * T
      - 0.05481717 * RH * RH + 0.00122874 * T * T * RH
      + 0.00085282 * T * RH * RH - 0.00000199 * T * T * RH * RH;

   if (HI < T) return temp;

   return Math.round((HI - 32) * 5 / 9);
}



