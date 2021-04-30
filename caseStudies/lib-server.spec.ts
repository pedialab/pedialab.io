import fs from 'fs';
import { getTitles, getCaseStudyMd } from './lib-server';

jest.mock('fs');

describe('case studies server-side library', () => {
  it('read local folder to get markdown file names', () => {
    fs.readdirSync = jest.fn().mockReturnValue(['caseStudy_1.md', 'otherFile.ts', 'caseStudy_2.md']);

    expect(getTitles()).toEqual(['caseStudy_1', 'caseStudy_2']);
  });

  it('get case study markdown file by file name', () => {
    const mockMarkdown = `
    ---
    title: "meta title"
    ---
    # hello markdown
    `;
    fs.readFileSync = jest.fn().mockReturnValue(mockMarkdown);

    expect(getCaseStudyMd('caseStudy_1.md')).toBe(mockMarkdown);
  });
});
