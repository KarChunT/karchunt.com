'use client';
import React, { useEffect, useRef } from 'react';

const useScript = (params: any) => {
  const { url, theme, issueTerm, repo, ref } = params;

  useEffect(() => {
    const commentScript = document.createElement('script');
    commentScript.async = true;
    commentScript.src = url;
    commentScript.setAttribute('theme', theme);
    commentScript.setAttribute('issue-term', issueTerm);
    commentScript.setAttribute('crossorigin', 'anonymous');
    commentScript.setAttribute('repo', repo);

    if (ref.current.children.length === 0) {
      ref.current.appendChild(commentScript);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const Comments = () => {
  const comment = useRef(null);

  useScript({
    url: 'https://utteranc.es/client.js',
    theme: 'github-dark',
    issueTerm: 'title',
    repo: 'KarChunT/posts-comments',
    ref: comment,
  });

  return (
    <div className="mt-6 w-full">
      <div ref={comment} />
    </div>
  );
};

export default Comments;
