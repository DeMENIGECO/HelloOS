function openApp(src){
  let win = document.createElement("div");
  win.className = "window";

  let frame = document.createElement("iframe");
  frame.src = src;

  win.appendChild(frame);
  document.body.appendChild(win);

  drag(win);
}

function drag(el){
  let isDown=false, offX, offY;

  el.onmousedown = e=>{
    isDown=true;
    offX=e.offsetX;
    offY=e.offsetY;
  };

  document.onmouseup=()=> isDown=false;

  document.onmousemove=e=>{
    if(!isDown) return;
    el.style.left = e.pageX-offX+"px";
    el.style.top = e.pageY-offY+"px";
  };
}
