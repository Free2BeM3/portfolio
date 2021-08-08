import React, { useState, useEffect } from "react";
import "./SinglePost.css";
import sanityClient from "../../client";
import { useParams } from "react-router";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { sin } from "prelude-ls";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SinglePost() {
  const [singlePost, setsinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setsinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <div className="SinglePost">
      <div className="Post__Top">
        <div className="Post__Author">
          <img
            id="author__image"
            src={urlFor(singlePost.authorImage).url()}
            alt={singlePost.name}
          />
          <h3>Author: {singlePost.name}</h3>
        </div>
        <div>
          <h1>{singlePost.title}</h1>
        </div>
      </div>
      <div className="Post__Body">
        <img src={singlePost.mainImage.asset.url} alt="" />
        <div className="post__content">
          <div>
            <BlockContent
              blocks={singlePost.body}
              projectId="mvovq5mh"
              dataset="production"
            />
          </div>
        </div>
      </div>
      {/* <h1>{singlePost.title}</h1>
      <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} />
      <p>{singlePost.name}</p>
      <div className="post__content">
        <img src={singlePost.mainImage.asset.url} alt="" />
        <div className="post__body">
          <div>
            <BlockContent
              blocks={singlePost.body}
              projectId="mvovq5mh"
              dataset="production"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SinglePost;
