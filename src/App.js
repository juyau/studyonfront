import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import Home from "./pages/Home";
import Course from "./pages/Course";
import Manage from "./pages/Manage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/course/:id" component={Course} />
          <Route exact path="/manage/course" component={Manage} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
