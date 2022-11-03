const CITY_DATA_URL = "https://geocode.xyz/";
const CITY_DATA_JSON_SUFFIX = "?json=1";

async function getCityData(cityName){
    const request = await fetch(`${CITY_DATA_URL}${cityName}${CITY_DATA_JSON_SUFFIX}`);
    const response = await request.json();
    console.log(response.latt, response.longt);
}
getCityData("chicago");

