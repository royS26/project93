var firebaseConfig = {
      apiKey: "AIzaSyA7-__omgL_nr69NcsK-bLBCFmUj9sK7is",
      authDomain: "kwitterapp-58308.firebaseapp.com",
      databaseURL: "https://kwitterapp-58308-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-58308",
      storageBucket: "kwitterapp-58308.appspot.com",
      messagingSenderId: "698059041507",
      appId: "1:698059041507:web:6805f70b8fc363de5873d6"
    };

     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
