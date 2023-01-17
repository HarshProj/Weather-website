const API_KEY=`14951c93f3d11e8ac8bed96dd90e8bc7`
const signs={
    Clear:'&#x2600;',
    Rain:'&#x1F327;',
    Clouds:'&#x2601;',
    Thunderstorm:'&#x26C8;',
    Snow:'&#x26C4;',
    Mist:'&#x1F32B;',
    Haze:'&#x2601;',
    undefined:"&#x26C5;"
    
}
// let hi=JSON.parse(signs)
// console.log(signs.hi)
const gettemperature=()=>{
    // console.log("clicked")
    const city=document.getElementById("cityname").value
    // console.log(city)
    
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
    .then((res)=>{
        // console.log(res.status)
        return res.json()
    })
    .then(data=>displaytemperature(data))
}
const setinnertext=(id,text)=>{
    const citychange=document.getElementById(id)
    citychange.innerHTML=text
    
}
const displaytemperature=temperature =>{
    console.log(temperature)
    setinnertext("city",temperature.name)
    setinnertext("weather",temperature.weather[0].main)
    const celsius=Math.round((parseInt(temperature.main.temp)-273.14))
    const conver=celsius.toString()
    console.log(conver)
    setinnertext("temp",conver)
    const le=temperature.weather[0].main
    // console.log(signs[le],"here comes it")
    setinnertext("symbols",signs[le])
    background(celsius);
}
const background=a=>{
    if(a<10){
        const bg=document.getElementById("bod").style.background="url('./img3.jpg')"
        const bag=document.getElementById("bod").style.backgroundSize="cover"
    }
    else{
        const bg=document.getElementById("bod").style.background="url('./img1.jpg') no-repeat"
        const bag=document.getElementById("bod").style.backgroundSize="cover"

    }
}