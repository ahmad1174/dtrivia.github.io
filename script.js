
let month=Math.abs(Math.floor(Math.random() * ((12 - 1) + 1) ) + 1);
let day=Math.abs(Math.floor(Math.random() * ((31 - 1) + 1) ) + 1);
let month_arr = [];
month_arr[0] = "No month available : 0th index";
month_arr[1] = "January";
month_arr[2] = "February";
month_arr[3] = "March";
month_arr[4] = "April";
month_arr[5] = "May";
month_arr[6] = "June";
month_arr[7] = "July";
month_arr[8] = "August";
month_arr[9] = "September";
month_arr[10] = "October";
month_arr[11] = "November";
month_arr[12] = "December";
//console.log('Month :'+month_arr[month]);
//console.log("Month : "+month);
//console.log("Day : "+day);
const base_url = 'https://www.boredapi.com/api/activity/';
const month_day_url = month+'/'+day+'/date';
const url = base_url+month_day_url;
console.log(base_url);

let drivia = document.getElementById('drivia_text');
let day_html = document.getElementById('day_text');
day_html.innerHTML = day;
let month_html = document.getElementById('month_text');
let month_name = month_arr[month];
month_html.innerHTML = month_name;
fetch(base_url).then(response => response.json()).then(res => {
    console.log(res);
    console.log(res.activity);
    drivia_text.innerHTML =res.activity;

});

