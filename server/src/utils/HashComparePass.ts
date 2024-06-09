import bcrypt from "bcryptjs";

export const HashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const hashpassword = await bcrypt.hash(password, salt);
  return hashpassword;
};

export const ComparePassword = async (password: string, enteredPassword: string) => {
  const isMatch = await bcrypt.compare(password, enteredPassword);
  return isMatch;
};
