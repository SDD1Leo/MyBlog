const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGenerator = (username,email,isAdmin) => { 
    const payload = {
        username: username,
        email: email,
        isAdmin: isAdmin,
    };

    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'5hr'});
};

module.exports = jwtGenerator;