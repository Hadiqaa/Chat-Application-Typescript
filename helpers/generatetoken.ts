import jwt from 'jsonwebtoken';

console.log("hello checking!!", process.env.REACT_APP_JWT_SECRET);

const generateToken = (id: number): string => {
  return jwt.sign({ id }, process.env.REACT_APP_JWT_SECRET || '');
};

export default generateToken;
