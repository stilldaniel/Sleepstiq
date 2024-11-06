// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CustomerSection from './components/CustomerSection/CustomerSection';

function App() {
  return (
    <Router>
<div className="App">
  <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/about" element={<HeroSection />} />
    <Route path="/shop" element={<CustomerSection />} />
  </Routes>
</div>
</Router>


  );
}

export default App;