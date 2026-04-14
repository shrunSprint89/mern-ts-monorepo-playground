import { ReactElement } from 'react';

export const ErrorMessage = (errorMsg: any): ReactElement => {
	return (
		<div>
			<h4>Oops! Something's not right!</h4>
			<br />
			<p>Error details:</p>
			<p>{JSON.stringify(errorMsg)}</p>
		</div>
	);
};
