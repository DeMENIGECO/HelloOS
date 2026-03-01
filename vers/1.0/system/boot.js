const taskbar = document.getElementById("taskbar");

/* =========================
   START MENU
========================= */

function addStartButton(){

  let btn=document.createElement("button");
  btn.id="startBtn";
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
    frame.style.zIndex="9999";

    document.body.appendChild(frame);
  };

  taskbar.appendChild(btn);
}

/* =========================
   DOCK
========================= */

function addDockApp(name,icon,link){

  let btn=document.createElement("button");
  btn.className="dockApp";
  btn.innerHTML=icon;
  btn.title=name;

  btn.onclick=()=>Kernel.openApp(link);

  taskbar.appendChild(btn);
}

/* =========================
   CLOCK
========================= */

function addClock(){

  let clock=document.createElement("div");
  clock.id="clock";

  setInterval(()=>{
    clock.innerText=new Date().toLocaleTimeString();
  },1000);

  taskbar.appendChild(clock);
}

/* =========================
   BOOT LOADER
========================= */

async function boot(){

  console.log("Booting HelloOS...");

  await Kernel.loadUser();
  await Kernel.loadSettings();

  document.body.dataset.theme =
    Kernel.userData.theme || "dark";

  /* start */
  addStartButton();

  /* dock apps */
  addDockApp("Finder","📁","apps/finder.html");
  addDockApp("Browser","🌐","apps/browser.html");
  addDockApp("Terminal","💻","apps/terminal.html");
  addDockApp("Settings","⚙️","apps/settings.html");

  /* clock */
  addClock();

  console.log("Boot complete",Kernel.info());
}

/* =========================
   START SYSTEM
========================= */

boot();
