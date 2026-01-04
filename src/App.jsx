import { useState } from 'react'
import './App.css'

function Touch({ value, onClick, className }) { 
  return (
    <input 
      type="button" 
      value={value} 
      onClick={() => onClick(value)} 
      className={className} 
    />
  );
}

function App() {
  const [value, setValue] = useState("")

  const gererClick = (symbol) => {
    if (["+","-","*","/"].includes(value.slice(-1)) && ["+","-","*","/"].includes(symbol)) {
      return;
    }
    switch (symbol) {
      case "=":
        try {
          setValue(eval(value).toString())
        } catch (error) {
          setValue("Le calcul n'est pas valide")
        }
        break;
      case "AC":
        setValue("")
        break;
      case "DE":
        setValue(value.toString().slice(0, -1))
        break;
      case "+" || "-" || "*" || "/":
        setValue(value + symbol)
        break;
      default:
        setValue(value + symbol)
        break;

    }

  }

  return (
    <div className="container">
      <div className="calculatrice">
        <form action="">
          <div className="resultat">
            <input type="text" value={value}/>
          </div>
          <div className="touches">
            <Touch value={"AC"} onClick={gererClick}/>
            <Touch value={"DE"} onClick={gererClick}/>
            <Touch value={"."} onClick={gererClick}/>
            <Touch value={"/"} onClick={gererClick} />
          </div>
          <div className="touches">
            <Touch value={"7"} onClick={gererClick}/>
            <Touch value={"8"} onClick={gererClick}/>
            <Touch value={"9"} onClick={gererClick}/>
            <Touch value={"*"} onClick={gererClick}/>
          </div>
          <div className="touches">
            <Touch value={"4"} onClick={gererClick}/>
            <Touch value={"5"} onClick={gererClick}/>
            <Touch value={"6"} onClick={gererClick}/>
            <Touch value={"-"} onClick={gererClick}/>
          </div>
          <div className="touches">
            <Touch value={"1"} onClick={gererClick}/>
            <Touch value={"2"} onClick={gererClick}/>
            <Touch value={"3"} onClick={gererClick}/>
            <Touch value={"+"} onClick={gererClick}/>
          </div>
          <div className="touches">
            <Touch value={"0"} onClick={gererClick}/>
            <Touch value={"00"} onClick={gererClick}/>
            <Touch value={"="} onClick={gererClick} className="egal"/>
          </div>

        </form>
      </div>
    </div>
  )
}

export default App
