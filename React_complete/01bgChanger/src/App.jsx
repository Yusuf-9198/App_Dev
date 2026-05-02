import { useState } from "react"
import BtnColored from "./component/BtnColored"

function App() {
  const [colour, setColour] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: colour }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 text-white rounded-3xl bg-white">
          <button className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "red" }} onClick={() => setColour("red")}> red  </button>
          <button className="outline-none px-4 py-1 rounded-full " style={{ backgroundColor: "blue" }} onClick={() => setColour("blue")} >blue</button>
          <button className="outline-none px-4 py-1 rounded-full " style={{ backgroundColor: "green" }} onClick={() => setColour("green")} >green</button>
          <button className="outline-none px-4 py-1 rounded-full " style={{ backgroundColor: "black" }} onClick={() => setColour("black")}>black</button>
          <button className="outline-none px-4 py-1 rounded-full text-black" style={{ backgroundColor: "pink" }} onClick={() => setColour("pink")}>pink</button>
          <button className="outline-none px-4 py-1 rounded-full " style={{ backgroundColor: "purple" }} onClick={() => setColour("purple")} >purpul</button>
          <button className="outline-none px-4 py-1 rounded-full " style={{ backgroundColor: "orange" }} onClick={() => setColour("orange")} >orange</button>
          <button className="outline-none px-4 py-1 rounded-full " style={{ backgroundColor: "brown" }} onClick={() => setColour("brown")} >brown</button>
          <button className="outline-none px-4 py-1 rounded-full text-black" style={{ backgroundColor: "yellow" }} onClick={() => setColour("yellow")} >yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-black" style={{ backgroundColor: "Grey" }} onClick={() => setColour("Grey")} >Grey</button>
          <button className="outline-none px-4 py-1 rounded-full text-black" style={{ backgroundColor: "Lavender" }} onClick={() => setColour("Lavender")} >Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-black" style={{ backgroundColor: "Olive" }} onClick={() => setColour("Olive")} >Olive</button>

          {/* Best Way :- Using Componenets{BtnColored} */}
          <BtnColored colour="red" setColour={setColour} />
          <BtnColored colour="blue" setColour={setColour} />
          <BtnColored colour="green" setColour={setColour} />
          <BtnColored colour="black" setColour={setColour} />
          <BtnColored colour="brown" setColour={setColour} />
          <BtnColored colour="yellow" setColour={setColour} txtColor="black" />
          <BtnColored colour="Grey" setColour={setColour} />
          <BtnColored colour="olive" setColour={setColour} />
          <BtnColored colour="pink" setColour={setColour} txtColor="black" />
          <BtnColored colour="purple" setColour={setColour} />

        </div>
      </div>
    </div>
  )
}

export default App