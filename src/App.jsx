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
    height: '100vh',
    backgroundColor: '#e0f7fa', // light teal background
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    padding: '30px',
    borderRadius: '15px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0, 128, 128, 0.3)',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#00796b', // deep teal
    marginBottom: '15px',
  },
  textarea: {
    width: '100%',
    color: '#004d40',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #b2dfdb', // soft teal border
    outline: 'none',
    marginBottom: '15px',
    resize: 'none',
    backgroundColor: '#e0f2f1', // very light teal
    transition: 'box-shadow 0.3s ease',
  },
  languageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    color: '#004d40', // dark teal
    marginBottom: '5px',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #b2dfdb',
    outline: 'none',
    backgroundColor: '#e0f2f1',
    color: '#004d40',
    width: '100%',
    maxWidth: '300px',
    transition: 'box-shadow 0.3s ease',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    color: '#ffffff',
    backgroundColor: '#00796b', // teal button
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#00695c', // slightly darker teal on hover
  },
  resultContainer: {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#e0f2f1', // soft teal for result background
    border: '1px solid #b2dfdb',
  },
  resultTitle: {
    fontSize: '18px',
    color: '#00796b',
    marginBottom: '10px',
  },
  resultText: {
    fontSize: '16px',
    color: '#004d40', // dark teal text
  },
};

export default App;
