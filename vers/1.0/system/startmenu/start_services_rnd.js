function randomTip(){
 const tips=[
  "Benvenuto in HelloOS",
  "Sistema pronto",
  "Kernel attivo",
  "Servizi caricati"
 ];
 return tips[Math.floor(Math.random()*tips.length)];
}

console.log(randomTip());
