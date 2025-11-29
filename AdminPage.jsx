import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const Row = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding: 10px 0;
  border-bottom: 1px dashed ${COLORS.border};
  &:last-child { border-bottom: none; }
`;

const ProgressBar = styled.div`
  height:10px;
  background:#F3F4F6;
  border-radius:999px;
  overflow:hidden;
  margin-top:8px;
  & > i { display:block; height:100%; background:${COLORS.primary}; width:${props => props.w || '50%'}; }
`;

export default function AdminPage() {
  const sessionUser = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') || 'null') : null;
  const user = sessionUser || { email: 'admin@example.com', role: 'administrator', name: 'System Admin' };
  const displayName = user.name || (user.email ? user.email.split('@')[0] : 'Admin');

  const stats = [
    { id:1, label:'Total Users', value:'2,547' },
    { id:2, label:'Active Sessions', value:'142' },
    { id:3, label:'Data Usage', value:'87.2 GB' },
    { id:4, label:'Security Alerts', value:'3' },
  ];

  const distribution = [
    { label:'Patients', value:'72.5%', count:'1,847 users' },
    { label:'Doctors', value:'9.6%', count:'245 users' },
    { label:'Pharmacists', value:'6.1%', count:'156 users' },
    { label:'Admins', value:'0.5%', count:'12 users' },
  ];

  const activities = [
    { title:'New doctor registered', desc:'Dr. Emily Rodriguez', time:'2 minutes ago' },
    { title:'System backup completed', desc:'System', time:'1 hour ago' },
    { title:'Security scan completed', desc:'Security Module', time:'3 hours ago' },
  ];

  return (
    <PageBody>
      <Container>
        <TopNav>
          <Brand>MediCare Connect</Brand>
          <BackLink to="/">Back to Home</BackLink>
        </TopNav>

        <Welcome>
          <h1>System Administration</h1>
          <p>Platform management and oversight</p>
        </Welcome>

        <StatsGrid>
          {stats.map(s => (
            <StatCard key={s.id}>
              <div>
                <div className="num">{s.value}</div>
                <div className="label">{s.label}</div>
              </div>
              <div aria-hidden style={{opacity:0.9}}>
                {/* simple icon placeholder */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3v18" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
            </StatCard>
          ))}
        </StatsGrid>

        <ContentGrid>
          <Card>
            <h3 style={{marginTop:0}}>User Distribution</h3>
            <p style={{color:'#6B7280'}}>Platform user breakdown by role</p>

            <div style={{marginTop:12}}>
              {distribution.map((d, i) => (
                <div key={i} style={{marginBottom:14}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{fontWeight:700}}>{d.label}</div>
                    <div style={{color:'#6B7280'}}>{d.count} ({d.value})</div>
                  </div>
                  <ProgressBar w={d.value}><i /></ProgressBar>
                </div>
              ))}
              <div style={{textAlign:'center', marginTop:12}}>
                <button style={{width:'100%', background:'transparent', border:'1px solid '+COLORS.border, padding:12, borderRadius:8}}>View Detailed Analytics</button>
              </div>
            </div>
          </Card>

          <Card>
            <h3 style={{marginTop:0}}>Recent Activities</h3>
            <p style={{color:'#6B7280'}}>System events and user actions</p>

            <div style={{marginTop:12, display:'flex', flexDirection:'column', gap:12}}>
              {activities.map((a, i) => (
                <div key={i} style={{background:'#fff', border:'1px solid '+COLORS.border, padding:12, borderRadius:8, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div>
                    <div style={{fontWeight:700}}>{a.title}</div>
                    <div style={{color:'#6B7280', marginTop:6}}>{a.desc}</div>
                  </div>
                  <div style={{color:'#9CA3AF', fontSize:12}}>{a.time}</div>
                </div>
              ))}
            </div>
          </Card>
        </ContentGrid>
      </Container>
    </PageBody>
  );
}
