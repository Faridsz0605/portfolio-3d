import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join } from "node:path";

const OBSIDIAN_BLOG_DIR = "/home/faris/Documents/obsidian/portfolio/blog";
const PROJECT_BLOG_DIR = new URL("../src/content/blog/", import.meta.url);

const ensureDirectory = (path) => {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
};

const getMarkdownFiles = (directory) => {
  if (!existsSync(directory)) return [];

  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      return getMarkdownFiles(path);
    }

    return extname(path) === ".md" ? [path] : [];
  });
};

ensureDirectory(OBSIDIAN_BLOG_DIR);
ensureDirectory(PROJECT_BLOG_DIR);

const markdownFiles = getMarkdownFiles(OBSIDIAN_BLOG_DIR);

markdownFiles.forEach((filePath) => {
  copyFileSync(filePath, new URL(basename(filePath), PROJECT_BLOG_DIR));
});

console.log(
  `Synced ${markdownFiles.length} Markdown file${markdownFiles.length === 1 ? "" : "s"} from Obsidian to src/content/blog.`
);
