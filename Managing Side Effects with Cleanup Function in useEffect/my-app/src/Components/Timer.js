import { useEffect, useState } from "react";

export function Timer(){
    const [count,setCount] = useState(10);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setCount((prev) => {
                if(prev===1){
                    clearInterval(intervalId)
                }
                return prev-1;
            })
        },1000)

        return () =>{
            clearInterval(intervalId)
        }
    },[])

    return (
        <div>
          <h3>Timer: {count}</h3>
        </div>
      );
}