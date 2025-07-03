import { useContext, createContext } from 'react';
import BoxA from './components/BoxA/BoxA';
import BoxB from './components/BoxB/BoxB';

const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Привет, {user.name}!</h1>
      <p>Текущая тема: {theme}</p>
      <BoxA />
      <BoxB />
    </div>
  );
}

export default function WrappedApp() {
  const user = { name: 'Username' };
  const theme = 'light';

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <App />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
