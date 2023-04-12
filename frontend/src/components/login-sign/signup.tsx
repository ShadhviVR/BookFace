import React, { FormEvent, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Registration() {
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconf, setPasswordConfirmation] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        username,
        email,
        password,
        passwordconf,
      });
      console.log(response.data);
      navigate("/api/auth/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed! Please check your email and password and try again.");
    }
  }

  return (
    <>
      <Link to="/landing">
        <header className="relative z-[1] w-56">
          <img className="h-full w-full" src={logo} alt="logo" />
        </header>
      </Link>
      <main>
        <section
          className={`absolute top-0 -z-[1] min-h-screen w-full bg-[url("/bg.png")] bg-cover`}
        ></section>
        <section className="absolute inset-0 bg-gradient-to-b from-zinc-900/50"></section>
        <br/> <br/>
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto w-[380px] rounded-lg bg-black/75 p-16"
        >
          <article className="text-gray-300">
            <h1 className="mb-8 text-center text-4xl text-white">Sign Up</h1>
            <section className="mb-4 flex flex-col gap-4">
              <input
                className="rounded-md bg-zinc-500 p-2 outline-none"
                type="name"
                name="name"
                id="name"
                placeholder="Enter name"
                required
                value={username}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="rounded-md bg-zinc-500 p-2 outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className="rounded-md bg-zinc-500 p-2 outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                className="rounded-md bg-zinc-500 p-2 outline-none"
                type="password"
                name="password"
                id="passwordconf"
                placeholder="Confirmation Password"
                required
                value={passwordconf}
                onChange={(event) => setPasswordConfirmation(event.target.value)}
              />
              <div className="flex justify-center items-center">
              
              <button className="my-8 rounded-md bg-primary-200 p-2 font-semibold text-white outline-none">
                Sign Up
              </button>
              
              </div>
            </section>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-white hover:underline">
                Log In
              </Link>
            </p>
          </article>
        </form>
      </main>
    </>
  );
}

