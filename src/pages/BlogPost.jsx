import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getBlogPost } from "../lib/blog";

const BlogPost = ({ slug }) => {
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <main className="blog-page">
        <section className="section-padding">
          <div className="blog-container blog-empty-state">
            <p className="section-kicker">Missing note</p>
            <h1 className="display-title blog-title">Post not found</h1>
            <p className="blog-lede">
              This Markdown note is not published yet or the URL is incorrect.
            </p>
            <a href="/blog" className="button-secondary">
              Back to blog
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="blog-page">
      <article className="blog-article section-padding">
        <div className="blog-container blog-article-shell">
          <a href="/blog" className="terminal-link">
            ← Back to all notes
          </a>
          <header className="blog-article-header">
            <div className="blog-card-meta">
              <span>{post.displayDate}</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="display-title blog-article-title">{post.title}</h1>
            <p>{post.description}</p>
            <div className="blog-tags" aria-label="Post tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </header>

          <div className="blog-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
