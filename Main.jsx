import React from 'react';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/GlobalStyles';
import { Link } from 'react-router-dom';

// --- 1. Reusable Styled Components ---

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

// Define a common style for all buttons
const Button = styled(Link)`
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
    justify-content: flex-end; 
    align-items: center;
  }
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`;

const MenuIcon = styled.img`
    margin-right: 15px; 
    cursor: pointer;
    width: 45px; 
    height: 45px;
`;

const TopRightButton = styled.button`
    background-color: #F3F4F6;
    color: #374151;
    border: none;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        background-color: #E5E7EB;
    }
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
    return (
        <>
            <HeaderContainer>
                <Container>
                    <div className="top-bar-placeholder"></div> 
                    <nav>
                        <NavList>
                            <li className="nav-item">
                                <MenuIcon src="Menu.jpg" alt="Menu" width="100" height="100" />
                            </li>
                        </NavList>
                    </nav>
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
                                <Button to="/login" className="primary">Get Started Today</Button> 
                                <Button as="button" className="secondary">Learn More</Button> 
                            </HeroActions>
                            <HeroStats>
                                <StatItem>
                                    <StatIcon src="hpiaa.jpg" alt="HIPAA Compliant" width="32" height="32" />
                                    <span>HIPAA Compliant</span>
                                </StatItem>
                                <StatItem>
                                    <StatIcon src="clock.jpg" alt="24/7 Available" width="32" height="32" />
                                    <span>24/7 Available</span>
                                </StatItem>
                                <StatItem>
                                    <StatIcon src="users.jpg" alt="2,500+ Users" width="32" height="32" />
                                    <span>2,500+ Users</span>
                                </StatItem>
                            </HeroStats>
                        </HeroContent>
                        <HeroImage>
                            <img src="medicalsystem.jpg" alt="Doctor showing X-ray to patient" />
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
                            <Button to="/login" className="primary">Start Free Trial</Button>
                            <Button as="button" className="white-outline">Book a Demo</Button> 
                        </CtaButtons>
                    </Container>
                </CtaBanner>
            </main>

            {/* FOOTER */}
            <FooterContainer>
                <Container>
                    <p>&copy; 2025 MediCare Connect. All rights reserved.</p>
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