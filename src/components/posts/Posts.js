import "./Posts.css";
import sanityClient from "../../client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  });
  return (
    <main className="Blog">
      <section>
        <h1 id="BL__Txt">My Blog Post's</h1>

        <div className="Post__Galla">
          {postData &&
            postData.map((post, index) => (
              <article className="Post__Card">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span className="Card" key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="Post__Image"
                    />
                    <span className="Card__Btm">
                      <h3 id="title">{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Posts;
