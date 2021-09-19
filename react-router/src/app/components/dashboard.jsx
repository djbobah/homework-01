import { Switch, Link, Route } from "react-router-dom";
import Edit from "./edit";
import Stats from "./stats";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/edit">edit</Link>
        </li>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/dashboard" component={Stats} />
        <Route path="/dashboard/edit" component={Edit} />
      </Switch>
    </div>
  );
};

export default Dashboard;
