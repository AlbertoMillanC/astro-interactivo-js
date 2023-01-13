import React, { useEffect, useState } from 'react';
import '../getAdvice'

const AdeviseGenerator = ({advice}) => {
  const[response,setResponse] = useState(advice)

  const onClickButton = async ()=> {
    const response = await getAdvice()
    setResponse(response)
  }


  return (
    <div class="container grid byline mt-10">
      <label >{response}</label>
      <button onClick={()=> onClickButton()}>Get advice</button>
      <small class="text-zinc-500">Copyright  </small>
      <small class="text-zinc-500">Alberto Millán &copy;{currentYear} </small>
      <small class=" text-zinc-500">🚀 Construido con Astro</small> 
    </div>
  );
}

export default App;