import { verifyAccessToken } from "../utils/Token.js";

const requireToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1]; // ✅ Correct split
    const payload = verifyAccessToken(token); // ✅ Declare payload
    req.user = payload; // attach decoded user info (e.g., userId, email)

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

export default requireToken;
