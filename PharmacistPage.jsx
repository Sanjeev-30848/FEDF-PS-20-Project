import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/GlobalStyles';

// Page container
const Page = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.backgroundLightGrey};
  padding: 24px 36px;
`;

// Centered container
const Container = styled.div`
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;
`;

/* Top navigation */
const TopNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

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
  &:hover { color: ${COLORS.primary}; background: rgba(0,0,0,0.03); }
`;

/* Title */
const TitleArea = styled.section`
  margin: 14px 0 20px;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin: 0 0 6px 0;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #6B7280;
`;

/* Metrics */
const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 14px;
  margin: 18px 0;
  @media (max-width: ${BREAKPOINTS.tablet}) { grid-template-columns: repeat(2,1fr); }
  @media (max-width: ${BREAKPOINTS.mobile}) { grid-template-columns: 1fr; }
`;

const MetricCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-shadow: 0 6px 12px rgba(0,0,0,0.04);
`;

const MetricLabel = styled.div` color: #6B7280; font-size:0.95rem; `;
const MetricValue = styled.div` font-weight:700; font-size:1.25rem; `;

/* Main layout */
const Columns = styled.div`
  display:grid;
  grid-template-columns: 1fr 380px;
  gap: 18px;
  @media (max-width: ${BREAKPOINTS.tablet}) { grid-template-columns: 1fr; }
`;

/* Inventory panel */
const Panel = styled.div`
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.04);
`;

const PanelTitle = styled.h3` margin:0 0 8px 0; `;
const PanelSub = styled.p` margin:0 0 14px 0; color:#6B7280; `;

const InventoryList = styled.div` display:flex; flex-direction:column; gap:12px; `;

const InventoryItem = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  border:1px solid ${COLORS.border};
  border-radius:10px;
  padding:12px;
`;

const MedInfo = styled.div` display:flex; gap:12px; align-items:center; `;
const MedAvatar = styled.div`
  width:44px; height:44px; border-radius:50%;
  background: #FFF7ED; color:#C2410C; display:inline-flex; align-items:center; justify-content:center; font-weight:700;
`;

const MedMeta = styled.div` display:flex; flex-direction:column; `;
const MedName = styled.div` font-weight:700; `;
const MedDetails = styled.div` color:#6B7280; font-size:0.9rem; `;

const Actions = styled.div` display:flex; gap:8px; align-items:center; `;

const PrimaryBtn = styled.button`
  background:${COLORS.textDark}; color:${COLORS.textLight}; border:none; padding:8px 12px; border-radius:8px; cursor:pointer;
`;

const GhostBtn = styled.button`
  background:transparent; border:1px solid ${COLORS.border}; padding:8px 12px; border-radius:8px; cursor:pointer;
`;

/* Add form */
const AddForm = styled.form` display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px; `;
const Input = styled.input`
  padding:10px 12px; border-radius:8px; border:1px solid ${COLORS.border}; background:${COLORS.inputBg};
`;
const SmallInput = styled(Input)` width:140px; `;

/* helper tag */
const Tag = styled.span`
  background:${props => props.variant === 'critical' ? '#FEF2F2' : props.variant === 'low' ? '#FEFDF0' : '#F3F4F6'};
  color:${props => props.variant === 'critical' ? '#B91C1C' : props.variant === 'low' ? '#92400E' : '#374151'};
  padding:6px 10px; border-radius:999px; font-weight:600; font-size:0.85rem;
`;

/* Quick actions */
const QuickActionsWrap = styled.div`
  background: white;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 18px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.04);
`;

const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 12px;
  @media (max-width: ${BREAKPOINTS.tablet}) { grid-template-columns: repeat(2,1fr); }
  @media (max-width: ${BREAKPOINTS.mobile}) { grid-template-columns: 1fr; }
