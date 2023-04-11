import './app.scss';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import StakingPage from 'pages/homePage/StakingPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
        }}
      />
      <Switch>
        <Route exact path="/" component={StakingPage} />
      </Switch>
    </Router>
  );
}

export default App;
