Kernel.registerService("files", {

  files:["notes.txt","todo.txt","photo.png"],

  list(){
    return this.files;
  }

});
