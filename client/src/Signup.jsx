import React from 'react'

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Regrister</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your Name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input
                    type="password"
                    placeholder="Enter your Password"
                    autoComplete="off"
                    name="password"
                    className="form-control rounded-0"
                    />
                </div>
                <button type="submit" className="btn btn-primary border w-100  rounded-0 text-decoration-none">
                    Register
                </button>
                <p>Already have an Account?</p>
                <button type="submit" className="btn bg-info border w-100  rounded-0 text-decoration-none">
                    Login
                </button>
            </form>
        </div>
    </div>
  );
}

export default Signup
