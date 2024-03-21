
import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

const App = () => {
  return (
        <Routes>
          <Route exact path="/" component={Login} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/result" component={Result} />
        </Routes>
  );
};

export default App;
