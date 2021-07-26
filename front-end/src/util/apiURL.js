export const apiURL = () => {
	return window.location.hostname === 'localhost'
		? 'http://localhost:3333'
		: 'https://agile-basin-65767.herokuapp.com';
};
