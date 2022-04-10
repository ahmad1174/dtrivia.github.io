function fetchData(){
  fetch(base_url).then(response => response.json()).then(res => {
    console.log(res);
      document.getElementById("activity_heading").style.visibility='visible';
  document.getElementById("type_heading").style.visibility='visible';
  document.getElementsByClassName("participants_text")[0].style.visibility='visible';
      document.getElementById("activity_text").innerHTML = res.activity;
      document.getElementById("type_text").innerHTML = res.type;
      document.getElementsByClassName("participants_text")[1].innerHTML = res.participants;
  });
  };


  const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/drivia.github.io",
        "/drivia.github.io/index.html",
        "/drivia.github.io/style.css",
        "/drivia.github.io/script.js",
      ])
    );
  });
  

