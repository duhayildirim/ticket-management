import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/admin" />
            )
        }
    />
);

function App() {
    const user  = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <UserProvider>
                <ApplicationProvider>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Redirect exact from="/" to="/basvuru-olustur" />
                            <Route exact path="/basvuru-olustur" component={Apply} />
                            <Route path="/basvuru-sorgula" component={ApplyCheck} />
                            <PrivateRoute
                                path="/basvuru-detay/:code"
                                component={ApplyDetail}
                                isAuthenticated={user.isActive}
                            />
                            <PrivateRoute
                                path="/basvuru-listesi"
                                component={Management}
                                isAuthenticated={user.isActive}
                            />
                            <Route path="/basvuru-basarili" component={ApplySuccess} />
                            <Route path="/admin" component={Login} />
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
