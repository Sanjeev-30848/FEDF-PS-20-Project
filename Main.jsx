import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/GlobalStyles';

// --- 1. Reusable Styled Components ---

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;


// Remove Link-based Button and provide button + anchor variants
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  font-size: 1rem;
  min-width: 160px;
  text-decoration: none;

  &.primary {
    background-color: ${COLORS.primary};
    color: ${COLORS.textLight};
    &:hover {
      background-color: ${COLORS.primaryDark};
    }
  }

  &.secondary {
    background-color: transparent;
    border: 1px solid ${COLORS.border};
    color: ${COLORS.textDark};
    &:hover {
      border-color: ${COLORS.primary};
      color: ${COLORS.primary};
    }
  }

  &.white-outline {
    background-color: transparent;
    border: 1px solid ${COLORS.textLight};
    color: ${COLORS.textLight};
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

// Anchor-styled button for navigation (safe without Router)
const AnchorButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  font-size: 1rem;
  min-width: 160px;
  text-decoration: none;

  &.primary {
    background-color: ${COLORS.primary};
    color: ${COLORS.textLight};
    &:hover {
      background-color: ${COLORS.primaryDark};
    }
  }

  &.secondary {
    background-color: transparent;
    border: 1px solid ${COLORS.border};
    color: ${COLORS.textDark};
    &:hover {
      border-color: ${COLORS.primary};
      color: ${COLORS.primary};
    }
  }

  &.white-outline {
    background-color: transparent;
    border: 1px solid ${COLORS.textLight};
    color: ${COLORS.textLight};
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    color: ${COLORS.textDark};
    @media (max-width: ${BREAKPOINTS.tablet}) {
        font-size: 2rem;
    }
`;

const SectionSubtitle = styled.p`
    font-size: 1.15rem;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 50px auto;
    color: #6B7280;
    @media (max-width: ${BREAKPOINTS.tablet}) {
        font-size: 1rem;
    }
`;

// --- 2. Layout Components (Header, Hero, etc.) ---

const HeaderContainer = styled.header`
  padding: 15px 0;
  background-color: ${COLORS.backgroundMain};
  position: sticky;
  top: 0;
  z-index: 1000;

  ${Container} {
    display: flex;
    justify-content: space-between; /* changed to distribute logo / nav / user */
    align-items: center;
    gap: 20px;
  }
`;

/* New header/menu styled components */
const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavListCompact = styled.ul`
  list-style: none;
  display: flex;
  gap: 22px;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  color: ${COLORS.textDark};
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0,0,0,0.03);
    color: ${COLORS.primary};
  }
`;

const NavIcon = styled.span`
  display: inline-flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  svg { width: 18px; height: 18px; }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const UserName = styled.div`
  text-align: right;
  font-weight: 600;
  color: ${COLORS.textDark};
  font-size: 0.95rem;
  & small { display: block; font-weight: 400; color: #6B7280; font-size: 0.8rem; }
`;

const RoleButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const RoleButton = styled.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid ${COLORS.border};
  background: ${props => props.active ? COLORS.textDark : 'transparent'};
  color: ${props => props.active ? COLORS.textLight : COLORS.textDark};
  cursor: pointer;
  font-size: 0.85rem;
`;

// --- 3. Hero Section Components ---

const HeroSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(180deg, #F0F4F8 0%, ${COLORS.backgroundMain} 100%);

  ${Container} {
    display: flex;
    align-items: center;
    gap: 60px;
    @media (max-width: ${BREAKPOINTS.tablet}) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

const HeroContent = styled.div`
  flex: 1.2;
`;

const HeroTitle = styled.h2`
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
  font-weight: 700;
  .highlight {
    color: ${COLORS.primary};
  }
  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
    font-size: 1.15rem;
    color: #4B5563;
    margin-bottom: 30px;
    max-width: 550px;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const HeroStats = styled.div`
  display: flex;
  gap: 30px;
  color: #6B7280;
  font-size: 0.9rem;
  font-weight: 500;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

const HeroImage = styled.div`
    flex: 1;
    text-align: right;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    overflow: hidden; 
    & img {
        max-width: 100%;
        height: auto;
        display: block; 
    }
`;

// --- 4. Solutions and Roles Sections (Code omitted for brevity, assume content is pasted) ---
// ...

const CtaBanner = styled.section`
    background-color: ${COLORS.primary};
    padding: 60px 0;
    text-align: center;
    color: ${COLORS.textLight};
`;

const CtaTitle = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${COLORS.textLight};
`;

const CtaDescription = styled.p`
    font-size: 1.15rem;
    max-width: 800px;
    margin: 0 auto 30px auto;
    opacity: 0.9;
`;

const CtaButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    & .white-outline {
        background-color: transparent;
        border: 1px solid ${COLORS.textLight};
        color: ${COLORS.textLight};
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`;

const FooterContainer = styled.footer`
    padding: 25px 0;
    background-color: ${COLORS.textDark};
    color: ${COLORS.textLight};
    font-size: 0.9rem;

    ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: ${BREAKPOINTS.tablet}) {
            flex-direction: column;
            gap: 15px;
        }
    }

    .footer-links a {
        color: ${COLORS.textLight};
        margin-left: 20px;
        opacity: 0.7;
    }
