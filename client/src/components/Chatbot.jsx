// src/components/Chatbot.jsx
import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import chatbotIcon from '../assets/images/chatbot-icon.png'; // Update this path based on your folder structure

const Chatbot = () => {
  const [showBot, setShowBot] = useState(false);

  const steps = [
    {
      id: '1',
      message: 'Hello! Welcome to the faculty assistance bot. What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: 'facultyId',
    },
    {
      id: 'facultyId',
      message: 'Nice to meet you, {previousValue}! What is your faculty ID?',
      trigger: 'facultyIdInput',
    },
    {
      id: 'facultyIdInput',
      user: true,
      trigger: 'assistance',
    },
    {
      id: 'assistance',
      message: 'How can I assist you today?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'missedClass', label: 'Missed Class', trigger: 'missedClass' },
        { value: 'permission', label: 'Permission', trigger: 'permission' },
      ],
    },
    {
      id: 'missedClass',
      message: 'Please provide the reason for missing the class.',
      trigger: 'reason',
    },
    {
      id: 'permission',
      message: 'Please provide the reason for your request.',
      trigger: 'reason',
    },
    {
      id: 'reason',
      user: true,
      trigger: 'thankYou',
    },
    {
      id: 'thankYou',
      message: 'Thank you for the information. We will process your request.',
      end: true,
    },
  ];

  // Custom styles for the chatbot
  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#007bff',
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: '#007bff',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <div>
      {/* Button to toggle chatbot visibility */}
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => setShowBot(!showBot)}
      >
        <img
          src={chatbotIcon}
          alt="Chatbot"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          }}
        />
      </button>

      {/* Chatbot component */}
      {showBot && (
        <div style={{ position: 'fixed', bottom: '80px', right: '20px', zIndex: 1000 }}>
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
