import Header from './components/Header/Header';
import { DisplayTheme } from './types/globalTypes';

function App() {
	return <Header theme={DisplayTheme.DARK} />;
}

export default App;
