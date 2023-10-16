import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filename = req.query.filename;

  if (!filename) {
    return res.status(400).end("filename should be specified");
  }

  let filePath = "src/assets/files/" + filename;

  if (fs.existsSync(filePath)) {
    const myFile = fs.readFileSync(filePath, "base64"); // by deafult binary

    res.setHeader("Content-Type", "application/pdf"); // (application/octet-stream) more general MIME type
    res.setHeader("Content-Length", myFile.length);

    //res.setHeader("Content-Disposition", 'inline; filename="xss.pdf"');
    res.setHeader("Content-Disposition", 'attachment; filename="xss.pdf"');

    res.setHeader("Cache-Control", "no-store");

    res.status(200).send({ file: myFile });
  } else {
    res.status(404).end("file not found");
  }
}
