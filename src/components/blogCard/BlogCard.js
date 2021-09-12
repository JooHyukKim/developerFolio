import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ blog, isDark }) {

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li key={i} className="subTitle">
          {item}
        </li>
      ))
      : null;
  };

  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">

            <div className="go-arrow">→</div>
          </div>
          <ul className="desc-bullets-parent">
          <GetDescBullets descBullets={blog.descBullets} />
          </ul>
        </a>
      </div>
    </div>
  );
}
