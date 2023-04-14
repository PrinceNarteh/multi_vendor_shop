import multer from "multer";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads/");
  },
  filename: async (req, res, cb) => {
    const filename = nanoid();
    cb(null, `${filename}.png`);
  },
});

export const upload = multer({ storage });
