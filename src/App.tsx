import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExclusiveEvent from './pages/ExclusiveEvent';
import UnreleasedMusic from './pages/UnreleasedMusic';
import Merch from './pages/Merch';
import Fundraiser from './pages/Fundraiser';
import VirtualEvent from './pages/VirtualEvent';
import FestivalTickets from './pages/FestivalTickets';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exclusive-event" element={<ExclusiveEvent />} />
            <Route path="/unreleased-music" element={<UnreleasedMusic />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/fundraiser" element={<Fundraiser />} />
            <Route path="/virtual-event" element={<VirtualEvent />} />
            <Route path="/festival-tickets" element={<FestivalTickets />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;