`;

const ActionCard = styled.button`
  background: ${props => props.primary ? '#050816' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#111827'};
  border: 1px solid ${COLORS.border};
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
  &:hover { transform: translateY(-2px); }
`;

/* Modal (simple centered overlay) */
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
  width: 520px;
  max-width: 92%;
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
`;

/* Pharmacist page component */
const PharmacistPage = () => {
  const raw = sessionStorage.getItem('user');
  const user = raw ? JSON.parse(raw) : { email: '', role: 'pharmacist', name: 'Pharmacist' };
  const displayName = user.name || 'Pharmacist';

  const [inventory, setInventory] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [minQty, setMinQty] = useState('');

  // NEW: modal & quick action state
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMedId, setSelectedMedId] = useState('');
  const [qtyChange, setQtyChange] = useState(''); // can be positive or negative
  const [newMedName, setNewMedName] = useState('');
  const [newMinQty, setNewMinQty] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('pharm_inventory');
    if (saved) setInventory(JSON.parse(saved));
    else {
      // seed sample meds
      const seed = [
        { id: 1, name: 'Lisinopril 10mg', qty: 12, min: 20 },
        { id: 2, name: 'Insulin Glargine', qty: 3, min: 15 },
        { id: 3, name: 'Metformin 500mg', qty: 60, min: 30 },
      ];
      setInventory(seed);
      localStorage.setItem('pharm_inventory', JSON.stringify(seed));
    }
  }, []);

  // ensure persisted when inventory changes (existing)
  useEffect(() => {
    localStorage.setItem('pharm_inventory', JSON.stringify(inventory));
  }, [inventory]);

  // Handler to open modal (optionally preselect an item)
  const openUpdateModal = (preselectId = '') => {
    setSelectedMedId(preselectId || '');
    setQtyChange('');
    setNewMedName('');
    setNewMinQty('');
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const handleUpdateInventory = (e) => {
    e.preventDefault();
    const change = Number(qtyChange || 0);
    if (selectedMedId === 'new') {
      if (!newMedName.trim()) return;
      const item = {
        id: Date.now(),
        name: newMedName.trim(),
        qty: Number(change || 0),
        min: Number(newMinQty || 0),
      };
      setInventory(prev => [item, ...prev]);
    } else if (selectedMedId) {
      setInventory(prev => prev.map(it => {
        if (String(it.id) === String(selectedMedId)) {
          return { ...it, qty: Number(it.qty || 0) + change };
        }
        return it;
      }));
    } else {
      // if nothing selected, and name given, create new
      if (!newMedName.trim()) return;
      const item = {
        id: Date.now(),
        name: newMedName.trim(),
        qty: Number(change || 0),
        min: Number(newMinQty || 0),
      };
      setInventory(prev => [item, ...prev]);
    }
    closeUpdateModal();
  };

  const addMedication = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const item = {
      id: Date.now(),
      name: name.trim(),
      qty: Number(quantity || 0),
      min: Number(minQty || 0),
    };
    setInventory(prev => [item, ...prev]);
    setName(''); setQuantity(''); setMinQty('');
  };

  const deleteMedication = (id) => {
    setInventory(prev => prev.filter(i => i.id !== id));
  };

  const pendingPrescriptions = 15; // placeholder metrics
  const readyPickup = inventory.filter(i => i.qty > i.min).length;
  const totalItems = inventory.reduce((s,i)=>s+i.qty,0);
  const lowStockCount = inventory.filter(i => i.qty <= i.min).length;

  return (
    <Page>
      <Container>
        <TopNav>
          <Brand href="/">MediCare Connect</Brand>
          <BackLink href="/">Back to Home</BackLink>
        </TopNav>

        <TitleArea>
          <Title>PharmaCare Central - Pharmacist Portal</Title>
          <Subtitle>Manage prescriptions and inventory</Subtitle>
        </TitleArea>

        {/* QUICK ACTIONS */}
        <QuickActionsWrap>
          <PanelTitle style={{marginBottom:8}}>Quick Actions</PanelTitle>
          <div style={{color:'#6B7280', marginBottom:12}}>Common pharmacy management tasks</div>
          <QuickActionsGrid>
            <ActionCard primary onClick={() => {/* placeholder for process prescription */}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 8h-8V4H6v16h12V8z" fill="currentColor"/></svg>
              Process Prescription
            </ActionCard>

            <ActionCard onClick={() => openUpdateModal()}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 6h18v2H3zM6 10h12v10H6z" fill="currentColor"/></svg>
              Update Inventory
            </ActionCard>

            <ActionCard onClick={() => {/* mark ready placeholder */}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 16.17L4.83 12l-1.41 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/></svg>
              Mark Ready
            </ActionCard>

            <ActionCard onClick={() => {/* reports placeholder */}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zM3 7h2V5H3v2zM7 17h14v-2H7v2zM7 11h14V9H7v2zM7 5v2h14V5H7z" fill="currentColor"/></svg>
              Generate Reports
            </ActionCard>
          </QuickActionsGrid>
        </QuickActionsWrap>

        <MetricsGrid>
          <MetricCard>
            <MetricValue>{pendingPrescriptions}</MetricValue>
            <MetricLabel>Pending Prescriptions</MetricLabel>
          </MetricCard>
          <MetricCard>
            <MetricValue>{readyPickup}</MetricValue>
            <MetricLabel>Ready for Pickup</MetricLabel>
          </MetricCard>
          <MetricCard>
            <MetricValue>{totalItems.toLocaleString()}</MetricValue>
            <MetricLabel>Items in Stock</MetricLabel>
          </MetricCard>
          <MetricCard>
            <MetricValue>{lowStockCount}</MetricValue>
            <MetricLabel>Low Stock Alerts</MetricLabel>
          </MetricCard>
        </MetricsGrid>

        <Columns>
          <Panel>
            <PanelTitle>Prescription Queue</PanelTitle>
            <PanelSub>Prescriptions requiring your attention</PanelSub>

            {/* Inventory add form (reuse for quick add) */}
            <AddForm onSubmit={addMedication}>
              <Input placeholder="Medication name" value={name} onChange={(e)=>setName(e.target.value)} />
              <SmallInput type="number" placeholder="Qty" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
              <SmallInput type="number" placeholder="Min qty" value={minQty} onChange={(e)=>setMinQty(e.target.value)} />
              <PrimaryBtn type="submit">Add Medication</PrimaryBtn>
            </AddForm>

            <InventoryList>
              {inventory.map(item => {
                const low = item.qty <= item.min;
                return (
                  <InventoryItem key={item.id}>
                    <MedInfo>
                      <MedAvatar>{item.name.split(' ').map(p=>p[0]).slice(0,2).join('')}</MedAvatar>
                      <MedMeta>
                        <MedName>{item.name}</MedName>
                        <MedDetails>Current: {item.qty} units · Minimum: {item.min} units</MedDetails>
                      </MedMeta>
                    </MedInfo>

                    <Actions>
                      {low ? <Tag variant="critical">low</Tag> : <Tag variant="low">ok</Tag>}
                      <GhostBtn type="button" onClick={() => openUpdateModal(String(item.id))}>Update</GhostBtn>
                      <GhostBtn type="button" onClick={() => deleteMedication(item.id)}>Delete</GhostBtn>
                      <PrimaryBtn type="button">Order Now</PrimaryBtn>
                    </Actions>
                  </InventoryItem>
                );
              })}
            </InventoryList>
          </Panel>

          <Panel>
            <PanelTitle>Inventory Alerts</PanelTitle>
            <PanelSub>Items requiring restocking</PanelSub>

            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {inventory.filter(i=>i.qty <= i.min).map(i => (
                <InventoryItem key={'alert-'+i.id}>
                  <MedInfo>
                    <MedAvatar style={{background:'#FEF3F2', color:'#B91C1C'}}>{i.name.split(' ').map(p=>p[0]).slice(0,2).join('')}</MedAvatar>
                    <MedMeta>
                      <MedName>{i.name}</MedName>
                      <MedDetails>Current: {i.qty} units · Minimum: {i.min} units</MedDetails>
                    </MedMeta>
                  </MedInfo>

                  <Actions>
                    <Tag variant="critical">critical</Tag>
                    <PrimaryBtn type="button">Order Now</PrimaryBtn>
                  </Actions>
                </InventoryItem>
              ))}

              {inventory.filter(i=>i.qty <= i.min).length === 0 && (
                <div style={{padding:12, borderRadius:8, border:`1px solid ${COLORS.border}`, textAlign:'center'}}>No alerts — inventory levels normal.</div>
              )}

              <div style={{textAlign:'center', marginTop:12}}>
                <GhostBtn type="button">View Full Inventory</GhostBtn>
              </div>
            </div>
          </Panel>
        </Columns>

        {/* UPDATE INVENTORY MODAL */}
        {showUpdateModal && (
          <ModalOverlay onClick={closeUpdateModal}>
            <ModalCard onClick={(e)=>e.stopPropagation()}>
              <h3 style={{marginTop:0}}>Update Inventory</h3>
              <p style={{marginTop:0, color:'#6B7280'}}>Select medicine and enter quantity change (use negative to reduce).</p>

              <form onSubmit={handleUpdateInventory} style={{display:'flex', flexDirection:'column', gap:10}}>
                <label style={{fontSize:12, color:'#6B7280'}}>Medicine</label>
                <select value={selectedMedId || ''} onChange={(e)=>setSelectedMedId(e.target.value)}>
                  <option value="">-- Select existing or add new --</option>
                  {inventory.map(it => <option key={it.id} value={String(it.id)}>{it.name} (Current: {it.qty})</option>)}
                  <option value="new">+ Add new medicine</option>
                </select>

                {selectedMedId === 'new' && (
                  <>
                    <Input placeholder="New medicine name" value={newMedName} onChange={(e)=>setNewMedName(e.target.value)} />
                    <SmallInput type="number" placeholder="Min qty (for alerts)" value={newMinQty} onChange={(e)=>setNewMinQty(e.target.value)} />
                  </>
                )}

                {selectedMedId === '' && (
                  <Input placeholder="(Optional) Enter medicine name to add" value={newMedName} onChange={(e)=>setNewMedName(e.target.value)} />
                )}

                <label style={{fontSize:12, color:'#6B7280'}}>Quantity change (use - to remove)</label>
                <SmallInput type="number" placeholder="+10 or -5" value={qtyChange} onChange={(e)=>setQtyChange(e.target.value)} />

                <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:6}}>
                  <GhostBtn type="button" onClick={closeUpdateModal}>Cancel</GhostBtn>
                  <PrimaryBtn type="submit">Update</PrimaryBtn>
                </div>
              </form>
            </ModalCard>
          </ModalOverlay>
        )}

      </Container>
    </Page>
  );
};

export default PharmacistPage;
