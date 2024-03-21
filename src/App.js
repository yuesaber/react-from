import React, { useState } from 'react';
import './App.css';
import fbImage from './assets/fb.png';
import xImage from './assets/x.png';
import ggImage from './assets/gg.png';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" className={isLogin ? '' : 'move'}></div>
          <button
            type="button"
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={handleToggle}
          >
            Login
          </button>
          <button
            type="button"
            className={`toggle-btn ${isLogin ? '' : 'active'}`}
            onClick={handleToggle}
          >
            Register
          </button>
        </div>
        <div className="social-icons">
          <img src={fbImage} alt="Facebook" />
          <img src={xImage} alt="X" />
          <img src={ggImage} alt="Google" />
        </div>
        <form className="input-group" id={isLogin ? 'login' : 'register'}>
          <input type="text" className="input-field" placeholder={isLogin ? 'username or email' : 'username'} required />
          {!isLogin && <input type="email" className="input-field" placeholder="email" required />}
          <input type="password" className="input-field" placeholder="password" required />
          {!isLogin && (
            <React.Fragment>
              <input type="checkbox" className="check-box" /><span>I agree terms & conditions</span>
            </React.Fragment>
          )}
          <button type="submit" className="submit-btn">{isLogin ? 'Login' : 'Register'}</button>
        </form>
      </div>
    </div>
  );
}

export default App;