`;

// --- 6. The Main Component ---

const Main = () => { // COMPONENT NAME CHANGED TO 'Main'
    const [activeRole, setActiveRole] = useState('patient'); // new local role state for header badge

    return (
        <>
            <HeaderContainer>
                <Container>
                    {/* Left: Logo */}
                    <Logo href="/">MediCare Connect</Logo>

                    {/* Center: Navigation */}
                    <Nav aria-label="Main navigation">
                        <NavListCompact>
                            <li>
                                <NavLink href="#">
                                    <NavIcon>
                                        {/* simple dashboard icon */}
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z" fill="currentColor"/></svg>
                                    </NavIcon>
                                    Dashboard
                                </NavLink>
                            </li>

                            <li>
                                <NavLink href="#appointments">
                                    <NavIcon>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10h10v2H7zM7 14h7v2H7zM19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="currentColor"/></svg>
                                    </NavIcon>
                                    Appointments
                                </NavLink>
                            </li>

                            <li>
                                <NavLink href="#records">
                                    <NavIcon>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H4v12h16V6zM8 10h8v2H8v-2z" fill="currentColor"/></svg>
                                    </NavIcon>
                                    Records
                                </NavLink>
                            </li>

                            <li>
                                <NavLink href="#prescriptions">
                                    <NavIcon>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 6v6c0 5 3.8 9.7 9 10 5.2-.3 9-5 9-10V6l-9-4z" fill="currentColor"/></svg>
                                    </NavIcon>
                                    Prescriptions
                                </NavLink>
                            </li>
                        </NavListCompact>
                    </Nav>

                   
                        <RoleButtons>
                            <RoleButton active={activeRole === 'patient'} type="button" onClick={() => setActiveRole('patient')}>Patient</RoleButton>
                            <RoleButton active={activeRole === 'doctor'} type="button" onClick={() => setActiveRole('doctor')}>Doctor</RoleButton>
                            <RoleButton active={activeRole === 'pharmacist'} type="button" onClick={() => setActiveRole('pharmacist')}>Pharmacist</RoleButton>
                            <RoleButton active={activeRole === 'administrator'} type="button" onClick={() => setActiveRole('administrator')}>Admin</RoleButton>
                        </RoleButtons>
                    
                </Container>
            </HeaderContainer>

            <main>
                {/* All Hero, Solutions, and Roles content goes here */}
                {/* ... (HeroSection, SolutionsSection, RolesSection JSX) ... */}
                
                <HeroSection>
                    <Container>
                        <HeroContent>
                            <HeroTitle>Your Health, <span className="highlight">Virtually Connected</span></HeroTitle>
                            <HeroDescription>Experience the future of healthcare with our comprehensive online medical system. Book virtual consultations, access your medical records, and manage prescriptions all in one secure platform.</HeroDescription>
                            <HeroActions>
                                {/* navigation uses anchor to avoid relying on Router at render time */}
                                <AnchorButton href="/login" className="primary">Get Started Today</AnchorButton> 
                                {/* native button; ensure type provided */}
                                <Button type="button" className="secondary">Learn More</Button> 
                            </HeroActions>
                            <HeroStats>
                                <StatItem>
                                    <StatIcon src="/hpiaa.jpg" alt="HIPAA Compliant" />
                                    <span>HIPAA Compliant</span>
                                </StatItem>
                                <StatItem>
                                    <StatIcon src="/clock.jpg" alt="24/7 Available" />
                                    <span>24/7 Available</span>
                                </StatItem>
                                <StatItem>
                                    <StatIcon src="/users.jpg" alt="2,500+ Users" />
                                    <span>2,500+ Users</span>
                                </StatItem>
                            </HeroStats>
                        </HeroContent>
                        <HeroImage>
                            {/* public image path */}
                            <img src="/medicalsystem.jpg" alt="Doctor showing X-ray to patient" />
                        </HeroImage>
                    </Container>
                </HeroSection>

                {/* You need to paste the full content for SolutionsSection and RolesSection here */}
                {/* ... */}


                {/* CALL TO ACTION SECTION (Assuming full code is present) */}
                <CtaBanner>
                    <Container>
                        <CtaTitle>Ready to Transform Your Healthcare Experience?</CtaTitle>
                        <CtaDescription>
                            Join thousands of users who have already made the switch to virtual healthcare. Start your journey today with our secure, comprehensive medical platform.
                        </CtaDescription>
                        <CtaButtons>
                            <AnchorButton href="/login" className="primary">Start Free Trial</AnchorButton>
                            <Button type="button" className="white-outline">Book a Demo</Button> 
                        </CtaButtons>
                    </Container>
                </CtaBanner>
            </main>

            {/* FOOTER */}
            <FooterContainer>
                <Container>
                    <p>&copy; {new Date().getFullYear()} MediCare Connect. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </Container>
            </FooterContainer>
        </>
    );
};

export default Main;