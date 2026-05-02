import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [addNum, setaddNum] = useState(false)
  const [addChar, setaddChar] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (addNum) str += "0123456789"
    if (addChar) str += "!@#$%^&*(){[}]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, addChar, addNum, setpassword])
  useEffect(() => {
    passwordGenerator()
  }, [length, addChar, addNum, passwordGenerator])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 4)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex s
        
        hadow rounded-lg overflow-hidden md-4'>
          <input
            type="text"
            value={password}
            className='outline-none bg-white w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={addNum}
              id="numInput"
              onChange={() => {
                setaddNum((prev) => !prev);
              }}
            />
            <label htmlFor='numInput'> Nunber</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={addChar}
              id="charInput"
              onChange={() => {
                setaddChar((prev) => !prev);
              }}
            />
            <label htmlFor='charInput' > Characters</label>

          </div>
        </div>
      </div >
    </>
  )
}

export default App
