import { useState } from "react"


function PriceClculationMap(){
    const [price ,setPrice]=useState("")
    const [unit ,setUnit]=useState("")

    
    const handleEdit=(e)=>{
        const enteredPrice=e.target.value
    setPrice(enteredPrice)
    setUnit(enteredPrice*40)
    }
   

    return(
    <div>
    <p className="amountoption-p">
    <select className="amountoption">
                 <option value="">Unit</option>
                <option value="">Amount(N)</option>
              </select>
            </p>
              <input className="price-input" onChange={handleEdit}  value={price} type="text" />=
              <input className="price-input" value={unit} type="text" />
    </div>
    )
}
export default PriceClculationMap