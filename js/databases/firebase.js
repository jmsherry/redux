import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyCpgo5JuJzGUQpMIloXmHZjQeNPQ_BTqXc',
  authDomain: 'snooker-c85c5.firebaseapp.com',
  databaseURL: 'https://snooker-c85c5.firebaseio.com',
  storageBucket: '',
};

const fbdb = firebase.initializeApp(config);

export default fbdb;
