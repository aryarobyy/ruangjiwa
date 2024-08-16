import jwt from "jsonwebtoken";

const jwtGenerate = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.NEXT_PUBLIC_JWT_SECRET, {
		expiresIn: "15d",
	});

	const cookie = `jwt=${token}; HttpOnly; Max-Age=${15 * 24 * 60 * 60}; Path=/; Secure; SameSite=Strict`;


	return {token, cookie};
};

export default jwtGenerate;
