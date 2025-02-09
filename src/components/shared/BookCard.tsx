import Link from 'next/link';
import BookCover from '@/components/shared/BookCover';

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="">
      <Link href={book.url}>
        <BookCover coverColor={book.coverColor} coverImage={book.coverUrl} />
        <div className="xs:max-w-40 mt-4 max-w-28">
          <p className="xs:text-xl mt-2 line-clamp-1 text-base font-semibold text-white">
            {book.title}
          </p>
          <p className="xs:text-base mt-1 line-clamp-1 text-sm italic text-neutral-300">
            {book.genre}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
