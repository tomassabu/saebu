import React, { Component } from 'react';
import hare from './bilder/hare.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

<div className="container-fluid bg-1 text-center">
  <h3>morn morn morn jeg heter tomas</h3>
  <img src={require('./bilder/flodhest.png')} className="img-responsive img-circle margin" alt="Forsidebilde" width="350" height="350" />
</div>

<div className="container-fluid bg-2 text-center">
  <h4 className="margin">Bilder</h4>
  <p>Jeg har tegnet masse bilder, de dukker kanskje opp her. </p>
</div>

<div className="container-fluid bg-3 text-center">
  <div className="row">
    <div className="col-sm-4">
      <p>Bilde av en harepus.</p>
      <img src={hare} className="img-responsive margin" alt="Image2" />
    </div>
    <div className="col-sm-4">
      <p>Bilde av en krokodille som leker med en badeball.</p>
      <img src={require('./bilder/krokodille.png')} className="img-responsive margin" alt="Image3" />
    </div>
    <div className="col-sm-4">
      <p>Bilde av en and som står foran en bygning som er, for eksempel, en pengebinge.</p>
      <img src={require('./bilder/and.png')} className="img-responsive margin" alt="Image4" />
    </div>
  </div>
</div>

        <footer className="container-fluid bg-4 text-center">
          <p> Mer kommer </p>
        </footer>
      </div>
    );
  }
}

export default App;
