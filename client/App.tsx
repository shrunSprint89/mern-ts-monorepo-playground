import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

export const App = (): ReactElement => {
	return (
		<BrowserRouter>
			<Navbar />

			<div className="p-3">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
