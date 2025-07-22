import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // 初回チェック
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-black" id="home">
      <Header isMobile={isMobile} />
      <main className="w-full h-full bg-black ">
        <div>
          <div className="flex justify-center items-center" id="about">
            <div className="mb-24 mt-60 sm:mb-32 sm:mt-48" id="about">
              {isMobile ? (
                <SpanText
                  text={"Takuya0202"}
                  highlightIndices={[7]}
                  size={24}
                />
              ) : (
                <SpanText
                  text={"Takuya0202"}
                  highlightIndices={[8]}
                  size={80}
                />
              )}
            </div>
          </div>
          <div className="w-full sm:flex sm:justify-center sm:space-x-20 sm:items-center">
            <Prompt tokens={tokens} />
            <Stacks />
          </div>
        </div>
        <div className="flex justify-center my-20" id="project">
          {isMobile ? (
            <SpanText size={50} text="Project" highlightIndices={[2]} />
          ) : (
            <SpanText size={80} text="Project" highlightIndices={[2]} />
          )}
        </div>
        <Project />
        <div className="flex justify-center my-20" id="blog">
          <SpanText size={80} text="Blog" highlightIndices={[1]} />
        </div>
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
