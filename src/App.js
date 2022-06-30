import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PostsList from "./components/PostsList";
import CreatePost from "./components/CreatePost";
import ViewPost from "./components/ViewPost";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="ui raised very padded text container segment">
      <Router>
        <div className="ui basic segment">
          <div className="ui center aligned segment">
            <Link to="/" className="ui icon button">
              <i className="home orange icon"></i>
            </Link>
            <Link to="/posts/new" className="positive ui button">
              Создать пост
            </Link>
          </div>
        </div>
        <div className="ui basic segment">
          <Switch>
            <Route path="/posts/new" component={CreatePost} />
            <Route path="/posts/:id" component={ViewPost} />
            <Route path="/" exact component={PostsList} />
            <Route path="*" component={Page404} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;