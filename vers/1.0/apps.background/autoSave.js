setInterval(()=>{

 let data={
   time:new Date().toLocaleTimeString(),
   session:"running"
 };

 localStorage.setItem("helloos_autosave",JSON.stringify(data));

 console.log("AutoSaved");

},5000);
