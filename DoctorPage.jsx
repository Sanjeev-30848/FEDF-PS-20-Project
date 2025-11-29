import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/GlobalStyles';

// Simple page container
const Page = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.backgroundLightGrey};
  padding: 30px 40px;
`;

// Reuse a centered container width
const Container = styled.div`
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;
`;

/* Header / top nav */
const TopNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Logo = styled.a`
  color: ${COLORS.primary};
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
`;

/* Title area */
const TitleArea = styled.section`
  margin: 18px 0 28px 0;
  color: ${COLORS.textDark};
`;

const DoctorTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 8px 0;
`;

const DoctorSubtitle = styled.p`
  margin: 0;
  color: #6B7280;
`;

/* Stats cards */
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 28px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StatLabel = styled.div`
  color: #6B7280;
  font-size: 0.95rem;
`;

/* Main content columns */
const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 24px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 1fr;
  }
`;

/* Today's schedule list */
const Panel = styled.div`
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.04);
`;

const PanelTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.05rem;
`;

const PanelSub = styled.p`
  margin: 0 0 16px 0;
  color: #6B7280;
  font-size: 0.95rem;
`;

/* Appointment item */
const AppointmentItem = styled.div`
  border: 1px solid ${COLORS.border};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const PatientInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(99,102,241,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.primary};
  font-weight: 700;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const PatientName = styled.div`
  font-weight: 700;
`;

const PatientMeta = styled.div`
  color: #6B7280;
  font-size: 0.9rem;
`;

/* Right column recent patients */
const RecentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RecentItem = styled.div`
  border: 1px solid ${COLORS.border};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tag = styled.span`
  background:${props => props.variant === 'red' ? '#FEF2F2' : props.variant === 'green' ? '#ECFDF5' : '#F3F4F6'};
  color: ${props => props.variant === 'red' ? '#B91C1C' : props.variant === 'green' ? '#059669' : '#374151'};
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
`;

/* Small action button */
const SmallButton = styled.button`
  border: none;
  padding: 8px 12px;
  background: #0f172a;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

/* Brand and BackLink for TopNav */
const Brand = styled.a`
  color: ${COLORS.primary};
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4B5563;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 8px;

  &:hover {
    color: ${COLORS.primary};
    background: rgba(0,0,0,0.03);
  }
`;

/* New: booking modal + toast styles */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalCard = styled.div`
  width: 540px;
  max-width: 94%;
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
`;

const Field = styled.div` display:flex; flex-direction:column; gap:6px; margin-bottom:8px; `;
const Input = styled.input` padding:10px; border-radius:8px; border:1px solid ${COLORS.border}; background:${COLORS.inputBg}; `;
const Select = styled.select` padding:10px; border-radius:8px; border:1px solid ${COLORS.border}; background:${COLORS.inputBg}; `;
const Textarea = styled.textarea` padding:10px; border-radius:8px; border:1px solid ${COLORS.border}; background:${COLORS.inputBg}; resize:vertical; min-height:70px; `;

const Toast = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #101827;
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.18);
  z-index: 10000;
`;

/* Sample data */
const initialAppointments = [
  { patient: 'Haindavi', reason: 'Hypertension Follow-up', time: '2024-10-25 10:00', mode: 'Virtual Consultation', status: 'confirmed', doctor: 'Dr. Kiran Chowdary Paturi' },
  { patient: 'Krishna Thej', reason: 'Chest Pain', time: '2024-10-25 11:30', mode: 'Initial Consultation', status: 'waiting', doctor: 'Dr. Sneha Reddy' },
  { patient: 'Lavanya', reason: 'Routine Check', time: '2024-10-25 13:30', mode: 'In-person', status: 'confirmed', doctor: 'Dr. Maneesha Chauhan' },
];

const doctors = [
  'Dr. Kiran Chowdary Paturi',
  'Dr. Sneha Reddy',
  'Dr. Maneesha Chauhan',
  'Dr. Ramesh Babu'
];

