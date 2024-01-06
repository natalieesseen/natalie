import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostData(id) {
  // Get the current working directory
  const cwd = process.cwd();

  // Construct the relative file path based on the current working directory
  const fileName = path.join(cwd, 'src', 'content', `${id}.md`);

  // Read the content of the Markdown file
  const fileContents = fs.readFileSync(fileName, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    content: matterResult.content,
    data: matterResult.data,
  };
}