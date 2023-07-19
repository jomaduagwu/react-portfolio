// import logo from './logo.svg'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import backgroundImage from './components/Assets/backgroundimgwhite.jpg';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

function App() {
  const [currentTab, setCurrentTab] = useState('about');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderTab = () => {
    switch (currentTab) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Project':
        return <Project />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container"
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <Header />
      <Navigation currentTab={currentTab} handleTabChange={handleTabChange} />
      {renderTab()}
      <Footer />
    </div>
  );
}
    // if (currentTab === 'About') {
    //   return <About />;
    // }
    // if (currentTab === 'Contact') {
    //   return <Contact />;
    // }
    // if (currentTab === 'Project') {
    //   return <Project />;
    // }
    // return <About />;
  
  // }
//   return (
//     <div>
//       <Header />
//       <Navigation />
//       <About />
//       <Project />
//       <Project />
//       <Contact />
//       <Footer />
//     </div>
   
//   );
// }

export default App;
