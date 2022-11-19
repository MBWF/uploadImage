import { globalStyles } from './globalCss';
import { Home } from './Pages/home';

function App() {
  globalStyles();
  return (
    <>
      <Home />
    </>
  );
}

export default App;
