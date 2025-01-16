const jwt = require("jsonwebtoken");
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({ message: "Unauthorized: Token missing or invalid" });
    }

    const token = authHeader.split(' ')[1]; // Extract the token after 'Bearer'

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use the secret from .env
        req.userId = decoded.userId; // Attach the user ID to the request
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = {
    authMiddleware,
};
