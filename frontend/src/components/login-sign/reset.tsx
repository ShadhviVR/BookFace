import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from "axios";

export default function Forgot() {
    // const { signIn, user } = useAuth() as AuthContextType;
     const navigate = useNavigate()

     

     return (
        <>
        <Link to="/landing">
          <header className="relative z-[1] w-28">
            <img className="h-full w-full" src={logo} alt="logo" />
          </header>
          </Link>
          <main>
            <section
              className={`absolute top-0 -z-[1] min-h-screen w-full bg-[url("/bg.png")] bg-cover`}
            ></section>
            <section className="absolute inset-0 bg-gradient-to-b from-zinc-900/50"></section>
            <br/> <br/> <br/> <br/> <br/> <br/>
            <form
              onSubmit={()=> console.log("Hello")}
              className="relative mx-auto w-[380px] rounded-lg bg-black/75 p-16"
            >
              <article className="text-gray-300">
                <h1 className="mb-4 text-center text-4xl text-white">Reset New Password</h1>
                <section className="mb-4 flex flex-col gap-4">
                <input
                    className="rounded-md bg-zinc-500 p-2 outline-none"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter new password"
                    required
                  />
                  <input
                    className="rounded-md bg-zinc-500 p-2 outline-none"
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm new password"
                    required
                  />
                  <div className="flex justify-center items-center">
                  <Link to="/api/auth/login">
                  <button className="my-8 rounded-md bg-subMain p-2 font-semibold text-white outline-none">
                    Submit
                  </button>
                  </Link>
                  </div>
                </section>
              </article>
            </form>
          </main>
        </>
      );
    }
    