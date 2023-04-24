
function Weather(){
    var city = document.getElementById("text").
    value

    var url= "http://api.weatherstack.com/current/.json?key=d4751444ae93120e51e1747db4e695e6&q"+city

    fetch(url)
    .then(response => {
        response.json()
        .then(data => {
            console.log(data)

            document.getElementById("hum").innerText = ""
            document.getElementById("wea").innerText = ""
            document.getElementById("wind").innerText = ""
            document.getElementById("weather").innerText = ""
            document.getElementById("location").innerText = ""

        })
    })



}