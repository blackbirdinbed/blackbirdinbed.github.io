import jwt from 'jwt-simple';
const TOKEN_KEY = 'Token-Auth';

export const TokenUtilities = {
	getUsername: function() {
		return localStorage.getItem("jwt") !== null
		? jwt.decode(localStorage.getItem("jwt"), TOKEN_KEY).username
		: 0;
	},
	getUserId: function() {
		return localStorage.getItem("jwt") !== null
		? jwt.decode(localStorage.getItem("jwt"), TOKEN_KEY).userId
		: 0;
	},
	getRoleId: function() {
		return localStorage.getItem("jwt") !== null
		? jwt.decode(localStorage.getItem("jwt"), TOKEN_KEY).roleId
		: 0;
	},
	logOut: function() {
		localStorage.removeItem("jwt");
	}
}
