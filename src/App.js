// import React from 'react';

// import { Footer, Header, Nav, Restaurant, Specials, Testimonial } from './components';
// import './App.css';

// const App = () => {
//   return (
//     < div className="App">
//       <div className="page">
//         <Nav />
//         <Header />
//       </div>
//       <Specials />
//       <Testimonial />
//       <Restaurant />
//       <Footer />
//     </div>
//   )
// }

// export default App;



// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom"; import { Footer, Header, Nav, Restaurant, Specials, Testimonial } from './components';
// import './App.css';

// import Reservation from './components/reservation/Reservation';
// import OrderOnline from './components/orderonline/OrderOnline';
// import Login from './components/login/Login';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <div className="page">
//           <Nav />
//           <Header />
//           <Specials />
//           <Testimonial />
//           <Restaurant />
//         </div>
//         <Routes>
//           <Route path="/reservation" component={Reservation} />
//           <Route path="/orderonline" component={OrderOnline} />
//           <Route path="/login" component={Login} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import { Footer, Header, Nav, Restaurant, Specials, Testimonial } from './components';
// import './App.css';

// import Reservation from './components/reservation/Reservation';
// import OrderOnline from './components/orderonline/OrderOnline';
// import Login from './components/login/Login';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <div className="page">
//           <Nav />
//           <Header />
//           <Specials />
//           <Testimonial />
//           <Restaurant />
//         </div>
//         <Routes>
//           <Route path="/reservation" element={<Reservation />} />
//           <Route path="/orderonline" element={<OrderOnline />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Footer, Header, Nav, Specials, Testimonial } from './components';
// import './App.css';

// import Reservation from './components/reservation/Reservation';
// import OrderOnline from './components/orderonline/OrderOnline';
// import Login from './components/login/Login';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <div className="page">
//           <Nav />
//           <Header />
//           <Specials />
//           <Testimonial />
//           <Routes>
//             <Route path="/reservation" element={<Reservation />} />
//             <Route path="/orderonline" element={<OrderOnline />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Footer, Header, Nav, Restaurant, Specials, Testimonial } from './components';
// import './App.css';

// import Reservation from './components/reservation/Reservation';
// import OrderOnline from './components/orderonline/OrderOnline';
// import Login from './components/login/Login';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Nav />
//         <div className="page">
//           <Header />
//           <Specials />
//           <Testimonial />
//           <Restaurant />
//           <Routes>
//             <Route path="/reservation" element={<Reservation />} />
//             <Route path="/orderonline" element={<OrderOnline />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav, Footer } from './components';
import { Header, Restaurant, Specials, Testimonial } from './components';

import './App.css';

import Reservation from './components/reservation/Reservation';
import OrderOnline from './components/orderonline/OrderOnline';
import Login from './components/login/Login';
import About from './components/about/About';
import Menu from './components/menu/Menu';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="page">
    <Header />
    <Specials />
    <Testimonial />
    <Restaurant />
  </div>
);

export default App;