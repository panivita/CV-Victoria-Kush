import React from "react";
import { Helmet } from "react-helmet";

export const MetaTags = () => {
  const name = "CV Victoria Kush";
  const content =
    "CV Victoria Kush. I am an ambitious problem solver with a passion for web development, and I would like to join a team of like-minded developers. I am thorough and precise in everything I do and have a keen interest in technology, web development, and user experience. As someone who takes responsibility for their personal development, I am continually evaluating and upgrading my skills.";
  const imageUrl =
    "https://secure.gravatar.com/avatar/3da283f44646867ed9c7e7e022340300?size=150";
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{name}</title>
      <meta name="description" content={content} />

      {/*Google / Search Engine Tags*/}
      <meta itemProp="name" content={name} />
      <meta itemProp="description" content={content} />
      <meta itemProp="image" content={imageUrl} />

      {/*Facebook Meta Tags*/}
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content={imageUrl} />

      {/*Twitter Meta Tags*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:description" content={content} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};
