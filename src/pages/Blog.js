import React from 'react';
import blogConfig from '../config/blogConfig'

const Blog = () => {

  const blogPosts = [ ...blogConfig.blogPosts];

  blogPosts.forEach((obj , idx ) => {
    obj.image = require(`../assets/images/blogs/blog-${idx+1}.jpg`); 
  });

  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map(post => (
            <li key={post.id} className="blog-post-item">
              <a href={post.link} target="_blank" rel="noreferrer">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{new Date(post.date).toDateString()}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
