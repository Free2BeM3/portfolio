import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/singleposts/SinglePost";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post/:slug" component={SinglePost} />
        <Route path="/posts" component={Posts} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
