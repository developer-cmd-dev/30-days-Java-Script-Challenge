console.log("Weather app")


 async function fetchApi(city) {
 try {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=524be9aa16744f41afb45846242803&q=${city}&aqi=no`) 
  const data = await response.json()
  return data
 } catch (error) {
  alert("Something Wrong! Enter correct City name.")
 }
   

  
  

    
}




const cityName = document.getElementById('cityName');
const cityRegion = document.getElementById('cityRegion')
const country = document.getElementById('cityCountry')
const weatherLogo = document.getElementById('weatherLogo')
const weatherCondition = document.getElementById('weatherCond')
const time = document.getElementById('time')
const windData = document.getElementById('windData')
const tempreature = document.getElementById('tempreature')
const humidityData = document.getElementById('humidityData')



async function handleWeatherData(city){

const data = await fetchApi(city)
let timedata = data.location.localtime
cityName.innerText = data.location.name
cityRegion.innerText = data.location.region
country.innerText = data.location.country
weatherLogo.src = `${data.current.condition.icon}`
weatherCondition.innerText = `${data.current.condition.text}`
time.innerText = timedata.slice(10)
windData.innerText = `${data.current.wind_kph} KPH`
humidityData.innerText = `${data.current.humidity}`
tempreature.innerText = `${data.current.temp_c}`


}



const input = document.getElementById('cityNameInput')
const searchCityCard = document.getElementById('searchCity')



function getUserInput(){
  let =city = input.value
  !input.value?alert("Please fill the input value"): handleWeatherData(city)
  input.value =""
}