//const city = document.getElementById('city');
//const temperature = document.getElementById('temp');
/*
 fetch(url).then(response => response.json()).then(json => {
    console.log(json.name);
    console.log(json.main.temp);
    console.log(json.weather[0].icon);

    let weather_link = json.weather[0].icon;
    let city_name = json.name;
    let city_temp = json.main.temp;

    if (weather_link == undefined) {
        ico.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABOFBMVEX///8Akc//zEL/ikfMzMzIyMjp6en/om0ZnNT/mmL/oGr/1mgAj84Al9IAdqv/i0MDd6j/lFf/rIC7g3MAkNS0jYv/hkX0i1Tun3kAi83PcTv/yz//omf/h0D/0EL/7+f2mGT19fX/to7/1F/QnYIBh8Hj4+P/xWD/0FKZgHrWh1vv+Pz/rFX/02b/yjba2trF5PPh8fn/mE3S6/a32e6o0+t8vuL/mk3/vFz/zGT/kEn/sVdnuOD/0lj/pFHugULvr0D/yrL/9NnVfTz/+er6wkHmnj7/gjVDn8+gvs4io9dIrtyOzOqomaG1mpp3vuLckWyCl6b+rUb4uELsm0DnjEDcjz3ddT4wjLEAcKv/vZzmpIL/6rv/3Yj/5abpw7LLZSmzhHv/28psqsuQutC+ztf/eySnwc2g8zpgAAAMsElEQVR4nO2dC1fbRhqGLdtcM+bSZpWVE5QKimHjgG3ABgyBBAJxbLdkNw10s012t8Dy///Bzki+yNLcNPPJFj5+z+lJS7CkR+93Gc2M3FRqookmmmiiiSaaaKKJJppoPLX6ctRXELNW5+bHG3F1bmZ+ZpwRXcBxRsSAc5nlmfmxDVQXMEMQx9TFDuD4IvYAxxXRB+gizo0b4gDgOLoYABw/xBBgZsyaBgVwvBCpgI8kUIuV3fIeVrVaJX+UdyvF8C8xABOOWNmr1lrNnJELyjCarVp1r9L/VSZgUgO1uIvZZgnMLEvuX2LOXWIoBzCJLpbb2DgOW4Cz2WpzAROGWKkezw7CdcLSp1zQ259fcAEThFiptoycH80wEEIGTe7PO5xCQBfxxcgRi9VWzxkC50d7ypEhAZgEF8s4OLt4IcOe/vJXjuYlAD3EH9hajRevWG127MuF8Qjhry/m2ZIC9JoGWz/EyVdpd+3DoUlNOkw4w5YcIEFkK07CylWHj4XnEs5xJAmIETkHmYmLr1jz+KjB2Sf8y4o0hppWluPiy+UE9nUIF2MmzMRDWJXxLyKhOaiREpZbknzShIRo/+ToYGPjEGvj4Oj1fl2WEp6weCXNJ0eISU4ODp8EtbXxui4DCU645waoHJ8MoVk/2QjRdXV4tCOEBCYsHuck6os0oWnuHGz5iNY68v1o40TACEtYbhJAaT4RobnTs2/tzWYa6zkR+ZfNzR7mIZ8RlPDKiBCgQkKz3uFb20x3uPzCP+lSbp1wEAEJK62IBnIJzcyRd/lv0mG6HmUXcqPOZIQjLMtXUAlCc/+wax8Lr6MO42sWIhhh2zUwqliEpmfgpoCuY6TLuJGhM0IRkhoa1UAmoZlxM3BTZN8g49YOFRGGsEhSMBcpAzmEZv3Qyz9JQDdWyS2hFhwQwgppEtHxGITmzlYUA/020pIRgnB3ViUFWYTmDqkwkfA8vaEjAhCWFWoom9B18I0CYPr5JhVRn1AHkEJYJ4DRInQAMZSL2oRlxRrDIjyMnII+xDRG3DdhCfUAQ4TmgQYgEW4asB6SIqMBGCQ0X2sCkq6xYQISVjQBg4R15RzsiuTiYLXRIizqFBkKoXmo1CYGEXHTqEMRFpuaDgYISYzqAmLEtcE41SHEY1FNQAN98hHiRiE11BYp0DLUl22u9AGNn5cH6qhmEna0+WTLT6i8MlWFAHzhI6xDxCgRTkW/iTOKa/27Oc0i4wLOLPstBIlRoieHA4RKiKTKAAD6F1+erIHEaNptGT4TFZdQcZWBBcSFFIiPIA6UUyXEKjQg7oVgFrom7mQGEKNu1qzoJ2EQcB/QQqwnR+YgYkQXW9plNLgJwTwCtJCU08PBoVtExLZ2jIZ2WZiHYIXU0+DQLSJiBR4wswMbpHjsFnjaj7QHTjtGw4DmCWiQYm1uBJ+E5V3UrqOUjUDmAXCQptNboekMWcRiDIAZcwMa8PlaPXgS2UC9yunFKH0rF3SQ4moanh+WQ8Tj0RgA6zBPFX5t0uZOZQK1pdfr6YDmPngaptMHtAlwMWJZL0YZuw3NExueMFhMu4iCAVxTq8ywtlOar4dFKHSxTN9iqAmIx2wxEF4w1hP5iFoWsjfEmv8YHiG/ou5pWIj+zt7xO1RCjDjH3Fbb0rHw6S/M7ZTDJcwsMwF3tbLQsP7G3HgxVMKVnwoswmMtwPWlBRai+Rs8of2ZQbjyUzbLQKzoWWgssRFj6If2WzohAcxO0wnbmjMXiI34JQbCSyohDzClP0HKRDyNgfA3GiEXcE8bkO3i6QU84RcWoMOqMy3tSXw24ulncBPtm4gOpiraM6QcRPMSnPAiTMgHTFX1g9QVHfEamtB+exoREAcpDCHdxXNgwLR9HRWwAgTIQLyBTkQ7HxEQLEiJKIinwIlof76JCJhqwQFSEYHD1L4+DQMy2wRRERKQFqh54DDNhwG5DuKHe/1myEW8Aa2m9tt8RMDUFSQfURDxNA85rLHP/Wm4KAGYakIThlzMA9Ya+3Pel4aLr34XA1Zgg5SGCGmifZ73Ay4t3YsAU3vQfH3Ela7gTBywEAMuLN2LAFNX4BYSxIWFf/64PLP69R3R1399ukhvb28DTO8PWHi6tLS03hYStuCD1LJmjz/uDrao92d/fHujDYkLqS8Lny0sraNjEWBRbzUmjIesRrvCONnZ97XtbR3Ci7y/VTxbWDfQLOVbYQZUifY2k4jPQrVd7vnOvmkYaX/xW5h5ZuEzGiLCKiAgsnJV0fmwvqcVGe3LAQszz56Sk5YFp2vDEVpGW4Kvw6gC+Dk/YGGHsCo42TEUIbKuJPmw3n+LbqONk3DwqcIjFJWaJhChlRNFy6DONiPbeJ4PPBh6hE3BmWAKDbKERTukbxERQ4Adwhz/NBULAtCwRMlA0/dIkXoeSMIuoWHxk6MMQYgMfodg6Uwa0aYBdgn5J4doFuKmy9J7yRcR7YvzYJXxEfILQFXfQ3VAjCj1Gg1pExTALuEe9xT67VAHUArRJo2eBtgl5NcA7XaIcqxBqCQi+4V1X4RSATuEqMY9ge6TBUJqRaavM27TsNPEwHCR8RPyG5VuwxckgYz+YCPa6bfnbMAuYYt7eM1nJ4sfIXJitf4uHzVCfYQN7tH1JmnQLABgKkWrNrZ94cYn08A+IX/Ypkmom4Segqlo2+kLzz6OgT1Cg3+btYalIDFK9G3b7gvTXXfwuHw9D/mEOoAIAQGmUl+uLy8v3+J/rntwQr4eIX/orTOkAaijXf37P/mgbtj5F4lQw0OgMuPpVWQ8WUKNPAS00Gfizc2pFJ2PMLZKA2lhKhXafg9FqN4tLPFkcxR9VfiWRamOrzymQUjnkSKslx8YGItsSRE2lAn5o8HomqeauPjqR7b+KzMuVSYErTNE72gmktUljrx7fcs97q0yITAgNUzJ+iBP3pXccY97p9jywYOUFqYiQClC1Xka4EpKFKqmLuC6+FL4+XKvShhthltGf35QAjQs/ipwSTVKYXsF0csVJUDD4i/kT6tVGtAxaVfLSoAG4u6HSjlqgxrx2rKCZlaUAGcFhGoNUTCDp6bVFQVAUTtUbYgxlFJ/MY0AKCZUa4hKa00ivVtRADSsj4LDqrWLGJpFv11EAhQ1C9wuJJ8QUU9xE668wiPOddb/BSR0XTnmm04dTUuUGmRZVq7ROq7Vjluz5D+QYM1OmXDlw4fFT7/f3t4etxo5ciLxtTX4pRQXU0GpQZioVS37Gnxlr5aLx8P/LX/90/eCZLHcbmFIwfXdighTH3lHQBZq0YZ9u3oLTnS9pL3+uddCXCetB+Fx7zmft3K1OFCiqVIzeNVQvDexwBzVIKsGP/pUUbHGtBE1RIUGlxpGIiKrkQw+okqDwSiRhinnIzUGkHA31XBVpVcc9CAmTGVphNZsHP1AR7vUbEIliY+WKB3RaiYnQrui7YSVSUOciHehT1rwszAQClth3UkEacoJ9YsYpplg1AwmFMpKfS4buDexPMCDKBioqCGThrgjBsM0eTnYVWDPtnUnfNnClXM/GNtxjDmhtOePU2RMyaRhKlBNwRbn45F/Exe6lQtSHKb+0Xdik7AjX5yiB5leQeRk+x9LdIwS9eMU5fgvVvpV6o1NE9so+uqlFLqTDVLc9Ke6n4rl4R1WvW3NSPheXl9OtyU+Agt7JqJbuXbvqfTgfQp83TMOddbL0L18kPZMRLnkNvu+iu6DFGrI1xmiktswYlmOgJe77Rc9RLEQ1xrXxMS3Ck+kYWAL5euMqyx51Be8nJEUFa3oFuJxTXYWJfehIqAcim4hNvHBSviQtK9jZN1HaRWeCtlGLCtKcaht3Ua3EJt4/0gKDemIChYSE2+TP2TzVFaykJj4OEopftSfUrGQjL+BLyQ2ObLP9kGp3ZgRyInaC7tSiu1RyFG0EH8S8jJilPp1TgiTIvXrfCyJqH6dspNzo5b6daoW4WFL/ToLjyMRHXUPpx9HIhbUL9N5HKManauMNn01Imn5UHoM1bSgUxCnH0OY6gXaVPJrTUHPhVLyTWR9r7yknKmkZ2JJ9ekX7AAxy5nSHXjpHyFeZfUdKCU6TksABjjZBNfTacVJtuBREpuKzhTM3S8Jvjx6ZHKyWaAiIfp+7BEJA0J1a2cqibmIcxDuxuO7lbiKWoAE9AKilKRIdUrQqUMQNQeAkCpk4WuDi6i2hgWuafda4I9bwoE/lR355JRTwFcRUzx5NmZL06ODdKZJ/mHEuC6hkM32KIeN6UwXSt3Tx1kQvBAht3H46pw49oKH42QqOypN4eiJmc+DLGT793RYbFiloZY5x5kerkZdwyeaaKKJJppooomSoP8DNn/3h0FdWvIAAAAASUVORK5CYII=";

    } else {
        ico.src = weather_link;
    }

    if (city_name == '') {

        city.innerHTML = 'Karachi';
    } else {
        city.innerHTML = city_name;
    }

if (city_temp == ''){
    temperature.innerHTML = '25'+"<span>&#176;C</span>";
}
else {
    temperature.innerHTML = city_temp.toFixed(0)+"<span>&#176;C</span>";
}
});


*/



