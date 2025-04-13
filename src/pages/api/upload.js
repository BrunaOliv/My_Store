import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), '/public/uploads'),
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao processar o upload.' });
    }

    const file = files.file;
    const imagePath = `/uploads/${file[0].newFilename}`;

    return res.status(200).json({ message: 'Imagem enviada com sucesso!', imagePath });
  });
}
