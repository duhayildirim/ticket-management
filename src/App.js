import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom';
import Apply from './components/Apply';
import ApplyCheck from './components/ApplyCheck';
import Footer from './components/Footer';
import Login from './components/Login';
import Management from './components/Management';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import ApplyDetail from './components/ApplyDetail';
import ApplySuccess from './components/ApplySuccess';
import { ApplicationProvider } from './context/ApplicationContext';
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <>
            <UserProvider>
                <ApplicationProvider>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Redirect exact from="/" to="/basvuru-olustur" />
                            <Route exact path="/basvuru-olustur" component={Apply} />
                            <Route path="/basvuru-listesi" component={Management} />
                            <Route path="/basvuru-sorgula" component={ApplyCheck} />
                            <Route path="/admin" component={Login} />
                            <Route path="/basvuru-detay/:code" component={ApplyDetail} />
                            <Route path="/basvuru-basarili" component={ApplySuccess} />
                            <Route path="*" component={Page404} />
                        </Switch>
                        <Footer />
                    </Router>
                </ApplicationProvider>
            </UserProvider>
        </>
    );
}

export default App;




