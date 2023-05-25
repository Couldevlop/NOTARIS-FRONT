// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  //defaultauth: "fackbackend",
  defaultauth: "firebase",
  firebaseConfig: {
    apiKey: "AIzaSyAuvhSnLjSWDJC5ZzVwfPckphNtL0i3MuA",
    authDomain: "notaris-af3c1.firebaseapp.com",
    databaseURL:
      "https://notaris-af3c1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "notaris-af3c1",
    storageBucket: "notaris-af3c1.appspot.com",
    messagingSenderId: "532734828844",
    appId: "1:532734828844:web:494ccb40ed233e3f894c89",
    measurementId: "",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
