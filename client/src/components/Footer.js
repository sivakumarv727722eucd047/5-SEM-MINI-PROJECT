import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Title>Quick Link</Title>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/dashboard">Dashboard</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Service</FooterLink>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <Title>Social Media Links</Title>
          <FooterLinks>
            <ExternalLink href="https://facebook.com" target="_blank">Facebook</ExternalLink>
            <ExternalLink href="https://twitter.com" target="_blank">X (formerly known as "Twitter")</ExternalLink>
            <ExternalLink href="https://instagram.com" target="_blank">Instagram</ExternalLink>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <Title>Contact Information</Title>
          <p>Email: contact@example.com</p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: transparent;
  padding: 2rem 1rem;
  border-top: 1px solid #eaeaea;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  color: black;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;
