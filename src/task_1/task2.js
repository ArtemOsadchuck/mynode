import fs from "fs";
import path from "path";
import csv from "csvtojson";
import { stdout } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const readStream = fs.createReadStream(`${__dirname}/csv/csv.csv`);

export const scvReader = () => {
  return csv()
    .fromStream(readStream)
    .on("data", (chunk) => {
      stdout.write(chunk.toString());
      stdout.write("\n");
    });
};

scvReader();
