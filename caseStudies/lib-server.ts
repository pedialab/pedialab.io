import fs from 'fs';
import { join } from 'path';

const CASE_STUDY_ARTICLE_FOLDER = 'caseStudies';

const caseStudiesDir = join(process.cwd(), CASE_STUDY_ARTICLE_FOLDER);

type GetTitles = () => string[];

const getTitles: GetTitles = () => fs
  .readdirSync(caseStudiesDir)
  .filter((fileName) => fileName.endsWith('.md'))
  .map((fileName) => fileName.replace(/.md$/, ''));

type GetCaseStudyMd = (fileName: string) => string;

const getCaseStudyMd: GetCaseStudyMd = (fileName) => {
  const caseStudyMd = fs.readFileSync(
    join(caseStudiesDir, fileName.concat('.md')),
    'utf-8'
  );
  return caseStudyMd;
};

export { getTitles, getCaseStudyMd };
