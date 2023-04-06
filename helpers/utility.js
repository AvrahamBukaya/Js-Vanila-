const URL = "https://api.ipgeolocation.io/ipgeo?apiKey=";
import { API_KEY as secret_key } from './info.js';
import { prefixData } from './countriesPrefix.js';


const getPrefixByCountryName = (countryName) => {
    return prefixData.find(item => item.name.toLowerCase() === countryName.toLowerCase()).dial_code;

}



const getData = async () => {

    const res = await fetch(`${URL}${secret_key}`)
    const data = await res.json();
    console.log();
    return data;
}


export { getData, getPrefixByCountryName }