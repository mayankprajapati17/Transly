import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('auto');
  const [targetLanguage, setTargetLanguage] = useState('es');

  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(
          inputText
        )}`
      );
      const translation = response.data[0][0][0];
      setTranslatedText(translation);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Translation failed. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌍 Transly</h1>

        <textarea
          rows="4"
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={styles.textarea}
        />

        <div style={styles.languageContainer}>
          <label style={styles.label}>Translate from:</label>
          <select
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
            style={styles.select}
          >
            <option value="auto">Auto-Detect</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh-CN">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="ar">Arabic</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
          </select>
        </div>

        <div style={styles.languageContainer}>
          <label style={styles.label}>Translate to:</label>
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            style={styles.select}
          >
            <option value="es">Spanish</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh-CN">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="ar">Arabic</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
          </select>
        </div>

        <button onClick={translateText} style={styles.button}>
          Translate
        </button>

        {translatedText && (
          <div style={styles.resultContainer}>
            <h2 style={styles.resultTitle}>Translation</h2>
            <p style={styles.resultText}>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Updated styles with a fresh teal and navy color scheme
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw', // Full width of the viewport
    height: '100vh', // Full height of the viewport
    backgroundColor: '#e0f7fa', // light teal background
    fontFamily: 'Arial, sans-serif',
    margin: 0, // Remove default margin
  },
  card: {
    width: '90%', // Adjust for responsiveness
    maxWidth: '600px',
    padding: '30px',
    borderRadius: '15px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0, 128, 128, 0.3)',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#00796b',
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '8px',
    color:'#004d40',
    border: '1px solid #b2dfdb',
    outline: 'none',
    marginBottom: '15px',
    resize: 'none',
    backgroundColor: '#e0f2f1',
  },
  languageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  label: {
    fontSize: '14px',
    color: '#004d40',
    marginBottom: '8px',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #b2dfdb',
    backgroundColor: '#e0f2f1',
    color: '#004d40',
    width: '100%',
    maxWidth: '300px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    color: '#ffffff',
    backgroundColor: '#00796b',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  resultContainer: {
    marginTop: '25px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#e0f2f1',
    border: '1px solid #b2dfdb',
  },
  resultTitle: {
    fontSize: '20px',
    color: '#00796b',
    marginBottom: '10px',
  },
  resultText: {
    fontSize: '16px',
    color: '#004d40',
  },
};


export default App;
