
console.log(store.getters.redirect)
var config = {
    userStore: new Oidc.WebStorageStateStore({store: window.localStorage})
  }
      var mgr = new Oidc.UserManager(config);
      
   //   alert(store.getters.redirect)
      mgr.signinRedirectCallback().then(function (user) {
        if(user){
         
        }
       
        window.location.href = '/';
      }).catch(function (err) {
        console.log(err);
      });