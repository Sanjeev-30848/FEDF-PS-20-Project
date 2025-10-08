import React from 'react';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/GlobalStyles';
import { Link } from 'react-router-dom';

// --- 1. Styled Components ---

const LoginBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${COLORS.backgroundLightGrey};
  padding: 20px;
`;

const LoginCard = styled.div`
  background-color: ${COLORS.backgroundMain};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 440px;
`;

const LoginContainerWrapper = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackToHome = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4B5563;
  font-weight: 500;
  margin-bottom: 30px;
  align-self: flex-start;
  margin-left: 20px;
  text-decoration: none;

  &:hover {
    color: ${COLORS.primary};
  }
`;

const LoginHeader = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const LoginIconHeart = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #E0E7FF; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px auto;
  
  & svg {
    width: 28px;
    height: 28px;
    fill: ${COLORS.primary}; 
  }
`;

const LoginTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const LoginSubtitle = styled.p`
  color: #6B7280;
  font-size: 0.95rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${COLORS.textDark};
  margin-bottom: 8px;
  margin-top: 20px;
`;

const FormField = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  background-color: ${COLORS.inputBg};
  font-size: 1rem;
  color: ${COLORS.textDark};

  &::placeholder {
    color: ${COLORS.placeholder};
  }
`;

const RoleSelect = styled.select`
  ${FormField}
  /* Custom select arrow added via background-image */
  appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="%239CA3AF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 40px; 
`;

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordToggle = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  & svg path {
    stroke: ${COLORS.placeholder};
  }
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background-color: #1F2937; 
  color: ${COLORS.textLight};
  font-size: 1rem;
  margin-top: 30px;
  
  &:hover {
    background-color: ${COLORS.textDark};
  }
`;

const ForgotPasswordLink = styled(Link)`
  display: block;
  text-align: right;
  font-size: 0.9rem;
  margin-top: 15px;
  color: ${COLORS.primary};
  &:hover {
    text-decoration: underline;
  }
`;

const DemoAccess = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Divider = styled.div`
  position: relative;
  height: 1px;
  background-color: ${COLORS.border};
  margin: 30px 0;
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${COLORS.backgroundMain};
    padding: 0 10px;
    color: ${COLORS.placeholder};
    font-size: 0.85rem;
  }
`;

const DemoButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 15px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const DemoButton = styled.button`
  background-color: ${COLORS.backgroundLightGrey};
  color: ${COLORS.textDark};
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: ${COLORS.primary};
    background-color: #E0E7FF; 
  }
`;

// --- 2. The Component ---

const LoginPage = () => {
  return (
    <LoginBody>
      <LoginContainerWrapper>
        {/* Link back to the home page */}
        <BackToHome to="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </BackToHome>

        <LoginCard>
          <LoginHeader>
            <LoginIconHeart>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
              </svg>
            </LoginIconHeart>
            <LoginTitle>Welcome Back</LoginTitle>
            <LoginSubtitle>Sign in to your MediCare Connect account</LoginSubtitle>
          </LoginHeader>

          <form onSubmit={(e) => e.preventDefault()}>
            <FormLabel htmlFor="role-select">I am a</FormLabel>
            <RoleSelect id="role-select" name="role">
              <option value="">Select your role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="administrator">Administrator</option>
            </RoleSelect>

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormField type="email" id="email" placeholder="Enter your email" required />

            <FormLabel htmlFor="password">Password</FormLabel>
            <PasswordInputWrapper>
              <FormField type="password" id="password" placeholder="Enter your password" required />
              <PasswordToggle>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 10C16.892 11.8384 15.8202 13.4687 14.3725 14.7373C12.9248 16.006 11.1444 16.8661 9.25 17.21C7.3556 16.8661 5.5752 16.006 4.12752 14.7373C2.67984 13.4687 1.60803 11.8384 1 10C1.60803 8.16161 2.67984 6.53133 4.12752 5.26274C5.5752 3.99414 7.3556 3.13401 9.25 2.79C11.1444 3.13401 12.9248 3.99414 14.3725 5.26274C15.8202 6.53133 16.892 8.16161 17.5 10Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </PasswordToggle>
            </PasswordInputWrapper>

            <SignInButton type="submit">Sign In</SignInButton>
          </form>

          <ForgotPasswordLink to="#">Forgot your password?</ForgotPasswordLink>
          
          <DemoAccess>
            <Divider><span>or</span></Divider>
            <p>Quick Demo Access</p>
            <DemoButtons>
              <DemoButton>Demo Patient</DemoButton>
              <DemoButton>Demo Doctor</DemoButton>
              <DemoButton>Demo Pharmacist</DemoButton>
            </DemoButtons>
          </DemoAccess>
        </LoginCard>
      </LoginContainerWrapper>
    </LoginBody>
  );
};

export default LoginPage;