import Oidc from 'oidc-client';
import 'babel-polyfill';

const settings = {
  userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
  authority: 'http://localhost:52954/',
  client_id: 'vuejsclient',
  redirect_uri: window.location.origin + '/callback.html',
  response_type: 'id_token token',
  scope: 'openid profile address roles identityserver4api country subscriptionlevel offline_access',
  post_logout_redirect_uri: window.location.origin + '/logout.html',
  silent_redirect_uri: window.location.origin + '/silent-renew.html',
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
}
/** metadata:{
    issuer: "http://localhost:52954",
    jwks_uri: "http://localhost:52954/.well-known/openid-configuration/jwks",
    authorization_endpoint: "http://localhost:52954/connect/authorize",
    token_endpoint: "http://localhost:52954/connect/token",
    userinfo_endpoint: "http://localhost:52954/connect/userinfo",
    end_session_endpoint: "http://localhost:52954/connect/endsession",
    check_session_iframe: "http://localhost:52954/connect/checksession",
  } */
var mgr = new Oidc.UserManager(settings)

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.INFO;

mgr.events.addUserLoaded(function (user) {  
  console.log('New User Loaded：', arguments);
  console.log('Acess_token: ', user.access_token)
});

mgr.events.addAccessTokenExpiring(function () {
  console.log('AccessToken Expiring：', arguments);
   
});

mgr.events.addAccessTokenExpired(function () {
  console.log('AccessToken Expired：', arguments);  
   var r = confirm('Press OK to continue session')
   if(r==true){
     mgr.signinSilent()
   }else{
  // alert('Session expired. Going out!');
  mgr.signoutRedirect().then(function (resp) {
    console.log('signed out', resp);
  }).catch(function (err) {
    console.log(err)
  })}
});

mgr.events.addSilentRenewError(function () {
  console.error('Silent Renew Error：', arguments);
});

mgr.events.addUserSignedOut(function () {
  alert('Going out!');
  console.log('UserSignedOut：', arguments);  
  mgr.signoutRedirect().then(function (resp) {
    console.log('signed out', resp);
  }).catch(function (err) {
    console.log(err)
  })
});

export default class AuthService {

  // Renew the token manually
  renewToken () {
    let self = this
    return new Promise((resolve, reject) => {
      mgr.signinSilent().then(function (user) {
        if (user == null) {
          self.signIn(null)
        } else{
          return resolve(user)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }

  // Get the user who is logged in
  getUser () {
    let self = this
    return new Promise((resolve, reject) => {
      mgr.getUser().then(function (user) {
        if (user == null) {
          self.signIn()
          return resolve(null)
        } else{          
          return resolve(user)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }

  // Check if there is any user logged in
  getSignedIn () {
    let self = this
    return new Promise((resolve, reject) => {
      mgr.getUser().then(function (user) {
        if (user == null) {
          self.signIn()
          return resolve(false)
        } else{
          return resolve(true)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }

  // Redirect of the current window to the authorization endpoint.
  signIn() {
    mgr.signinRedirect({    
    }).catch(function (err) {
      console.log(err)
    })
   
  }
  signInPopup(){
    return new Promise((resolve, reject) => {
      mgr.signinPopup().then(function(user) {
          console.log(user);       
          return resolve(user.profile);
      })
      .catch(function(err) {
          console.log(err);
          return reject(err);
      });
  }); 
  }
  
  // Redirect of the current window to the end session endpoint
  signOut () {    
    mgr.signoutRedirect().then(function (resp) {
      console.log('signed out', resp);
    }).catch(function (err) {
      console.log(err)
    })
  }

  signOutPopup() {
    return new Promise((resolve, reject) => {
        mgr.signoutPopup().then(function() {
            console.log('signed out by popup');
            return resolve();
        }).catch(function(err) {
            return reject(err);
        });
    });
}
  // Get the profile of the user logged in
  getProfile () {
    let self = this
    return new Promise((resolve, reject) => {
      mgr.getUser().then(function (user) {
        if (user == null) {
          //self.signIn()
          return resolve(null)
        } else{          
          return resolve(user.profile)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }

  // Get the token id
  getIdToken(){
    let self = this
    return new Promise((resolve, reject) => {
      mgr.getUser().then(function (user) {
        if (user == null) {
          self.signIn()
          return resolve(null)
        } else{          
          return resolve(user.id_token)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }

  // Get the session state
  getSessionState(){
    let self = this
    return new Promise((resolve, reject) => {
      mgr.getUser().then(function (user) {
        if (user == null) {
          self.signIn()
          return resolve(null)
        } else{          
          return resolve(user.session_state)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }

  // Get the access token of the logged in user
  getAcessToken(){
    let self = this
    return new Promise((resolve, reject) => {
      mgr.getUser().then(function (user) {
        if (user == null) {
          self.signIn()
          return resolve(null)
        } else{          
          return resolve(user.access_token)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }

  // Takes the scopes of the logged in user
  getScopes(){
    let self = this
    return new Promise((resolve, reject) => {
      mgr.getUser().then(function (user) {
        if (user == null) {
          self.signIn()
          return resolve(null)
        } else{          
          return resolve(user.scopes)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }

  // Get the user roles logged in
  getRole () {
    let self = this
    return new Promise((resolve, reject) => {
      mgr.getUser().then(function (user) {
        if (user == null) {
          self.signIn()
          return resolve(null)
        } else{          
          return resolve(user.profile.role)
        }
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }
}
/*
  /** AUTH0
   * 'https://bildstudiotest01.auth0.com'
   * 'ontI3Rz67pkGa53JzJoECXj1WzCyVHok'
   * openid profile
   */
  
  
/** LOCAL SERVER
 * userStore: new Oidc.WebStorageStateStore(),  
  authority: 'http://localhost:52954/',
  client_id: 'vuejsclient',
  redirect_uri: window.location.origin + '/static/callback.html',
  response_type: 'id_token token',
  scope: 'openid profile address roles identityserver4api country subscriptionlevel offline_access',
  post_logout_redirect_uri: window.location.origin + '/index.html',
  silent_redirect_uri: window.location.origin + '/static/silent-renew.html',
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
 */
/** IDENTITY SERVER
 *  userStore: new Mgr.WebStorageStateStore({ store: localStorage}),
 authority: 'https://demo.identityserver.io/',
 client_id: 'implicit',
 redirect_uri: window.location.origin + '/public/callback.html',
 response_type: 'id_token token',
 scope: 'openid profile email api',
 post_logout_redirect_uri: window.location.origin + '/',
 silent_redirect_uri: window.location.origin + '/static/silent-renew.html',
 accessTokenExpiringNotificationTime: 10,
 automaticSilentRenew: true,
 filterProtocolClaims: true,
 loadUserInfo: true
 --------------------------------------------------------------------------------------
public static stsAuthority = 'https://demo.identityserver.io/';
   public static clientId = 'implicit';
   public static clientRoot = 'http://localhost:8080/';
   public static clientScope = 'openid profile email api';
 
   public static apiRoot = 'https://demo.identityserver.io/api/';
----------------------------------------------------------------------------------------
  public static stsAuthority = 'https://demo.identityserver.io/';
   public static clientId = 'implicit';
   public static clientRoot = 'http://localhost:8080';
   public static clientScope = 'openid profile email api';
 
   public static apiRoot = 'https://demo.identityserver.io/api/';

 */ //