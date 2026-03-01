const Kernel = {

  version:"1.0",
  apps:[],
  services:{},
  userData:{},
  settings:{},

  /* =========================
     REGISTRAZIONI
  ========================== */

  registerApp(app){
    this.apps.push(app);
  },

  registerService(name,service){
    this.services[name]=service;
  },

  getService(name){
    return this.services[name];
  },

  /* =========================
     USER + CONFIG LOADER
  ========================== */

  async loadUser(){
    try{
      const r = await fetch("usr/home/user.json");
      this.userData = await r.json();
      console.log("User loaded",this.userData);
    }catch{
      console.warn("User load failed");
    }
  },

  async loadSettings(){
    try{
      const r = await fetch("usr/config/settings.json");
      this.settings = await r.json();
      console.log("Settings loaded",this.settings);
    }catch{
      console.warn("Settings load failed");
    }
  },

  /* =========================
     APP MANAGEMENT
  ========================== */

  openApp(path){
    if(window.UI)
      UI.openWindow(path);
  },

  /* =========================
     SYSTEM INFO
  ========================== */

  info(){
    return {
      version:this.version,
      apps:this.apps.length,
      services:Object.keys(this.services).length,
      user:this.userData.username || "unknown"
    };
  }

};
