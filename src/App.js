import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Classes from './components/classes/Classes';
import Timetable from './components/timetable/Timetable';
import Pricing from './components/pricing/Pricing';
import Coaches from './components/coaches/Coaches';
import News from './components/news/News';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/classes' component={Classes} />
          <Route exact path='/timetable' component={Timetable} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/instructors' component={Coaches} />
          <Route exact path='/news' component={News} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
