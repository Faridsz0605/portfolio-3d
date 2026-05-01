import { getBlogPosts } from "../lib/blog";

const BlogIndex = () => {
  const posts = getBlogPosts();

  return (
    <main className="blog-page">
      <section className="blog-hero section-padding">
        <div className="blog-container">
          <p className="section-kicker">Engineering field notes</p>
          <div className="blog-hero-grid">
            <div>
              <h1 className="display-title blog-title">Blog</h1>
              <p className="blog-lede">
                Notes on MLOps, Python, infrastructure, AI systems, and the
                lessons that only show up when you build things seriously.
              </p>
            </div>
            <aside className="blog-note-card">
              <span className="mono-label">Source</span>
              <p>
                Written in Markdown and synced with Obsidian. The same notes
                used for thinking become the published blog.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="blog-list-section px-5 pb-24 md:px-12 xl:px-20">
        <div className="blog-container">
          <div className="blog-list">
            {posts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-card-meta">
                  <span>{post.displayDate}</span>
                  <span>{post.readingTime}</span>
                </div>
                <a href={`/blog/${post.slug}`} className="blog-card-title">
                  {post.title}
                </a>
                <p>{post.description}</p>
                <div className="blog-tags" aria-label="Post tags">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogIndex;
