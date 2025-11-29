import React, { Suspense, lazy, useEffect, useState } from 'react'; 
import styled, { keyframes } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Main from './components/Main'; 
import LoginPage from './components/LoginPage'; 
const PatientPage = lazy(() => import('./components/PatientPage'));
const DoctorPage = lazy(() => import('./components/DoctorPage'));
const PharmacistPage = lazy(() => import('./components/PharmacistPage'));
const AdminPage = lazy(() => import('./components/AdminPage'));

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- ENTRY ANIMATION STYLES ---
const fadeUp = keyframes`
  0% { opacity: 0; transform: translateY(8px) scale(0.98); filter: blur(6px); }
  35% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  100% { opacity: 0; transform: scale(1.05); filter: blur(2px); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(8, 13, 27, 0.95));
  z-index: 9999;
  pointer-events: none;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const LogoCard = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  color: white;
  animation: ${fadeUp} 900ms ease forwards;
`;

const BrandName = styled.div`
  font-weight: 800;
  font-size: 28px;
  letter-spacing: 0.4px;
  @media (max-width: 600px) { font-size: 20px; }
`;

const SubText = styled.div`
  color: rgba(255,255,255,0.85);
  font-size: 14px;
  @media (max-width: 600px) { font-size: 12px; }
`;

function EntryOverlay({ onDone }) {
  useEffect(() => {
    const t = setTimeout(() => {
      onDone();
    }, 900); // matches animation duration
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <Overlay>
      <LogoCard>
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#0F172A"/>
          <path d="M6 12h12M6 8h12M6 16h12" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <BrandName>MediCare Connect</BrandName>
        <SubText>Welcome — loading your workspace</SubText>
      </LogoCard>
    </Overlay>
  );
}

function App() {
  const [showEntry, setShowEntry] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('entry_animation') === 'true') {
        setShowEntry(true);
        // Remove the flag so it won't show again on reload unless set by login
        sessionStorage.removeItem('entry_animation');
      }
    } catch (err) {
      // ignore
    }
  }, []);

  return (
    <>
      <GlobalStyle /> 
      {showEntry && <EntryOverlay onDone={() => setShowEntry(false)} />}
      <Router>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/login" element={<LoginPage />} />
            <Route path="/patient" element={<PatientPage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/pharmacist" element={<PharmacistPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
export default App;