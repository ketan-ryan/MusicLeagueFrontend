import React from 'react';

function Login() {
    const backendUrl = process.env.REACT_APP_API_URL;
    const redirectUrl = `${backendUrl}/auth/spotify`;

    return (
        <div className="App">
            <header className="App-header">
                <a className="btn-spotify" href={redirectUrl} >
                    Login with Spotify
                </a>
            </header>
        </div>
    );
}

export default Login;

