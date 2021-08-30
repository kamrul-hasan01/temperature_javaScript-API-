const loading = document.getElementById('loading')
loading.style.display = 'none'
document.getElementById('error-message').style.display = 'none';
const search = () => {
    const infoCont = document.getElementById('info-cont')
    infoCont.innerHTML = ""
    loading.style.display = 'block'
    const input = document.getElementById('input')
    inputValue = input.value;
    input.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=b230fd0235b747dd07cedc5802301c22`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(error => displayError(error))


}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displayData = data => {
    console.log(data)
    loading.style.display = 'none'
    const infoCont = document.getElementById('info-cont')
    const temp = parseInt(data.main.temp - 273)
    const feelTemp = parseInt(data.main.feels_like - 273);
    infoCont.innerHTML = `   
    <h2 class="mb-5 fw-bold fs-2 text-white"> ${data.name}  ${data.sys.country} </h2>

    <p class=" mb-0 fw-bold fs-1 text-white"> <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"
            alt=""></img> ${temp}<SUP>O</SUP>C</p>
        <p class="mb-0 fw-bold fs-6 text-white">Feels like ${feelTemp}<SUP>O</SUP>C. ${data.weather[0].main}. Calm</p>
        <p class="mb-0 text-white">Humidity: ${data.main.humidity}% Visibility: ${data.visibility / 1000}.0 km</p>`



}

