import React from 'react';
import './App.css';
import LoginForm from './LoginForm';

function App() {
    return (
        <div className="App">
            <h1>Login</h1>
            <LoginForm />
            <App/>
        </div>
    );
}

export default App;