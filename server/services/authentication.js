const jwt = require('jsonwebtoken');
const secret = 'Wtechy@123'; // Make sure to keep your secret key safe

const createTokenForUser = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

module.exports = {
  createTokenForUser,
};
