import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

document.body.style.margin = '0';
document.getElementById('root')!.style.width = '100vw';
document.getElementById('root')!.style.height = '100vh';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
