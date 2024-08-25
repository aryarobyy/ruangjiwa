import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';
import connectDb from '@/libs/mongodb';

const storage = new GridFsStorage({
  db: connectDb,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: 'pdfs',
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

export default upload;
