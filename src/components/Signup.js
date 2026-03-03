import React from 'react';

function Signup() {

    function handleSignup(e) {

        e.preventDefault();

        const datas = new FormData(e.target);

        const newUser = {
            id: Date.now(),
            name: datas.get('name'),
            email: datas.get('email'),
            password: datas.get('password'),
            role: datas.get('role')
        };

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const exists = users.find((u) => u.email === newUser.email);

        if (exists) {
            alert("User already exists!");
            return;
        }

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        // alert("Signup Successful!");
        e.target.reset();
        window.location.href = "/login";
    }

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-3">Signup</h3>

                <form onSubmit={handleSignup}>

                    <label>Name:</label>
                    <input type="text" name="name" className="form-control mb-2" required />

                    <label>Email:</label>
                    <input type="email" name="email" className="form-control mb-2" required />

                    <label>Password:</label>
                    <input type="password" name="password" className="form-control mb-2" required />

                    <button type="submit" className="btn btn-success w-100">
                        Signup
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Signup;