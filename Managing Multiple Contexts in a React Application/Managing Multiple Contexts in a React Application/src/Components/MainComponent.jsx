import { useThemeContext } from "../Contexts/ThemeContext";
import { useUserContext } from "../Contexts/UserContext";


function MainComponent() {
  const { theme, toggleTheme } = useThemeContext();
  const { user, login, logout } = useUserContext();

  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ username: 'exampleUser' })}>Login</button>
      )}
    </div>
  );
}

export default MainComponent;
