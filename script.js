fetch('http://api.weatherapi.com/v1/forecast.json?key=5d8b0b5d6fb24500869132736253105&q=kyiv&aqi=no&days=3')
   .then(res => res.json())
   .then(data => {
      console.log(data)
      document.querySelector(".weat").innerHTML = "Waether today - " + data.location.name
      document.querySelector(".city").innerHTML = data.location.name
      let temp = document.querySelector(".temp").innerHTML = data.current.temp_c + "℃"
      let humidity = document.querySelector(".humidity").innerHTML = data.current.humidity + "%"
      let cloud = document.querySelector(".cloud").innerHTML = data.current.cloud + "%"
      let pres = document.querySelector(".precip_in").innerHTML = data.current.precip_in + "%"
      let feelslike = document.querySelector(".feelslike_c").innerHTML = data.current.feelslike_c + "℃"
      
      document.querySelector(".stan").innerHTML = data.current.condition.text + `<img src="${data.current.condition.icon}">`

      if (humidity <= 40 && cloud <= 70 && pres == 0 && temp >= 30) {
         document.body.style.background = "linear-gradient(rgb(151, 234, 234) 60%, rgba(240, 239, 239, 0.975))"
         document.querySelector(".box").style.background = "url(https://cikavosti.com/wp-content/uploads/2015/01/24-01-15-foto-600x400-11.jpg)"
         console.log("Сонячно")
      } else if (cloud >= 70 && humidity >= 40 && pres <= 20) {
        
         document.body.style.background = "linear-gradient(rgb(110, 157, 157) 60%, rgba(240, 239, 239, 0.975))"
         document.querySelector(".box").style.background = "url(https://media.acc.cv.ua/news/article/2019/02/02/41015/xwBR5Yr1tYrfgygXB3mA.w575.jpg)"
         console.log("Хмарно")
      } else {
        
         document.body.style.background = "linear-gradient(rgb(176, 228, 228) 60%, rgba(240, 239, 239, 0.975))"
         document.querySelector(".box").style.background = "url(https://konkurent.ua/media/cache/71/95/71956ce3219d48d638ca06a70004d460.webp)"
         console.log("Мінлива хмарність")
      }


   })

