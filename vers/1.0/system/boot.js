const taskbar = document.getElementById("taskbar");

function addStartButton(){
  let btn=document.createElement("button");
  btn.innerText="Start";

  btn.onclick=()=>{
    let old=document.getElementById("startMenuFrame");

    if(old){
      old.remove();
      return;
    }

    let frame=document.createElement("iframe");
    frame.src="system/startmenu/startmenu.html";
    frame.id="startMenuFrame";

    frame.style.position="absolute";
    frame.style.bottom="45px";
    frame.style.left="5px";
    frame.style.border="none";
    frame.style.zIndex="999";

    document.body.appendChild(frame);
  };

  taskbar.appendChild(btn);
}

function addDockApp(name,icon,link){
  let btn=document.createElement("button");
  btn.innerHTML=icon;
  btn.title=name;

  btn.onclick=()=>UI.openWindow(link);

  taskbar.appendChild(btn);
}

function boot(){

  addStartButton();

  addDockApp("Finder","📁","apps/finder.html");
  addDockApp("Browser","🌐","apps/browser.html");
  addDockApp("Terminal","💻","apps/terminal.html");
  addDockApp("Settings","⚙️","apps/settings.html");

}

boot();
