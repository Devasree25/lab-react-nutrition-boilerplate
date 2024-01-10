import React, { useState } from "react" ;

function FoodBox(props){
    let{ele, index}= props;
    let {img, name, cal} = ele;

    const [input, setInput] = useState(0);
    const[quantity, setQuantity] = useState(0);



    function quantityHandler(){
        setQuantity(input)

    }


    return(
        <>
        <div className="food-box">
        <div className="1div">
            <div className="img">
            <img src={img} alt="itempic" />

            </div>
            
            <div className="name">
                <span> {name} </span>
                <span>{cal}</span>
            </div>
            <input type= "number" 
            onChange={(e)=>{setInput(e.target.value)}}
            value={input}
            
            />
               
             <div id="reset">
                <div className="add">
                <button onClick={quantityHandler}>+</button>
            <p className="para">{quantity} {name}={cal*quantity}</p>

                </div>
             

            <button onClick={()=>{
                setInput(0)
                setQuantity(0)
            }}>reset</button>
                
             </div>
            

            
            
        </div>

        </div>
        
        
        </>
    )
}
export default FoodBox;