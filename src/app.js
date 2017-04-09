import React, { Component } from 'react';
import { View, Image } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner, Card } from './components/common';
import LoginForm from './components/LoginForm';

//app, highest level
class App extends Component {
  state = { loggedIn: null };

  //before anything else, remain logged in if logged in, logged out if logged out
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCprZ6Nm8x1gsTjZu7lBsvSb2QCRHOa4uo',
      authDomain: 'authentication-6c3d5.firebaseapp.com',
      databaseURL: 'https://authentication-6c3d5.firebaseio.com',
      projectId: 'authentication-6c3d5',
      storageBucket: 'authentication-6c3d5.appspot.com',
      messagingSenderId: '1025557633326'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });

  }

//rendure card section and button
renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <CardSection><Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button></CardSection>
      );
    case false:
      return <LoginForm />;
    default:
      return <CardSection style={styles.cardSectionStyle}><Spinner style={styles.spinnerStyle} size="large" /></CardSection>;
  }
}

//render the header
  render() {
    return (
      <View style={styles.fillStyle}>
          <Header headerText="Illuminice" />
          <Card>
            {this.renderContent()}
          </Card>
          <Image
            style={styles.imageStyle}
            source={require('../illuminice.png')}
          />
      </View>
    );
  }
}

//styling
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardSectionStyle: {
    flex: 1
  },
  imageStyle: {
    flex: 1
  },
  fillStyle: {
    flex: 1,
    backgroundColor: '#1F1F1F'
  }
};

export default App;
