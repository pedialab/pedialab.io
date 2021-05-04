import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import matter from 'gray-matter';

const markdownToReactComponent = (markdown: string): JSX.Element => unified().use(parse).use(remark2react).processSync(markdown)
  .result as JSX.Element;

export { markdownToReactComponent, matter };
