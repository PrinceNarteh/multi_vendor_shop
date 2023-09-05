import { unlink } from 'fs';

export default function deleteFile(filename: string) {
  const filePath = `upload/${filename}`;
  unlink(filePath, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
  });
}