const recentPatients = [
  { name: 'Haindavi', note: 'Hypertension', last: '2024-09-20', state: 'stable' },
  { name: 'Krishna Thej', note: 'Anxiety', last: '2024-09-19', state: 'improving' },
  { name: 'Lavanya', note: 'Cholesterol', last: '2024-09-15', state: 'stable' },
];

// Add shared storage key near top
const LOCAL_KEY = 'app_appointments_v1';

const DoctorPage = () => {
  const raw = sessionStorage.getItem('user');
  const user = raw ? JSON.parse(raw) : { email: '', role: 'doctor', name: 'Dr. Sarah Wilson' };
  const displayName = user.name || (user.role === 'doctor' ? 'Dr. Sarah Wilson' : 'User');

  // Use persisted appointments when available, otherwise fall back to sample data
  const [appointments, setAppointments] = useState(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch (err) { /* ignore */ }
    return typeof initialAppointments !== 'undefined' ? initialAppointments : [];
  });

  // persist appointments when changed
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(appointments));
    } catch (err) { /* ignore */ }
  }, [appointments]);

  // Tab sync: update appointments when other tabs modify the same key
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== LOCAL_KEY) return;
      try {
        const newVal = e.newValue ? JSON.parse(e.newValue) : [];
        if (Array.isArray(newVal)) setAppointments(newVal);
      } catch (err) { /* ignore */ }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [patientName, setPatientName] = useState('');
  const [problem, setProblem] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('Female');
  const [datetime, setDatetime] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  // --- E-Prescription state for booking modal ---
  const [rxList, setRxList] = useState([]); // list of { id, name, dosage, qty, notes }
  const [rxName, setRxName] = useState('');
  const [rxDosage, setRxDosage] = useState('');
  const [rxQty, setRxQty] = useState('');
  const [rxNotes, setRxNotes] = useState('');
  const [rxEditingId, setRxEditingId] = useState(null);
  const [rxAlert, setRxAlert] = useState(''); // warning alert message for prescriptions

  const clearRxFields = () => {
    setRxName(''); setRxDosage(''); setRxQty(''); setRxNotes(''); setRxEditingId(null);
  };

  const addPrescription = (e) => {
    e?.preventDefault();
    if (!rxName.trim()) return;
    const item = {
      id: Date.now(),
      name: rxName.trim(),
      dosage: rxDosage.trim(),
      qty: rxQty ? Number(rxQty) : undefined,
      notes: rxNotes.trim()
    };
    setRxList(prev => [item, ...prev]);
    clearRxFields();
    setRxAlert('E‑prescription added — remember to review before connecting.');
    setTimeout(() => setRxAlert(''), 3500);
  };

  const startEditPrescription = (id) => {
    const it = rxList.find(r => r.id === id);
    if (!it) return;
    setRxEditingId(id);
    setRxName(it.name);
    setRxDosage(it.dosage || '');
    setRxQty(it.qty != null ? String(it.qty) : '');
    setRxNotes(it.notes || '');
  };

  const saveEditedPrescription = (e) => {
    e?.preventDefault();
    if (!rxEditingId) return;
    setRxList(prev => prev.map(r => r.id === rxEditingId ? {
      ...r,
      name: rxName.trim(),
      dosage: rxDosage.trim(),
      qty: rxQty ? Number(rxQty) : undefined,
      notes: rxNotes.trim()
    } : r));
    clearRxFields();
    setRxAlert('E‑prescription updated.');
    setTimeout(() => setRxAlert(''), 3000);
  };

  const deletePrescriptionFromList = (id) => {
    setRxList(prev => prev.filter(r => r.id !== id));
    if (rxEditingId === id) clearRxFields();
    setRxAlert('E‑prescription removed.');
    setTimeout(() => setRxAlert(''), 2500);
  };

  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => setToastMsg(''), 3500);
    return () => clearTimeout(t);
  }, [toastMsg]);

  // NEW: auto-open booking modal when arriving with ?book=true or #book
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const wantBook = params.get('book') === 'true' || window.location.hash === '#book';
      if (wantBook) {
        // open modal after small delay to ensure UI mounted
        setTimeout(() => openBookingModal(), 50);
        // remove query/hash so reload won't reopen it
        const newUrl = window.location.pathname + window.location.search.replace(/([?&])book=true(&|$)/, (m, p1, p2) => p2 ? p1 : '').replace(/[?&]$/, '');
        window.history.replaceState({}, '', newUrl);
      }
    } catch (err) {
      // ignore if URL parsing fails
    }
  }, []); // run once on mount

  const openBookingModal = () => {
    // prefill patientName if session user has a name
    setPatientName(user.name || '');
    setProblem('');
    setAge('');
    setSex('Female');
    setDatetime('');
    setSelectedDoctor(doctors[0]);
    // reset e-prescription for a fresh booking session
    setRxList([]);
    clearRxFields();
    setShowBookingModal(true);
  };

  const closeBookingModal = () => setShowBookingModal(false);

  const handleBookAppointment = (e) => {
    e.preventDefault();
    // basic validation
    if (!patientName.trim() || !problem.trim() || !datetime) return;
    const now = Date.now();
    const displayTime = new Date(datetime).toLocaleString();
    const newAppt = {
      id: now,
      patient: patientName.trim(),
      reason: problem.trim(),
      time: displayTime,
      mode: 'Booked',
      status: 'booked',
      doctor: selectedDoctor,
      age: age,
      sex: sex,
      createdAt: now,
      prescriptions: rxList // attach prescriptions to appointment
    };
    setAppointments(prev => [newAppt, ...prev]);

    setShowBookingModal(false);
    setToastMsg(`Appointment booked successfully for ${newAppt.patient} with ${newAppt.doctor} on ${displayTime}`);
  };

  return (
    <Page>
      <Container>

        <TopNav>
          <Brand href="/">MediCare Connect</Brand>
          <BackLink href="/">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </BackLink>
        </TopNav>

        <TitleArea>

          <DoctorSubtitle>Your Doctor Management Dashboard</DoctorSubtitle>
        </TitleArea>

        <StatsGrid>
          <StatCard>
            <div>
              <StatNumber>8</StatNumber>
              <StatLabel>Today's Appointments</StatLabel>
            </div>
            <div>
              {/* simple calendar icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M7 10h10v2H7zM7 14h7v2H7zM19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="#2563EB"/>
              </svg>
            </div>
          </StatCard>

          <StatCard>
            <div>
              <StatNumber>145</StatNumber>
              <StatLabel>Active Patients</StatLabel>
            </div>
            <div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M20 6H4v12h16V6zM8 10h8v2H8v-2z" fill="#10B981"/>
              </svg>
            </div>
          </StatCard>

          <StatCard>
            <div>
              <StatNumber>12</StatNumber>
              <StatLabel>Pending Prescriptions</StatLabel>
            </div>
            <div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 6v6c0 5 3.8 9.7 9 10 5.2-.3 9-5 9-10V6l-9-4z" fill="#FB923C"/>
              </svg>
            </div>
          </StatCard>

          <StatCard>
            <div>
              <StatNumber>95%</StatNumber>
              <StatLabel>Patient Satisfaction</StatLabel>
            </div>
            <div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#8B5CF6"/>
              </svg>
            </div>
          </StatCard>
        </StatsGrid>

        <Columns>
          <div>
            <Panel>
              <PanelTitle>Today's Schedule</PanelTitle>
              <PanelSub>Your appointments for today</PanelSub>

              {appointments.map((a, idx) => (
                <AppointmentItem key={idx}>
                  <PatientInfo>
                    <Avatar>{String(a.patient || '').split(' ').map(n => n[0]).slice(0,2).join('')}</Avatar>
                    <InfoText>
                      <PatientName>{a.patient}</PatientName>
                      <PatientMeta>{a.reason} • {a.doctor}</PatientMeta>
                      <PatientMeta>⏰ {a.time} - {a.mode}</PatientMeta>
                    </InfoText>
                  </PatientInfo>

                  <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                    <Tag variant={a.status === 'waiting' ? 'red' : (a.status === 'booked' ? 'green' : 'green')}>{a.status}</Tag>
                    <SmallButton type="button">View Details</SmallButton>
                  </div>
                </AppointmentItem>
              ))}

              {/* Book new appointment button */}
              <div style={{marginTop:12}}>
                <button
                  onClick={openBookingModal}
                  style={{width:'100%', border:'1px solid '+COLORS.border, background:'#0f172a', color:'#fff', padding:'14px 18px', borderRadius:10, fontWeight:700}}
                >
                  Connect with New Patient
                </button>
              </div>

            </Panel>
          </div>

          <aside>
            <Panel>
              <PanelTitle>Recent Patients</PanelTitle>
              <PanelSub>Patients you've seen recently</PanelSub>

              <RecentList>
                {recentPatients.map((p, i) => (
                  <RecentItem key={i}>
                    <PatientInfo>
                      <Avatar style={{backgroundColor: 'rgba(16,185,129,0.08)', color: '#059669'}}>{p.name.split(' ').map(n => n[0]).slice(0,2).join('')}</Avatar>
                      <InfoText>
                        <PatientName>{p.name}</PatientName>
                        <PatientMeta>{p.note} — Last visit: {p.last}</PatientMeta>
                      </InfoText>
                    </PatientInfo>

                    <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
                      <Tag variant={p.state === 'stable' ? 'green' : 'neutral'}>{p.state}</Tag>
                      <SmallButton type="button">View Records</SmallButton>
                    </div>
                  </RecentItem>
                ))}
              </RecentList>

              <div style={{textAlign:'center', marginTop:12}}>
                <button style={{border:'1px solid '+COLORS.border, background:'transparent', padding:'10px 14px', borderRadius:10}}>View All Patients</button>
              </div>
            </Panel>
          </aside>
        </Columns>

        {/* Booking modal */}
        {showBookingModal && (
          <ModalOverlay onClick={closeBookingModal}>
            <ModalCard onClick={(e)=>e.stopPropagation()}>
              <h3 style={{marginTop:0}}>Connect the appointment</h3>
               <p style={{marginTop:0, color:'#6B7280'}}>Select doctor and enter patient details</p>

               <form onSubmit={handleBookAppointment} style={{display:'flex', flexDirection:'column', gap:10}}>
                 <Field>
                   <label style={{fontSize:12, color:'#6B7280'}}>Doctor</label>
                   <Select value={selectedDoctor} onChange={(e)=>setSelectedDoctor(e.target.value)}>
                     {doctors.map(d => <option key={d} value={d}>{d}</option>)}
                   </Select>
                 </Field>

                 <Field>
                   <label style={{fontSize:12, color:'#6B7280'}}>Patient Name</label>
                   <Input value={patientName} onChange={(e)=>setPatientName(e.target.value)} placeholder="Patient full name" />
                 </Field>

                 <Field>
                   <label style={{fontSize:12, color:'#6B7280'}}>Problem</label>
                   <Textarea value={problem} onChange={(e)=>setProblem(e.target.value)} placeholder="Describe the problem" />
                 </Field>

                 {/* E-Prescription section */}
                 <Field style={{marginTop:6}}>
                   <label style={{fontSize:12, color:'#6B7280'}}>E-Prescription</label>
                   {/* inline warning alert */}
                   {rxAlert && (
                     <div style={{background:'#FFFBEB', color:'#92400E', border:'1px solid #FDE68A', padding:'8px 10px', borderRadius:8, marginBottom:8}}>
                       {rxAlert}
                     </div>
                   )}
                   {/* list */}
                   <div style={{display:'flex', flexDirection:'column', gap:8, marginBottom:8}}>
                     {rxList.length === 0 && <div style={{color:'#6B7280', fontSize:13}}>No medicines added yet.</div>}
                     {rxList.map(rx => (
                       <div key={rx.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid '+COLORS.border, padding:8, borderRadius:8, background:'#FAFAFA'}}>
                         <div>
                           <div style={{fontWeight:700}}>{rx.name} {rx.dosage ? `• ${rx.dosage}` : ''}</div>
                           <div style={{color:'#6B7280', fontSize:13}}>{rx.qty ? `Qty: ${rx.qty}` : ''} {rx.notes ? `• ${rx.notes}` : ''}</div>
                         </div>
                         <div style={{display:'flex', gap:8}}>
                          <button type="button" onClick={() => startEditPrescription(rx.id)} style={{background:'transparent', border:'1px solid '+COLORS.border, padding:'6px 8px', borderRadius:8}}>Edit</button>
                          <button type="button" onClick={() => deletePrescriptionFromList(rx.id)} style={{background:'transparent', border:'1px solid #F87171', color:'#B91C1C', padding:'6px 8px', borderRadius:8}}>Delete</button>
                         </div>
                       </div>
                     ))}
                   </div>

                  {/* add / edit controls (non-form to avoid nested form issues) */}
                  <div style={{display:'flex', gap:8, flexWrap:'wrap', alignItems:'flex-end'}}>
                    <div style={{flex:2, minWidth:160}}>
                      <Input placeholder="Medicine name" value={rxName} onChange={(e)=>setRxName(e.target.value)} />
                    </div>
                    <div style={{flex:1, minWidth:110}}>
                      <Input placeholder="Dosage (e.g. 10mg)" value={rxDosage} onChange={(e)=>setRxDosage(e.target.value)} />
                    </div>
                    <div style={{width:90}}>
                      <Input type="number" placeholder="Qty" value={rxQty} onChange={(e)=>setRxQty(e.target.value)} />
                    </div>
                    <div style={{flexBasis:'100%'}}>
                      <Textarea placeholder="Notes (route, frequency)" value={rxNotes} onChange={(e)=>setRxNotes(e.target.value)} />
                    </div>
                    <div style={{display:'flex', gap:8, marginLeft:'auto'}}>
                      {rxEditingId ? (
                        <>
                          <button type="button" onClick={() => { clearRxFields(); }} style={{border:'1px solid '+COLORS.border, background:'transparent', padding:'8px 12px', borderRadius:8}}>Cancel</button>
                          <button type="button" onClick={saveEditedPrescription} style={{background:'#0f172a', color:'#fff', padding:'8px 12px', borderRadius:8}}>Save Rx</button>
                        </>
                      ) : (
                        <button type="button" onClick={addPrescription} style={{background:'#0f172a', color:'#fff', padding:'8px 12px', borderRadius:8}}>Add Rx</button>
                      )}
                    </div>
                  </div>
                 </Field>

                 <div style={{display:'flex', gap:8}}>
                   <div style={{flex:1}}>
                     <label style={{fontSize:12, color:'#6B7280'}}>Age</label>
                     <Input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" />
                   </div>
                   <div style={{width:140}}>
                     <label style={{fontSize:12, color:'#6B7280'}}>Sex</label>
                     <Select value={sex} onChange={(e)=>setSex(e.target.value)}>
                       <option>Female</option>
                       <option>Male</option>
                       <option>Other</option>
                     </Select>
                   </div>
                 </div>

                 <Field>
                   <label style={{fontSize:12, color:'#6B7280'}}>Date & Time</label>
                   <Input type="datetime-local" value={datetime} onChange={(e)=>setDatetime(e.target.value)} />
                 </Field>

                 <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:6}}>
                   <button type="button" onClick={closeBookingModal} style={{border:'1px solid '+COLORS.border, background:'transparent', padding:'8px 12px', borderRadius:8}}>Cancel</button>
                  <button type="submit" style={{background:'#0f172a', color:'#fff', padding:'8px 12px', borderRadius:8}}>Connect now</button>
                 </div>
               </form>
             </ModalCard>
           </ModalOverlay>
         )}

        {toastMsg && <Toast>{toastMsg}</Toast>}
      </Container>
    </Page>
  );
};

export default DoctorPage;
