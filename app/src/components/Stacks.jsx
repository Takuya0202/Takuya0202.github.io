import React from 'react'

const techs = ['django','fastapi','laravel','react','php','docker','git','python' , 'typescript' , 'javascript'];
const Stacks = () => {
  return (
    <div className='grid grid-cols-5 gap-4'>
      {techs.map((content,idx) => (
        <img src={`https://skillicons.dev/icons?i=${content}`} alt="" key={idx}/>
      ))}
    </div>
  )
}

export default Stacks
