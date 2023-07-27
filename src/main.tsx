/* eslint-disable unicorn/filename-case, import/default */
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import './main.css';

createRoot(document.querySelector('#root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
