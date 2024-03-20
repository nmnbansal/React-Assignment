import MainComponent from "./Components/MainComponent";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { UserProvider } from "./Contexts/UserContext";


function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div>
          <MainComponent />
        </div>
        </UserProvider>
    </ThemeProvider>
  );
}

export default App;
