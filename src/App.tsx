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
          <Post
            author="João"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore culpa suscipit ex consectetur voluptas totam temporibus inventore ipsa sequi nulla assumenda repudiandae eos illo, fugiat consequatur perferendis quo, aspernatur laboriosam."
          />
          <Post
            author="william"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore culpa suscipit ex consectetur voluptas totam temporibus inventore ipsa sequi nulla assumenda repudiandae eos illo, fugiat consequatur perferendis quo, aspernatur laboriosam."
          />
        </main>
      </div>
    </>
  );
}

export default App;
