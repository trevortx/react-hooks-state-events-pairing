import video from "../data/video.js";
import Info from "./Info.js"
import Comments from "./Comments.js"
import Iframe from "./Iframe.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Iframe video={video} />
      <Info video={video} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
