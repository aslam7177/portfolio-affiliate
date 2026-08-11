import PageLayout from '../components/PageLayout';
import { blogPosts } from '../data/blog';
import './Blog.css';

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const Blog = () => {
  return (
    <PageLayout>
      <div className="page-content blog-page">
        <header className="page-header">
          <h1>Blog</h1>
          <p className="page-subtitle">Updates, learnings & work in progress</p>
        </header>

        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              {post.link && (
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-link">
                  Read more →
                </a>
              )}
            </article>
          ))}
        </div>

        <p className="blog-hint">
          To add posts, edit <code>src/data/blog.js</code>
        </p>
      </div>
    </PageLayout>
  );
};

export default Blog;
