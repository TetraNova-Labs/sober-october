import * as bcrypt from "bcrypt";

export const encodePassword = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};
