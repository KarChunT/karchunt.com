import QuoteDisplay from '@/components/QuoteDisplay';
import { getRandomQuote } from '@/lib/quotes';

const page = () => {
  const initialQuote = getRandomQuote();
  return <QuoteDisplay initialQuote={initialQuote} />;
};

export default page;
