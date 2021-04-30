import fs from "fs";
import { join } from "path";

const caseStudiesDir = join(process.cwd(), "caseStudies");

type GetTitles = () => string[];

const getTitles: GetTitles = () =>
  fs
    .readdirSync(caseStudiesDir)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/.md$/, ""));

type GetCaseStudyMd = (fileName: string) => string;

const getCaseStudyMd: GetCaseStudyMd = (fileName) => {
  const caseStudyMd = fs.readFileSync(
    join(caseStudiesDir, fileName.concat(".md")),
    "utf-8"
  );
  return caseStudyMd;
};

export { getTitles, getCaseStudyMd };
