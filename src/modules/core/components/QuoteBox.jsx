import React from 'react';

export function QuoteBox({ quote, author }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-soft border-l-4 border-primary-500">
      <blockquote className="italic text-neutral-700">{quote}</blockquote>
      {author && <p className="text-right text-sm text-neutral-500 mt-2">— {author}</p>}
    </div>
  );
}