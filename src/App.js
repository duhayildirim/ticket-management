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
import { useLogin } from './context/UserContext';

function App() {
    const { canAccessRoute } = useLogin();

    const ProtectedRoute = ({ component: Component, path, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                canAccessRoute(path) ? (
                    <Component {...props} />
                ) : (
                    <>
                        {setTimeout(() => {
                            window.location.reload();
                        }, 100)}
                        <Redirect to="/admin" />
                    </>
                )
            }
        />
    );

    return (
        <>
            <ApplicationProvider>
                <Router>
                    <Navbar />
                    <Switch>
                        <Redirect exact from="/" to="/basvuru-olustur" />
                        <Route exact path="/basvuru-olustur" component={Apply} />
                        <Route path="/basvuru-sorgula" component={ApplyCheck} />
                        <Route path="/basvuru-basarili" component={ApplySuccess} />
                        <Route exact path="/admin" component={Login} />
                        <ProtectedRoute exact path="/admin/basvuru-detay/:code" component={ApplyDetail} />
                        <ProtectedRoute exact path="/admin/basvuru-listesi" component={Management} />
                        <Route path="*" component={Page404} />
                    </Switch>
                    <Footer />
                </Router>
            </ApplicationProvider>
        </>
    );
}

export default App;
