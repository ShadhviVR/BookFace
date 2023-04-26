import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // import axios library
import logo from "../../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent default form submission behavior

    try {
      // send a POST request to the backend's login endpoint with the email and password fields
      const response = await axios.post("http://localhost:8080/api/login", { email, password });

      // if the request succeeds, store the JWT token in localStorage and navigate to the landing page
      localStorage.setItem("token", response.data);
      navigate("/main");
    } catch (error) {
      // if the request fails, log the error to the console and display an error message to the user
      console.error(error);
      alert("Login failed! Please check your email and password and try again.");
    }
  };

  return (
    <>
      <Link to="/landing">
        <header className="relative z-[1] w-56">
          <img className="h-full w-full" src={logo} alt="logo" />
        </header>
      </Link>
      <main>
        <section
          className={`absolute top-0  min-h-screen w-full bg-[url("/bg.png")] bg-cover  `}
        ></section>
        <section className="absolute inset-0 bg-gradient-to-b from-zinc-900/50"></section>
        <br/> <br/> <br/> <br/>
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto w-[380px] rounded-lg bg-black/75 p-16"
        >
          <article className="text-gray-300">
            <h1 className="mb-4 text-center text-4xl text-white">Log In</h1>
            <section className="mb-4 flex flex-col gap-4">
              <input
                className="rounded-md bg-zinc-500 p-2 outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                className="rounded-md bg-zinc-500 p-2 outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <Link to="/forgetpswd" className="text-white hover:underline">
                Forgot Password?
              </Link>
              <div className="flex justify-center items-center">
              
              <button className="my-8 rounded-md bg-primary-200 p-2 font-semibold text-white outline-none">
                Log In
              </button>
              
              </div>
            </section>
            <p>
              New to FlipFlop?{" "}
              <Link to="/signup" className="text-white hover:underline">
                Sign Up
              </Link>
            </p>
          </article>
        </form>
      </main>
    </>
  );
}
