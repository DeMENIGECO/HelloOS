window.Notify = {
 send(msg){
   let box=document.createElement("div");
   box.innerText=msg;

   box.style.position="fixed";
   box.style.right="10px";
   box.style.bottom="60px";
   box.style.background="#333";
   box.style.color="white";
   box.style.padding="10px";
   box.style.borderRadius="8px";
   box.style.zIndex="9999";

   document.body.appendChild(box);

   setTimeout(()=>box.remove(),3000);
 }
};
