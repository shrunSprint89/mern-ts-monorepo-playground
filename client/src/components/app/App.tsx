import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import { ServerHealthProvider } from '../../context/health-provider';

function App() {
	return (
		<ServerHealthProvider>
			<BrowserRouter>
				<Navbar />

				<div className="p-3">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/products" element={<Dashboard />} />
						<Route path="/products/:id" element={<Dashboard />} />
					</Routes>
				</div>
			</BrowserRouter>
		</ServerHealthProvider>
	);
}

export default App;
