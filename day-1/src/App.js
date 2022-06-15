import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [val, setVal] = useState(0)
  return (
    <div className="container h-screen bg-blue-200 m-auto rounded-xl box-border flex flex-col items-center justify-center">
      <div className="font-bold text-8xl my-5">
        {val}
      </div>
      <div className="flex w-full justify-center">
        <Button add={true} val = {val} setVal = {setVal}/>
        <Button val = {val} setVal = {setVal}/>
      </div>
    </div>
  );
}

export default App;
