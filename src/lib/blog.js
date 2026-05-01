const markdownFiles = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const parseFrontmatterValue = (value) => {
  const trimmed = value.trim();

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
      .filter(Boolean);
  }

  return trimmed.replace(/^['"]|['"]$/g, "");
};

const parseMarkdown = (raw) => {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const closingFence = raw.indexOf("\n---", 3);

  if (closingFence === -1) {
    return { data: {}, content: raw };
  }

  const frontmatter = raw.slice(3, closingFence).trim();
  const content = raw.slice(closingFence + 4).trimStart();
  const data = frontmatter.split("\n").reduce((acc, line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) return acc;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);

    return {
      ...acc,
      [key]: parseFrontmatterValue(value),
    };
  }, {});

  return { data, content };
};

const toSlug = (path) =>
  path
    .split("/")
    .pop()
    .replace(/\.md$/, "");

const normalizeTags = (tags) => {
  if (Array.isArray(tags)) return tags;
  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
};

const estimateReadingTime = (content) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
};

const parseDate = (date) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
};

const posts = Object.entries(markdownFiles)
  .map(([path, raw]) => {
    const { data, content } = parseMarkdown(raw);
    const slug = data.slug || toSlug(path);

    return {
      slug,
      title: data.title || slug.replaceAll("-", " "),
      description: data.description || "",
      date: data.date || "",
      displayDate: parseDate(data.date),
      tags: normalizeTags(data.tags),
      published: data.published !== false,
      readingTime: data.readingTime || estimateReadingTime(content),
      content,
    };
  })
  .filter((post) => post.published)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const getBlogPosts = () => posts;

const getBlogPost = (slug) => posts.find((post) => post.slug === slug);

export { getBlogPost, getBlogPosts };
