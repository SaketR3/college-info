import { useState } from 'react';
import './App.css'
import Button from './Button';
import Advice from './Advice';

export default function App() {
  const [showAdvice, setShowAdvice] = useState(false);
  const [prompt, setPrompt] = useState('');
  
  function generateAdvice(prompt) {
    setShowAdvice(false);
    setTimeout(() => {setShowAdvice(true)}, 0);
    setPrompt(prompt);
  }

  return (
    <div>
      <h1>College Personal Assistant</h1>
      <p className="info">Use the power of generative AI to help you navigate through your college journey!</p>
      <p className="info">Simply click a button and receive advice!</p>

      <div className="buttons">
        <Button text="How can I get involved on campus?" prompt="How can I get involved on campus in college?" generateAdvice={generateAdvice} />
        <Button text="How can I improvement my time management?"  prompt="How can I improvement my time management in college?" generateAdvice={generateAdvice} />
        <Button text="What steps should I take to get an internship?" prompt="What steps should I take to get an internship in college?" generateAdvice={generateAdvice} />
        <Button text="How do I prepare for a career fair?" prompt="How do I prepare for a career fair in college?" generateAdvice={generateAdvice} />
        <Button text="What steps should I take to get started with research?" prompt="What steps should I take to get started with research in college?" generateAdvice={generateAdvice} />
        <Button text="How can I get involved with hackathons?" prompt="How can I get involved with hackathons in college?" generateAdvice={generateAdvice} />
        <Button text="What types of extracurriculars are there in college?" prompt="What types of extracurriculars are there in college?" generateAdvice={generateAdvice} />
        <Button text="What types of events are there in college?" prompt="What types of events are there in college?" generateAdvice={generateAdvice} />
      </div>
      
      {showAdvice && <Advice prompt={prompt} />}
    </div>
  );
}

