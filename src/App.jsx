import React, { useCallback, useState, useEffect, useRef } from "react";

const App = () => {
  const [password, setPassword] = useState("wxyzhgs");
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const passwordRef = useRef(null);
  // use ref for refernce to engage elements
  const passwordGenerator = useCallback(() => {
    //callback hook  for all optimization and chaages
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_-=|}{:;+'?><.,][~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [characterAllowed, numberAllowed, length]);
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 51);
  }, [password]);
  useEffect(() => {
    //for runnig on change component
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <div className="bg-sky-200 p-20">
      <div className="h-screen w-7/12 bg-sky-200 flex flex-col content-center gap-3 m-auto">
        <h1 className="text-3xl text-black  text-center mb-5 ">
          Password Generator
        </h1>
        <div className="flex ">
          <input
            value={password}
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="h-12 w-90 rounded-sm outline-none  text-yellow-400 text-4xl pb-2 selection:bg-green-700 selection:text-sky-400"
          />
          <span>
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-600 h-full active:bg-blue-500 hover:text-gray-600 rounded w-40 text-2xl text-white"
            >
              Copy
            </button>
          </span>
        </div>
        <div className="flex justify-evenly w-full text-yellow-700 text-lg">
          <input
            type="range"
            name="range"
            min={8}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-3/12 "
          />
          <span className="text-black-400">Lenght: {length}</span>
          <div className="flex gap-2 content-center">
            <input
              type="checkbox"
              onClick={() => setnumberAllowed(!numberAllowed)}
            />
            <label>Add Numbers</label>
          </div>
          <div className="flex gap-2 content-center">
            <input
              type="checkbox"
              onClick={() => setcharacterAllowed(!characterAllowed)}
            />
            <label>Add Characters </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
