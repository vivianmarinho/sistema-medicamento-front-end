import './App.css';
import RoutesApp from "./Route/authenticationRoute";
import { AuthProvider } from "./Service/authService";
import GlobalStyle from "./style/global";

function App() {
  return (
    <AuthProvider>
    <RoutesApp />
    </AuthProvider>
  );
}

export default App;
