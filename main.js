import { getData, getPrefixByCountryName } from './helpers/utility.js';

const img_elem = document.getElementById('flag');
const prefix_elem = document.getElementById('prefix');
const main_elem = document.querySelector('form');
const message_elem = document.querySelector('.container_message');
// const btn_send = document.querySelector('.sender');




(() => {

    getData().then(res => {
        const { country_flag: flag, country_name } = res;
        img_elem.src = flag;
        prefix_elem.textContent = getPrefixByCountryName(country_name);
    })



})();


const specificStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space - between'
}

main_elem.addEventListener('submit', (e) => {
    e.preventDefault();
    main_elem.style.display = 'none';
    Object.assign(message_elem.style, specificStyle);


})

// getCountriesPrefixDial().then((value) => {
//     console.log(value);
// })

// getData().then(res => {
//     const { country_flag: icon } = res;
//     img_elem.src = icon;
// }
// );

