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
  const [statueResult , setResult] = useState(false)

    const gererClick = (symbol) => {
    if (["+", "-", "*", "/"].includes(value.slice(-1)) && ["+", "-", "*", "/"].includes(symbol)) {
      return;
    }

    if (statueResult) {
      setResult(false);
      if(!["+", "-", "*", "/", "=", "AC", "DE"].includes(symbol)) {
        setValue(symbol);
        return;
      }
    }

    switch (symbol) {
      case "=":
        try {
          setValue(eval(value).toString());
        } catch (error) {
          setValue("Erreur");
        }
        setResult(true);
        break;

      case "AC":
        setValue("");
        break;

      case "DE":
        setValue(value.toString().slice(0, -1));
        break;


        default:
          if (value === "" && (symbol === "00" || symbol === ".")) {
            return;
          }
          if (value === "0") {
            if (symbol === "00" || symbol === "0") return; 
            
            if (symbol !== ".") {
              setValue(symbol); 
              return;
            }
          }
          if (["+", "-", "*", "/"].includes(value.slice(-1)) && symbol === ".") {
            return;
          }

          setValue(value + symbol);
          break;
    }
  };

  return (
    <div className="container">
      <h1>Calculatrice Simple</h1>
      <div className="calculatrice">
        <form action="">
          <div className="resultat">
            <input type="text" value={value} />
          </div>
          <div className="clavier">
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
          </div>
        </form>
      </div>
    </div>
  )
}


export default App
