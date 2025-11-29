import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { COLORS, BREAKPOINTS } from '../styles/GlobalStyles';

const PageBody = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.backgroundLightGrey};
  padding: 24px 40px;
`;

const TopNav = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:28px;
`;

const Brand = styled.div`
  font-weight:700;
  color: ${COLORS.primary};
  font-size:1.25rem;
`;

const BackLink = styled(Link)`
  color: ${COLORS.textDark};
  text-decoration: none;
  font-weight:600;
  &:hover { color: ${COLORS.primary}; }
`;

const Container = styled.main`
  max-width:1200px;
  margin:0 auto;
`;

const Welcome = styled.section`
  margin-bottom:18px;
  h1 { margin:0; font-size:1.75rem; }
  p { color:#6B7280; margin-top:6px; }
`;

const StatsGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
  margin:18px 0;
  @media (max-width:${BREAKPOINTS.tablet}) { grid-template-columns:repeat(2,1fr); }
  @media (max-width:${BREAKPOINTS.mobile}) { grid-template-columns:1fr; }
`;

const StatCard = styled.div`
  background:${COLORS.backgroundMain};
  border-radius:10px;
  padding:16px;
  border:1px solid ${COLORS.border};
  display:flex;
  justify-content:space-between;
  align-items:center;
  .num { font-weight:700; font-size:1.4rem; }
  .label { color:#6B7280; font-size:0.9rem; margin-top:6px; }
`;

const ContentGrid = styled.div`
  display:grid;
  grid-template-columns:2fr 1.2fr;
  gap:20px;
  @media (max-width:${BREAKPOINTS.tablet}) { grid-template-columns:1fr; }
`;

const Card = styled.section`
  background:${COLORS.backgroundMain};
  border-radius:12px;
  padding:16px;
  border:1px solid ${COLORS.border};
`;

const AppointmentItem = styled.div`
  background:#fff;
  border:1px solid ${COLORS.border};
  border-radius:8px;
  padding:12px;
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:12px;
  .meta { flex:1; }
  .actions { display:flex; gap:8px; align-items:center; }
  .badge { background:#F3F4F6; padding:6px 10px; border-radius:16px; font-size:0.85rem; }
  button { background:${COLORS.primary}; color:${COLORS.textLight}; border:none; padding:8px 10px; border-radius:8px; cursor:pointer; }
`;

const PrescriptionItem = styled.div`
  background:#fff;
  border:1px solid ${COLORS.border};
  border-radius:8px;
  padding:12px;
  margin-bottom:12px;
  .title{ font-weight:700; }
  .meta{ color:#6B7280; font-size:0.9rem; margin-top:6px; }
`;

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
  width: 560px;
  max-width: 96%;
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
`;

const Field = styled.div`
  display:flex;
  flex-direction:column;
  gap:6px;
  margin-bottom:8px;
`;

const Input = styled.input`
  padding:10px;
  border-radius:8px;
  border:1px solid ${COLORS.border};
  background:${COLORS.inputBg};
`;

const Select = styled.select`
  padding:10px;
  border-radius:8px;
  border:1px solid ${COLORS.border};
  background:${COLORS.inputBg};
`;

const Textarea = styled.textarea`
  padding:10px;
  border-radius:8px;
  border:1px solid ${COLORS.border};
  background:${COLORS.inputBg};
  resize:vertical;
  min-height:70px;
`;

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

export default function PatientPage() {
  const location = useLocation();
  const sessionUser = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') || 'null') : null;
  const stateUser = location.state || {};
  const user = stateUser.email ? stateUser : (sessionUser || { email: 'patient@example.com', role: 'patient' });
  const displayName = user.email ? user.email.split('@')[0].replace(/[._-]/g, ' ') : 'Patient';

  const stats = [
    { id:1, label:'Upcoming Appointments', value:2 },
    { id:2, label:'Active Prescriptions', value:3 },
    { id:3, label:'Medical Records', value:15 },
    { id:4, label:'Health Score', value:'98%' },
  ];

  const initialAppointments = [
    { id:1, doctor:'Dr. Ramesh Babu P', role:'Cardiologist', time:'2024-09-25 at 10:00 AM', status:'confirmed', patient:'Haindavi', createdAt: Date.now() - 1000 * 60 * 60 }, // 60 mins ago
    { id:2, doctor:'Dr. Kalyan Chakravarthy Koganti', role:'General Medicine', time:'2024-09-28 at 2:30 PM', status:'pending', patient:'Krishna Thej', createdAt: Date.now() - 1000 * 60 * 30 }, // 30 mins ago
    { id:3, doctor:'Dr. E. Mounika', role:'Obstetrician and Gynecologist (OB-GYN)', time:'2024-10-02 at 11:00 AM', status:'confirmed', patient:'Lavanya', createdAt: Date.now() - 1000 * 60 * 120 },
    { id:4, doctor:'Dr. Anjali', role:'Dermatologist', time:'2024-10-05 at 9:00 AM', status:'pending', patient:'Ashok', createdAt: Date.now() - 1000 * 60 * 5 },
    { id:5, doctor:'Dr. Vikram Kumar', role:'Pediatrician', time:'2024-10-10 at 1:00 PM', status:'confirmed', patient:'Ria', createdAt: Date.now() - 1000 * 60 * 240 },
    { id:6, doctor:'Dr. Priya Sharma', role:'Neurologist', time:'2024-10-15 at 3:30 PM', status:'confirmed', patient:'Mani', createdAt: Date.now() - 1000 * 60 * 90 },
    { id:7, doctor:'Dr. Paturi Kiran Chowdary', role:'Orthopedic Surgeon', time:'2024-10-20 at 11:00 AM', status:'confirmed', patient:'Aravindh', createdAt: Date.now() - 1000 * 60 * 55 },
    { id:8, doctor:'Dr. Sneha Reddy', role:'Psychiatrist', time:'2024-10-25 at 4:00 PM', status:'pending', patient:'Vijaya Lakshmi', createdAt: Date.now() - 1000 * 60 * 10 },
  ];

  // doctors list for dropdown
  const doctors = [
    'Dr. Ramesh Babu P',
    'Dr. Kalyan Chakravarthy Koganti',
    'Dr. E. Mounika',
    'Dr. Anjali',
    'Dr. Vikram Kumar',
    'Dr. Priya Sharma',
    'Dr. Paturi Kiran Chowdary',
    'Dr. Sneha Reddy'
  ];

  const LOCAL_KEY = 'app_appointments_v1';

  // appointments state so newly booked appointments appear
  const [appointments, setAppointments] = useState(initialAppointments);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [doctor, setDoctor] = useState(doctors[0]);
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Female');
  const [bloodGroup, setBloodGroup] = useState('');
  const [reason, setReason] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  // Details modal state
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState(null);

  const openDetails = (appt) => {
    setSelectedAppt(appt);
    setShowDetailsModal(true);
  };
  const closeDetails = () => {
    setShowDetailsModal(false);
    setSelectedAppt(null);
  };

  // load persisted appointments once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) {
          setAppointments(parsed);
        }
      }
    } catch (err) {
      // ignore parse errors
    }
  }, []);

  // persist appointments whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(appointments));
    } catch (err) {
      // ignore
    }
  }, [appointments]);

  // Tab sync: update appointments when another tab changes the same localStorage key
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== LOCAL_KEY) return;
      try {
        const newVal = e.newValue ? JSON.parse(e.newValue) : [];
        if (Array.isArray(newVal)) {
          setAppointments(newVal);
        }
      } catch (err) {
        // ignore
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // keep a tick to force minute-based updates for "minutes ago"
  useEffect(() => {
    const id = setInterval(() => {
      // trivial state update to re-render every minute
      setToastMsg(prev => prev);
    }, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => setToastMsg(''), 3500);
    return () => clearTimeout(t);
  }, [toastMsg]);

  const openBookingModal = () => {
    setDoctor(doctors[0]);
    setPatientName('');
    setAge('');
    setPhone('');
    setGender('Female');
    setBloodGroup('');
    setReason('');
    setShowBookingModal(true);
  };
  const closeBookingModal = () => setShowBookingModal(false);

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim() || !reason.trim()) return; // minimal validation
    const now = Date.now();
    const newAppt = {
      id: now,
      doctor,
      role: '', // optional role available if needed
      time: new Date(now).toLocaleString(),
      status: 'booked',
      patient: patientName.trim(),
      age: age,
      phone: phone.trim(),
      gender,
      bloodGroup,
      reason: reason.trim(),
      createdAt: now
    };
    setAppointments(prev => [newAppt, ...prev]);
    setShowBookingModal(false);
    setToastMsg(`Appointment booked successfully for ${newAppt.patient} with ${newAppt.doctor}`);
  };

  // Added: delete appointment handler
  const deleteAppointment = (id) => {
    const appt = appointments.find(a => a.id === id);
    setAppointments(prev => prev.filter(a => a.id !== id));
    setToastMsg(`Appointment deleted${appt && appt.patient ? `: ${appt.patient}` : ''}`);
  };

  const prescriptions = [
    { id:1, title:'Lisinopril 10mg', meta:'Prescribed by Dr. Ramesh Babu P • 2024-09-20', status:'ready' },
    { id:2, title:'Metformin 500mg', meta:'Prescribed by Dr. Kalyan Chakravarthy Koganti • 2024-09-18', status:'dispensed' },
    { id:3, title:'Oxytocin 20mg', meta:'Prescribed by Dr. E. Mounika • 2024-09-15', status:'ready' },
    { id:4, title:'Atorvastatin 20mg', meta:'Prescribed by Dr. Anjali • 2024-09-10', status:'dispensed' },
    { id:5, title:'Amlodipine 5mg', meta:'Prescribed by Dr. Vikram Kumar • 2024-09-05', status:'ready' },
    { id:6, title:'Omeprazole 20mg', meta:'Prescribed by Dr. Priya Sharma • 2024-09-01', status:'dispensed' },
    { id:7, title:'Naproxene 50mcg', meta:'Prescribed by Dr. Paturi Kiran Chowdary • 2024-08-28', status:'ready' },
    { id:8, title:'Sertraline 100mg', meta:'Prescribed by Dr. Sneha Reddy • 2024-08-25', status:'dispensed' },
  ];

  // helper to format minutes-ago
  const minutesAgoText = (ts) => {
    if (!ts) return '';
    const mins = Math.floor((Date.now() - ts) / 60000);
    if (mins <= 0) return 'just now';
    if (mins === 1) return '1 minute ago';
    if (mins < 60) return `${mins} minutes ago`;
    const hours = Math.floor(mins / 60);
    if (hours === 1) return '1 hour ago';
    return `${hours} hours ago`;
  };

  return (
    <PageBody>
      <Container>
        <TopNav>
          <Brand>MediCare Connect</Brand>
          <BackLink to="/">Back to Home</BackLink>
        </TopNav>

        <Welcome>
          <h1>Welcome back, {displayName}</h1>
          <p>Your health dashboard</p>
        </Welcome>

        <StatsGrid>
          {stats.map(s => (
            <StatCard key={s.id}>
              <div>
                <div className="num">{s.value}</div>
                <div className="label">{s.label}</div>
              </div>
              <div aria-hidden style={{opacity:0.9}}>
                {/* simple icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3v18" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
            </StatCard>
          ))}
        </StatsGrid>

        <ContentGrid>
          <Card>
            <h3 style={{marginTop:0}}>Upcoming Appointments</h3>
            <p style={{color:'#6B7280', marginTop:6}}>Your scheduled consultations</p>
            <div style={{marginTop:12}}>
              {appointments.map(a => (
                <AppointmentItem key={a.id}>
                  <div style={{width:44, height:44, borderRadius:22, background:'#EEF2FF', display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div>
                  <div className="meta">
                    <div style={{fontWeight:700}}>{a.patient || a.patientName || 'Unknown'}</div>
                    {/* show reason */}
                    {a.reason && <div style={{color:'#6B7280', marginTop:4}}>{a.reason}</div>}
                    <div style={{color:'#6B7280'}}>{a.doctor} {a.role ? `• ${a.role}` : ''}</div>
                    <div style={{color:'#9CA3AF', marginTop:6}}>
                      ⏱ {a.time} • {minutesAgoText(a.createdAt)}
                    </div>
                  </div>
                  <div className="actions">
                    <div className="badge">{a.status}</div>
                    <button type="button" onClick={() => openDetails(a)}>View Details</button>
                    {/* Added Delete button */}
                    <button
                      type="button"
                      onClick={() => deleteAppointment(a.id)}
                      style={{
                        background: 'transparent',
                        border: '1px solid #F87171',
                        color: '#B91C1C',
                        padding: '8px 10px',
                        borderRadius: 8,
                        cursor: 'pointer'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </AppointmentItem>
              ))}
            </div>
            <div style={{marginTop:12, textAlign:'center'}}>
              <button onClick={openBookingModal} style={{width:'100%', background:'#0F172A', color:'#fff', padding:12, borderRadius:8, border:'none'}}>Book New Appointment</button>
            </div>
          </Card>

          <Card>
            <h3 style={{marginTop:0}}>Recent Prescriptions</h3>
            <p style={{color:'#6B7280', marginTop:6}}>Your medication history</p>
            <div style={{marginTop:12}}>
              {prescriptions.map(p => (
                <PrescriptionItem key={p.id}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div>
                      <div className="title">{p.title}</div>
                      <div className="meta">{p.meta}</div>
                    </div>
                    <div style={{display:'flex',gap:8,alignItems:'center'}}>
                      <div style={{fontSize:12,color:'#6B7280',padding:'6px 8px',borderRadius:8,background:'#F3F4F6'}}>{p.status}</div>
                      <button style={{background:'#0F172A',color:'#fff',border:'none',padding:'8px 12px',borderRadius:8}}>Download</button>
                    </div>
                  </div>
                </PrescriptionItem>
              ))}
            </div>
            <div style={{marginTop:12, textAlign:'center'}}>
              <Link to="#" style={{textDecoration:'none', color:COLORS.primary, fontWeight:700}}>View All Prescriptions</Link>
            </div>
          </Card>
        </ContentGrid>

        {/* Booking modal */}
        {showBookingModal && (
          <ModalOverlay onClick={closeBookingModal}>
            <ModalCard onClick={(e)=>e.stopPropagation()}>
              <h3 style={{marginTop:0}}>Book Appointment</h3>
              <p style={{marginTop:0, color:'#6B7280'}}>Select doctor and enter patient details</p>

              <form onSubmit={handleSubmitBooking} style={{display:'flex', flexDirection:'column', gap:10}}>
                <Field>
                  <label style={{fontSize:12, color:'#6B7280'}}>Doctor</label>
                  <Select value={doctor} onChange={(e)=>setDoctor(e.target.value)}>
                    {doctors.map(d => <option key={d} value={d}>{d}</option>)}
                  </Select>
                </Field>

                <Field>
                  <label style={{fontSize:12, color:'#6B7280'}}>Name</label>
                  <Input value={patientName} onChange={(e)=>setPatientName(e.target.value)} placeholder="Patient full name" />
                </Field>

                <div style={{display:'flex', gap:8}}>
                  <div style={{flex:1}}>
                    <label style={{fontSize:12, color:'#6B7280'}}>Age</label>
                    <Input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" />
                  </div>
                  <div style={{width:160}}>
                    <label style={{fontSize:12, color:'#6B7280'}}>Phone</label>
                    <Input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone number" />
                  </div>
                </div>

                <div style={{display:'flex', gap:8}}>
                  <div style={{flex:1}}>
                    <label style={{fontSize:12, color:'#6B7280'}}>Gender</label>
                    <Select value={gender} onChange={(e)=>setGender(e.target.value)}>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </Select>
                  </div>
                  <div style={{width:180}}>
                    <label style={{fontSize:12, color:'#6B7280'}}>Blood Group</label>
                    <Select value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)}>
                      <option value="">Select</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </Select>
                  </div>
                </div>

                <Field>
                  <label style={{fontSize:12, color:'#6B7280'}}>Reason</label>
                  <Textarea value={reason} onChange={(e)=>setReason(e.target.value)} placeholder="Describe the reason for visit" />
                </Field>

                <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:6}}>
                  <button type="button" onClick={closeBookingModal} style={{border:'1px solid '+COLORS.border, background:'transparent', padding:'8px 12px', borderRadius:8}}>Cancel</button>
                  <button type="submit" style={{background:'#0F172A', color:'#fff', padding:'8px 12px', borderRadius:8}}>Submit</button>
                </div>
              </form>
            </ModalCard>
          </ModalOverlay>
        )}

        {/* Details modal */}
        {showDetailsModal && selectedAppt && (
          <ModalOverlay onClick={closeDetails}>
            <ModalCard onClick={(e) => e.stopPropagation()}>
              <h3 style={{ marginTop: 0 }}>Appointment Details</h3>
              <p style={{ marginTop: 0, color: '#6B7280' }}>Details for the selected appointment</p>

              <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 18 }}>{selectedAppt.patient}</div>
                <div style={{ color: '#6B7280' }}>{selectedAppt.doctor} {selectedAppt.role ? `• ${selectedAppt.role}` : ''}</div>
                <div style={{ color: '#9CA3AF' }}>⏱ {selectedAppt.time}</div>
                {selectedAppt.age && <div><strong>Age:</strong> {selectedAppt.age}</div>}
                {selectedAppt.phone && <div><strong>Phone:</strong> {selectedAppt.phone}</div>}
                {selectedAppt.gender && <div><strong>Gender:</strong> {selectedAppt.gender}</div>}
                {selectedAppt.bloodGroup && <div><strong>Blood Group:</strong> {selectedAppt.bloodGroup}</div>}
                {selectedAppt.reason && <div style={{ marginTop: 8 }}><strong>Reason:</strong> <div style={{ color: '#374151' }}>{selectedAppt.reason}</div></div>}

                {/* Show prescriptions if present */}
                {selectedAppt.prescriptions && selectedAppt.prescriptions.length > 0 && (
                  <div style={{ marginTop: 8 }}>
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>E‑Prescriptions</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {selectedAppt.prescriptions.map(rx => (
                        <div key={rx.id} style={{ border: '1px solid ' + COLORS.border, padding: 8, borderRadius: 8, background: '#FAFAFA' }}>
                          <div style={{ fontWeight: 700 }}>{rx.name} {rx.dosage ? `• ${rx.dosage}` : ''}</div>
                          <div style={{ color: '#6B7280' }}>{rx.qty ? `Qty: ${rx.qty}` : ''} {rx.notes ? `• ${rx.notes}` : ''}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
                  <button type="button" onClick={closeDetails} style={{ border: '1px solid ' + COLORS.border, background: 'transparent', padding: '8px 12px', borderRadius: 8 }}>Close</button>
                </div>
              </div>
            </ModalCard>
          </ModalOverlay>
        )}

        {toastMsg && <Toast>{toastMsg}</Toast>}
      </Container>
    </PageBody>
  );
}
