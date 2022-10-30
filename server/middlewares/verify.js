// const jwt = require('jsonwebtoken');
// const appErrorHandler = require('../utils/appErrorHandler');


// exports.verifyJWT = (req, res, next) => {
//     try {  
//         const authHeader = req.headers['authorization'];
//         console.log(authHeader);
//         const token = authHeader.split(" ")[1];
//         console.log(token)
//         if (!token)
//         return next(new appErrorHandler('user is not authorized', 403));
//         const decoded = jwt.verify(token, process.env.SECRET)

//         req.userId = decoded.id;

//         if(!decoded) res.sendStatus(403)
//         next()  ; 
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(403);
//     };
// };





// exports.test = (req,res,next) =>{
//     console.log('this is a test middleware')
//     next();
// }