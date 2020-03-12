const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f59d62f3e48c1c4189bb5cf8537a7639&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}