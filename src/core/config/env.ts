import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  ENCRYPTION_KEY:
    process.env.ENCRYPTION_KEY || "12345678901234567890123456789012", // 32 chars
  ENCRYPTION_IV_LENGTH: 16,
};
