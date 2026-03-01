const Kernel = {
  apps: [],
  services: {},

  registerApp(app){
    this.apps.push(app);
  },

  registerService(name, service){
    this.services[name] = service;
  },

  getService(name){
    return this.services[name];
  }
};
