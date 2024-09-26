import React from 'react';

const Blog = () => (
  <article className="blog" data-page="blog">
    <header>
      <h2 className="h2 article-title">Blog</h2>
    </header>

    <section className="blog-posts">
      <ul className="blog-posts-list">
        {/* Replace the below items with dynamic content as needed */}
        {[1, 2, 3].map(num => (
          <li key={num} className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={`./assets/images/blog-${num}.jpg`} alt={`blog ${num}`} loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Feb 23, 2022</time>
                </div>
                <h3 className="h3 blog-item-title">Blog Post {num}</h3>
                <p className="blog-text">Blog post summary here.</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </article>
);

export default Blog;
