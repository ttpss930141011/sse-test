import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type dataType = {
    msg: string;
}

function App() {
    const [messages, setMessages] = useState<string[]>([]);
    useEffect(() => {
        const eventSource = new EventSource('http://localhost:3000/stream');
        eventSource.onmessage = ({data}) => {
            const parsedData: dataType = JSON.parse(data);
            console.log('New message', parsedData);
            setMessages((messages) => [...messages, parsedData.msg]);
        };
    }, []);

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={reactLogo} className="App-logo" alt="logo"/>
                    <img src={viteLogo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>App.tsx</code> and save to test HMR updates.
                    </p>
                </header>
                <div>
                    <h2>Messages</h2>
                    <ul>
                        {messages.map((message, index) => (
                            <li key={index}>{message}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App
