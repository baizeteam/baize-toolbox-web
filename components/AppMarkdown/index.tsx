/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReactMarkdown from "react-markdown";

export default function AppMarkdown({ markdownContent }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-3xl mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl mb-4">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl mb-3">{children}</h3>,
          h4: ({ children }) => <h4 className="text-lg mb-3">{children}</h4>,
          p: ({ children }) => <p className="mb-2 text-gray-600">{children}</p>,
          li: ({ children }) => (
            <li className="list-disc mb-2 ml-8 text-gray-600">{children}</li>
          ),
          img: ({ src, alt }) => (
            <img src={src} alt={alt} className="mb-2 rounded-lg" />
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-indigo-500 hover:underline">
              {children}
            </a>
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
