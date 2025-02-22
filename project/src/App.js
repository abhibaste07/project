import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import Landing from './Components/Landing';
import PostAuction from './Components/PostAuction';
import AuctionItem from './Components/AuctionItem';
import l1 from "../src/Assets/l1.png";


import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
        <img src={l1} alt="BidBazaar Logo" width="50rem" height="auto" />
          <h1>BidBazaar</h1>
          <nav>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/signin" className="nav-link">Signin</Link>
            <Link to="/" className="nav-link">Landing</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/postauction" className="nav-link">Post Auction</Link>
            <Link to="/AuctionItem" className="nav-link">AuctionItem</Link>

          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/postauction" element={<PostAuction />} />
            <Route path="/auctionitem" element={<AuctionItem />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Signup App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;