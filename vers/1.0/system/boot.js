const desktop = document.getElementById("desktop");

function addIcon(name, icon, app){
  let div = document.createElement("div");
  div.className="icon";
  div.innerHTML = icon+"<span>"+name+"</span>";
  div.onclick=()=>UI.openWindow(app);
  desktop.appendChild(div);
}

function addStartButton(){
  let btn=document.createElement("button");
  btn.id="startButton";
  btn.innerText="Start";
  btn.onclick=()=>{
    if(!document.getElementById("startMenuFrame")){
      let frame=document.createElement("iframe");
      frame.src="system/startmenu/startmenu.html";
      frame.id="startMenuFrame";
      document.body.appendChild(frame);
    }else{
      document.getElementById("startMenuFrame").remove();
    }
  };
  document.getElementById("taskbar").appendChild(btn);
}

function boot(){

addIcon("Search","🔎","apps/search.html");
addIcon("Finder","📁","apps/finder.html");
addIcon("Notes","📝","apps/notes.html");

addStartButton();
}

boot();
