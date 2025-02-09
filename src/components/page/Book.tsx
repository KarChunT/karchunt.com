import { BOOKS } from '@/constants';
import BookCard from '@/components/shared/BookCard';

const Book = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight">
          I read <span className="text-primary">Books</span>
        </h1>
        <p className="text-center text-lg">
          The road to freedom shares and introduces the books that I read from
          here.
        </p>
      </div>

      <div className="py-10">
        <div className="flex flex-wrap justify-center gap-10">
          {BOOKS.map((book, index) => {
            return <BookCard key={index} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Book;
