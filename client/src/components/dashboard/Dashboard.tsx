import { useContext } from 'react';
import './Dashboard.css';
import { HealthContext } from '../../context/health-provider';

const Dashboard = () => {
	const status = useContext(HealthContext);
	return (
		<>
			<h1>Dashboard</h1>
			<p>Server: {status}</p>
		</>
	);
};

export default Dashboard;
