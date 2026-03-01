const UI = {

  openWindow(src){

    let win = document.createElement("div");
    win.className="window";

    let frame = document.createElement("iframe");
    frame.src = src;

    win.appendChild(frame);
    document.body.appendChild(win);

    this.drag(win);
  },

  drag(el){
    let down=false,x,y;

    el.onmousedown=e=>{
      down=true;
      x=e.offsetX;
      y=e.offsetY;
    };

    document.onmouseup=()=>down=false;

    document.onmousemove=e=>{
      if(!down) return;
      el.style.left=e.pageX-x+"px";
      el.style.top=e.pageY-y+"px";
    };
  }

};
