const menu=document.getElementById("menu");

StartIcons.forEach(app=>{

 let div=document.createElement("div");
 div.className="item";
 div.innerHTML=app.icon+" "+app.name;

 div.onclick=()=>{
   parent.UI.openWindow(app.app);
 };

 menu.appendChild(div);

});
