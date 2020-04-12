

document.getElementById("activity_heading").style.visibility='hidden';
document.getElementById("type_heading").style.visibility='hidden';
document.getElementsByClassName("participants_text")[0].style.visibility='hidden';
const base_url = 'https://www.boredapi.com/api/activity/';
console.log(base_url);



function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };
function fetchData(){
fetch(base_url).then(response => response.json()).then(res => {
   console.log(res);
    console.log(res.activity);
    console.log(res.type);
    console.log(res.participants);
    document.getElementById("activity_heading").style.visibility='visible';
document.getElementById("type_heading").style.visibility='visible';
document.getElementsByClassName("participants_text")[0].style.visibility='visible';
    document.getElementById("activity_text").innerHTML = res.activity;
    document.getElementById("type_text").innerHTML = res.type;
    document.getElementsByClassName("participants_text")[1].innerHTML = res.participants;
});
};

window.addEventListener('onload', async e => {
  await fetchTrending();

  if ('serviceWorker' in navigator) {
  try {
  navigator.serviceWorker.register('/sw.js', {scope: '/'});
  console.log('Service Worker registered');

  } catch (error) {
  console.log('Service Worker failed');

  }
  }
  });






