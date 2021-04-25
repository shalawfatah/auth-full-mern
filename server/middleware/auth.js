
import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.cookies.token
        if(!token) return res.status(401).json({message: 'Unauthorized to access'})
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified.user
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message: 'Unauthorized'})
    }
}

export default auth










// function auth(req, res, next) {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified.user;

//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ errorMessage: "Unauthorized" });
//   }
// }

// export default auth