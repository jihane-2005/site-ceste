import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Header';
import Accueil from './Accueil';
import Propos from './Propos';
import Inscriptionn from './Inscriptionn';
import Activites from './Activites';
import Footer from './Footer';
function App() {
  return (
    <div className="App"  style={{ paddingTop: '100px' }}>
      <BrowserRouter>
      <Header/>
      <Routes>
             <Route path="/" element={<Accueil />} />
             <Route path="/Propos" element={<Propos />} />
             <Route path="/Activites" element={<Activites />} />
             <Route path="/Inscriptionn" element={<Inscriptionn />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
