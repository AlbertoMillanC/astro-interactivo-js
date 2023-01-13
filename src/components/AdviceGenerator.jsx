import { useState } from "react"
import getAdvice from '../getAdvice';


const AdviceGenerator = ({advice}) => {
    const [response, setResponse] = useState(advice)

    const onClickButton = async () => {
        const response = await getAdvice()
        setResponse(response)

} 
    return (
        <div className="text-center ">
            <label className=" bg-blue-300 container text-center row-span-4 text-xl " >{response}</label>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => onClickButton()}>click button</button>
            
        </div>


    )
    }
export default AdviceGenerator