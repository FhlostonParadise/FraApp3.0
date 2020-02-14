window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/15bec9f17d8c07f811126b571a92e5ef/${lat},${long}`;

            fetch(api)
            .then(response =>{
                return response.json();
            })

            .then(data =>{
                const { temperature, summary, icon } = data.currently;
                //Set DOM Elements from API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                //Set Icon
                setIcons(icon, document.querySelector(".skycon"));
            });

        });
    }
    
    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "#99ccff"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});
    
