const JWT = require('jsonwebtoken');

function AuthenticateToken(req, res, next) {
	const AUTH_HEADER = req.headers['authorization'];
	const TOKEN = AUTH_HEADER && AUTH_HEADER.split(' ')[1];

	if(TOKEN == null)
		return res.sendStatus(401);

	/* Success */
	JWT.verify(TOKEN, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if(err)
			return res.sendStatus(403);

		/* Success */
		req.user = user;
		next();
	});
};

module.exports = AuthenticateToken;
