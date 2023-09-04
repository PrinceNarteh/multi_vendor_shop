import { Request } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as nanoid from 'nanoid';
const nano = nanoid.customAlphabet(nanoid.urlAlphabet, 16);

const UPLOAD_DIR = './upload/';

export const storageConfig = diskStorage({
  destination: UPLOAD_DIR,
  filename: (req: Request, file, cb) => {
    const ext = extname(file.originalname);
    cb(null, `${nano(16)}${ext}`);
  },
});
