import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // console.log({ handleLogin });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    // two way binding
    e.preventDefault();
    handleLogin(email, password);
    // console.log(`Email: ${email}`);
    // console.log(`Password: ${password}`);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-4 text-xl  outline-none bg-transparent placeholder:text-gray-400  rounded-full "
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-4 text-xl  outline-none bg-transparent placeholder:text-gray-400 mt-3 rounded-full "
            type="password"
            placeholder="Enter your password"
          />
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-3">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
