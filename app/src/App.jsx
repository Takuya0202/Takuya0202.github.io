import './App.css'
import Header from './components/header'
import Project from './components/Project'
import Prompt from './components/Prompt'
import { tokens } from './components/Tokens'
function App() {
  return (
    <>
      <Header />
      <main className='w-full h-full bg-[#1e1e1e] '>
        <div>
          <div className='flex justify-center'>
            <h1 className='w-auto p-4 text-white text-[80px] my-20'>Hello,Evryone!!!</h1>
          </div>
          <div className='flex justify-center '>
            <Prompt tokens={tokens}/>
          </div>
        </div>
        <div className='flex justify-center'>
            <h1 className='w-auto p-4 text-white text-[80px] my-20'>Project</h1>
        </div>
        <Project />
      </main>
    </>
  )
}

export default App
