import React, { Component } from 'react';
import tegninger from './bilder';
import tomas from './bilder/tomas1.png';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="container-fluid bg-1 text-center">
          <h3>morn morn morn jeg heter tomas</h3>
          <img src={tomas} className="img-responsive img-circle margin" alt="Forsidebilde" width="350" height="350" />
        </div>

        <div className="container-fluid bg-2 text-center">
          <h4 className="margin">Bilder</h4>
          <p>Jeg har tegnet masse bilder. De kan du finne under.</p>
          <p>Jeg liker å bruke tegneprogrammet paint når jeg tenger.</p>
          <p>Denne nettsiden er laget i React.</p>
        </div>

        <div className="container-fluid bg-3 text-center gallery-grid">

          {tegninger.map(t => (
              <div key={t.id}>
                {/*<p>{t.navn}</p>*/}
                <img src={t.bilde} className="img-responsive margin gridTegning" alt={t.navn} />
              {/* <p>{t.beskrivelse}</p> */}
              </div>
          )
          )}
        </div>

        <footer className="container-fluid bg-4 text-center">
          <p> Mer kommer </p>
        </footer>
      </div>
    );
  }
}

export default App;
