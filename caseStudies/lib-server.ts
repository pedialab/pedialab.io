import fs from 'fs';
import { join, extname, basename } from 'path';

const CASE_STUDY_ARTICLE_FOLDER = 'caseStudies';

const caseStudiesDir = join(process.cwd(), CASE_STUDY_ARTICLE_FOLDER);

const loadAllMarkdownFileNames = (): string[] => fs
  .readdirSync(caseStudiesDir)
  .filter((fileName) => extname(fileName) === '.md')
  .map((fileName) => basename(fileName, '.md'));

const loadMarkdownFile = (fileName: string): string => {
  const caseStudyMd = fs.readFileSync(
    join(caseStudiesDir, fileName.concat('.md')),
    'utf-8'
  );
  return caseStudyMd;
};

export { loadAllMarkdownFileNames, loadMarkdownFile };
