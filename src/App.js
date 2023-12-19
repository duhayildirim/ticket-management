import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom';
import Apply from './components/Apply';
import ApplyCheck from './components/ApplyCheck';
import Footer from './components/Footer';
import Login from './components/Login';
import Management from './components/Management';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import ApplyDetail from './components/ApplyDetail';
import ApplySuccess from './components/ApplySuccess';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/basvuru-olustur" component={Apply} />
            <Route path="/404" component={Page404} />
            <Route path="/basvuru-listesi" component={Management} />
            <Route path="/basvuru-sorgula" component={ApplyCheck} />
            <Route path="/admin" component={Login} />
            <Route path="/basvuru-detay" component={ApplyDetail} />
            <Route path="/basvuru-basarili" component={ApplySuccess} />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;




