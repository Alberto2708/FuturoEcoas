import React, { useEffect } from "react";
import backgroundImage from "./BG.png"; // Import your background image file
import chatGPTLogo from "./chatGPT_logo.svg.png"; // Import the ChatGPT logo image
import Form from "./components/Form.jsx";
import Cookies from 'js-cookie';
const Login = () => {


  

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 mt-12 p-4">ECOA</h1>
        <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white">
          <Form />
        </div>
      </div>
      <a href="https://openai.com" target="blank" ><img
        src={chatGPTLogo}
        alt="ChatGPT Logo"
        className="absolute top-0 right-0 m-4 h-12"
      />
      </a>
    </div>
  );
}
export default Login;

