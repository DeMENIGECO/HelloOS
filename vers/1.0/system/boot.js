const desktop = document.getElementById("desktop");

function addIcon(name, icon, app){
  let div = document.createElement("div");
  div.className="icon";
  div.innerHTML = icon + "<span>"+name+"</span>";
  div.onclick = ()=>UI.openWindow(app);
  desktop.appendChild(div);
}

function boot(){

  addIcon("Search","🔎","apps/search.html");
  addIcon("Finder","📁","apps/finder.html");
  addIcon("Notes","📝","apps/notes.html");
  addIcon("Calculator","🧮","apps/calculator.html");
  addIcon("Clock","⏰","apps/clock.html");
  addIcon("Calendar","📅","apps/calendar.html");
  addIcon("Paint","🎨","apps/paint.html");
  addIcon("Terminal","💻","apps/terminal.html");
  addIcon("Music","🎵","apps/music.html");
  addIcon("Settings","⚙️","apps/settings.html");
  addIcon("Browser","🌐","apps/browser.html");
  addIcon("About","ℹ️","apps/about.html");

}

boot();
