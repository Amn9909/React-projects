import React, { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [pass, setPass] = useState("aman");
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const newPass = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (symbol) str += "@#";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(randomIndex);
    }
    setPass(password);
    console.log(pass);
  }, [length, number, symbol]);

  const savePass = async () => {
    alert(`${pass} saved !`);
  };

  const copyPass = () => {
    console.log("pass copied", pass);
  };

  useEffect(() => {
    console.log(" this is new pass >>>>", pass)
  }, [pass,length]);

  useEffect(() => {
    console.log("as the value changes >>", pass);
  }, [pass]);

  return (
    <>
      <div>
        <h1 className="bg-gray-600 p-2 m-2 text-center font-extrabold text-white text-4xl rounded-xl">
          the password generator
        </h1>
        <div className="bg-gray-500 text-center rounded-3xl m-2 text-white font-extrabold">
          {pass}
        </div>
        <div className="bg-gray-500 flex items-center justify-center text-white p-2 m-2 rounded-xl">
          <input
            value={length}
            type="range"
            min="1"
            max="30"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <h3 className="ml-2">Choose password length {length}</h3>
          <div className="checkbox m-2 p-2 border-s-black">
            <input
              className="m-4 p-2"
              type="checkbox"
              checked={number}
              onChange={() => setNumber(!number)}
            />
            <label htmlFor="">Add Number</label>
          </div>
          <div className="checkbox m-2 p-2 border-s-black">
            <input
              className="m-4 p-2"
              type="checkbox"
              checked={symbol}
              onChange={() => setSymbol(!symbol)}
            />
            <label htmlFor="">Add Symbol</label>
          </div>
        </div>

        <div className="flex p-2 m-2 justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
            onClick={newPass}
          >
            Generate Password
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-2"
            onClick={savePass}
          >
            Save Password
          </button>
        </div>
        <div className="flex align-middle justify-center">
          <button
            className="bg-black text-white rounded-3xl m-2 p-4"
            onClick={copyPass}
            value={pass}
          >
            copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
