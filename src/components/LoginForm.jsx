import { useState } from 'react';
import axios from 'axios';

const projectID = '04e21c77-123e-49dc-bd04-9f7a75a8ca17';





const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      

    

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Bir sorun var!');
    }
  };
  



  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">BOŞ Chat</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required  id="text"  />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Giriş yap </span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;