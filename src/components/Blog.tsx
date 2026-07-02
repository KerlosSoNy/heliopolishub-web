import { blogPosts } from "@/data/products";

export default function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.title + post.dateISO}>
              <a href="#">
                <img src={post.img} alt={post.alt} width={300} className="blog-banner" />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  {post.category}
                </a>

                <a href="#">
                  <h3 className="blog-title">{post.title}</h3>
                </a>

                <p className="blog-meta">
                  By <cite>{post.author}</cite> / <time dateTime={post.dateISO}>{post.date}</time>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
