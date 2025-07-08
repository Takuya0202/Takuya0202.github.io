import "./App.css";
import Blogs from "./components/Blogs";
import Border from "./components/common/borders/Border";
import Footer from "./components/Footer";
import Header from "./components/header";
import Project from "./components/Project";
import Prompt from "./components/Prompt";
import Stacks from "./components/Stacks";
import { tokens } from "./components/Tokens";
function App() {
  return (
    <div className="bg-black">
      <Header />
      <main className="w-full h-full bg-black ">
        <div>
          <div className="flex justify-center">
            <h1 className="w-auto p-4 text-white text-[80px] my-20" id="about">
              Hello,Evryone!!!
            </h1>
          </div>
          <div className="w-full flex justify-center space-x-5">
            <Prompt tokens={tokens} />
            <Stacks />
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="w-auto p-4 text-white text-[80px] my-20" id="project">
            Project
          </h1>
        </div>
        <Project />
        <div className="flex justify-center">
          <h1 className="w-auto p-4 text-white text-[80px] my-20" id="blog">
            Blogs
          </h1>
        </div>
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
