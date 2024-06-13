import { Header } from "./components/header/Header";

import "./assets/global.css";
import { Post } from "./components/posts/Post";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
