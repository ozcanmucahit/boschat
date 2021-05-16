import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm'
import LOGOUT from './components/Logout'

import './App.css';

const projectID = '88ec11aa-ea55-49f8-ba5a-abe08ee3259e';

const App = () => {
  if (!localStorage.getItem('username')) return  <LoginForm/>   ;

  return (
   
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
 
    );
};


export default App;