const audio = new Audio();
audio.src = "";
audio.loop = true;

window.BackgroundMusic = {
 start(src){
   audio.src = src;
   audio.play();
 },
 stop(){
   audio.pause();
 }
};
