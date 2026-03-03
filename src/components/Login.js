import React from 'react';

function Login() {

    function handleLogin(e) {

        e.preventDefault();

        const datas = new FormData(e.target);

        const emailValue = datas.get('email');
        const passwordValue = datas.get('password');

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const validUser = users.find(
            (u) => u.email === emailValue && u.password === passwordValue
        );

        if (!validUser) {
            alert('Invalid Credentials');
            return;
        }

        sessionStorage.setItem('currentUser', JSON.stringify(validUser));

        e.target.reset();
        window.location.href = "/";
    }

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-3">Login</h3>

                <form onSubmit={handleLogin}>

                    <label>Email:</label>
                    <input type="email" name="email" className="form-control mb-3" required />

                    <label>Password:</label>
                    <input type="password" name="password" className="form-control mb-3" required />

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;