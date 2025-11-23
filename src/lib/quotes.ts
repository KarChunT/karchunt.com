export interface Quote {
  text: string;
  author: string;
  language: 'en' | 'zh';
}

export const quotes: Quote[] = [
  {
    text: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein',
    language: 'en',
  },
  {
    text: '天行健，君子以自强不息。',
    author: '周易',
    language: 'zh',
  },
];

export function getRandomQuote(filter: 'all' | 'en' | 'zh' = 'all'): Quote {
  const filteredQuotes =
    filter === 'all'
      ? quotes
      : quotes.filter((quote) => quote.language === filter);
  return filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
}
