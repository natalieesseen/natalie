import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export function getPostData(id) {
  // Get the current working directory
  const cwd = process.cwd();

  // Construct the relative file path based on the current working directory
  const fileName = path.join(cwd, 'src', 'content', `${id}.md`);

  // Read the content of the Markdown file
  const fileContents = fs.readFileSync(fileName, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = unified()
    .use(remarkParse)
    .use(remarkRehype, {allowDangerousHtml: true}) // Pass raw HTML strings through.
    .use(rehypeStringify, {allowDangerousHtml: true}) // Serialize the raw HTML strings
    .processSync(matterResult.content);
    
  const contentHtml = processedContent.toString();

  return {
    data: matterResult.data,
    content: contentHtml,
  };
}