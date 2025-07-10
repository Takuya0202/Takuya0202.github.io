import "./App.css";
import Blogs from "./components/Blogs";
import Border from "./components/common/borders/Border";
import SpanText from "./components/common/SpanText";
import Footer from "./components/Footer";
import Header from "./components/header";
import Project from "./components/Project";
import Prompt from "./components/Prompt";
import Stacks from "./components/Stacks";
import { tokens } from "./components/Tokens";
function App() {
  return (
    <div className="bg-black" id="home">
      <Header />
      <main className="w-full h-full bg-black ">
        <div>
          {/* <div className="w-[80%] mx-auto text-[100px] mt-40 mb-20 flex items-center justify-center" id="about">
            <h2 className="gradient-text-gray-to-white">I'm</h2>
            <h2 className="gradient-text-rainbow">Takuya0202</h2>
          </div> */}

          <div className="flex justify-center items-center">
            <div
              className="p-4 mb-20 mt-40 flex items-center text-[100px] space-x-5"
              id="about"
            >
              <SpanText text={"Takuya0202"} highlightIndices={[1, 7]} />
            </div>
          </div>
          <div className="w-full flex justify-center space-x-20 items-center">
            <Prompt tokens={tokens} />
            <Stacks />
          </div>
        </div>
        <div className="flex justify-center my-20" id="project">
          <SpanText text="Project" highlightIndices={[2]} />
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
