import "./blog.css"

const data = "05 December 2023";

function Blog() {
  return (
    <div className="blog-container">
      <span>OUR BLOG</span>
      <h1>Latest Blogs & News</h1>
      <div className="blog-img-container">
        <div className="blog-article-newsletter">
          <p>{data}</p>
          <h3>Bringing You Upto Speed in Mobile App</h3>
        </div>
        <div className="blog-article-phone">
          <p>{data}</p>
          <h3>Bringing You Upto Speed in Mobile App</h3>
        </div>
      </div>
      <div className="blog-sign-in">
        <div className="blog-newsletter-description">
          <h3>Newsletter</h3>
          <p>Sign-up today to enjoy awesome updates from us!</p>
        </div>
        <div className="blog-newsletter-subscribe">
          <form>
            <input type="text" placeholder="Your Email" />
            <button type="submit" className="blog-subscribe">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Blog;
