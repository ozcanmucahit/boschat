import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx'

import './App.css';

const projectID = '04e21c77-123e-49dc-bd04-9f7a75a8ca17';


const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

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

// infinite scroll, logout, more customizations...

export default App;