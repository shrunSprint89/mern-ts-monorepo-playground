import axios from 'axios';
import { createContext, ReactElement, useEffect, useState } from 'react';
import { Props } from '../types/common-types';

export const HealthContext = createContext('Not OK');
export const ServerHealthProvider = ({ children }: Props): ReactElement => {
	const [status, setStatus] = useState('');

	useEffect(() => {
		axios
			.get('/api/health')
			.then(res => setStatus(res.data.status === 'ok' ? 'Running' : 'Not running'));
	}, []);

	return <HealthContext.Provider value={status}>{children}</HealthContext.Provider>;
};
