/* eslint-disable @next/next/no-img-element */
import AuthInput from "@/components/auth/AuthInput";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { WarningIcon } from "@/components/icons/WarningIcon";
import useAuth from "data/hooks/useAuth";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Authentication = () => {
  const { login, register, googleLogin } = useAuth();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const getImageSrc = async () =>
      await fetch("https://source.unsplash.com/random");

    getImageSrc().then((data) => setSrc(data.url));
  }, []);

  const showError = useCallback((message: string) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 5000);
  }, []);

  const submit = useCallback(async () => {
    try {
      mode === "login"
        ? await login(email, password)
        : await register(email, password);
    } catch (error) {
      showError(error?.message ?? "Unexpected error");
    }
  }, [email, login, mode, password, register, showError]);

  const toggleMode = useCallback(() => {
    setMode((currentMode) => (currentMode === "login" ? "register" : "login"));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        {src && (
          <img
            src={src}
            alt="authentication view random image"
            className="h-screen w-full object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 p-2 md:p-5 lg:w-1/3">
        <h1
          className={`
        text-xl font-bold mb-5
      `}
        >
          {mode === "login"
            ? "Enter your login data"
            : "Register with your data"}
        </h1>

        {error ? (
          <div
            className={`
            flex items-center
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
          `}
          >
            <WarningIcon />
            <span className="ml-3">{error}</span>
          </div>
        ) : null}

        <AuthInput
          type="email"
          label="Email"
          value={email}
          handleChange={setEmail}
          isMandatory
        />
        <AuthInput
          type="password"
          label="Password"
          value={password}
          handleChange={setPassword}
          isMandatory
        />
        <button
          onClick={submit}
          className={`
        w-full bg-indigo-500 hover:bg-indigo-400
        text-white rounded-lg px-4 py-3 mt-6
      `}
        >
          {mode === "login" ? "Enter" : "Register"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={googleLogin}
          className={`
        w-full bg-red-500 hover:bg-red-400
        text-white rounded-lg px-4 py-3 
      `}
        >
          <div className="flex justify-center">
            {mode === "login" ? "Enter with Google" : "Register with Google"}
            <div className="px-1 py-1 ml-2 bg-white rounded-full">
              <GoogleIcon />
            </div>
          </div>
        </button>

        {mode === "login" ? (
          <p className="mt-8 text-sm">
            New around here?
            <a
              onClick={toggleMode}
              className={`
              text-blue-500 hover:text-blue-700
              font-semibold cursor-pointer ml-2
            `}
            >
              Register for free!
            </a>
          </p>
        ) : (
          <p className="mt-8 text-sm">
            Already have an account?
            <a
              onClick={toggleMode}
              className={`
              text-blue-500 hover:text-blue-700
              font-semibold cursor-pointer ml-2 
            `}
            >
              Enter your credentials
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
