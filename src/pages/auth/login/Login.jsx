import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { DB } from "../../../Global/Features";
import Layout from '../../../components/layout/Layout';

const Login = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DB(["Hello World"]));
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://avantgardefinance-api.onrender.com/loginA", {
        accountNumber,
        password,
      });
      const { message, data, token } = response.data;
      toast.success(message);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", token);
      nav("/dashboard");
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        toast.error(message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Layout>
        <section className="relative pb-20">
          <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto">
            <div className="flex items-center h-full wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
              <img className="lg:max-w-lg mx-auto" src="/imgs/illustrations/space.svg" alt="Monst" />
            </div>
          </div>
          <div className="container">
            <div className="relative flex flex-wrap pt-12">
              <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
                <div className="w-full max-w-lg mx-auto lg:mx-0 my-auto wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                  <span className="text-sm text-blueGray-400">Sign In</span>
                  <h4 className="mb-6 text-3xl">Welcome to Avant Garde Finance</h4>
                  <form onSubmit={handleLogin}>
                    <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                      <input
                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                        type="number"
                        placeholder="Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                      />
                      <MdAccountBalance className="h-6 w-6 ml-4 my-auto text-blueGray-300" />
                    </div>
                    <div className="flex mb-6 px-4 bg-blueGray-50 rounded border border-gray-200 relative">
                      <input
                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button type="button" className="ml-4" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <FaEyeSlash className="h-6 w-6 text-blueGray-300" />
                        ) : (
                          <FaEye className="h-6 w-6 text-blueGray-300" />
                        )}
                      </button>
                    </div>
                    <div className="float-left mb-6 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                      <label className="inline-flex text-xs">
                        <input type="checkbox" className="form-checkbox" checked />
                        <span className="ml-2">
                          I agree to{" "}
                          <Link to="/about" legacyBehavior>
                            <a className="underline hover:text-blueGray-500">Police privacy</a>
                          </Link>{" "}
                          and{" "}
                          <Link to="/about" legacyBehavior>
                            <a className="underline hover:text-blueGray-500">Terms of Use</a>
                          </Link>
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </form>
                </div>
                <div className="w-full mx-auto text-center">
                  <p>
                    Don't Have an Account?{" "}
                    <Link to="/signup" legacyBehavior>
                      <a className="inline-block text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                        Sign Up now
                      </a>
                    </Link>
                  </p>
                </div>
                <div className="w-full mx-auto text-center">
                  <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-700">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <ToastContainer />
    </>
  );
};

export default Login;
