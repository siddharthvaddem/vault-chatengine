import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import dotenv from 'dotenv'
dotenv.config();
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
       
        <ChatEngine
            height="100vh"
            projectID="0103f467-d4d1-44be-b587-54a421dd0d35"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}

        />
    )
}

export default App
