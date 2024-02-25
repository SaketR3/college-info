import OpenAI from 'openai';
import "dotenv"
import { useEffect, useState } from 'react';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true
});

export default function Advice(props) {
    const [advice, setAdvice] = useState([]);
    const [showAdvice, setShowAdvice] = useState(false);
    
    const prompt = props.prompt + "Please seperate each point with the word 'Step'. Include an introduction and be conversational, but don't include any ending remarks.";

    useEffect(() => {
        (async () => {
            const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
            });
            const apiResponse = chatCompletion.choices[0].message.content;

            setAdvice(apiResponse.split("Step"));
            setShowAdvice(true);
        })();
    }, []);
    
    return (<>
        {showAdvice ? 
            <ul>
              {advice.map((step, index) => 
                index == 0 ? <p className="intro" key={index}>{step}</p> :
                <li key={index}>{step}</li>
              )}
            </ul>
            : 
            <div>
              <p>Loading...</p>
            </div>}
    </>);
}