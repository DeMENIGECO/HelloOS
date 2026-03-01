Kernel.registerService("search", {

  searchApps(query){
    return Kernel.apps.filter(a =>
      a.name.toLowerCase().includes(query.toLowerCase())
    );
  }

});
