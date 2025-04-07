import TopBar from './components/TopBar';
import AboutSection from './components/AboutSection';
import BottomNav from './components/BottomNav';
import ContactSection from './components/ContactSection';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const hide = () =>{
    setShow(!show)
  }
  return (
    <div className="flex flex-col bg-gray-100 height-100%">
      <TopBar hide={hide}/>
      {!show &&<AboutSection />}
      {show && <ContactSection />}
      <BottomNav />
    </div>
  );
}

export default App;
