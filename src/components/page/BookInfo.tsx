'use client';

import { useState } from 'react';
import { BOOKS } from '@/constants';
import BookCover from '@/components/shared/BookCover';
import { PulsatingButton } from '@/components/ui/pulsating-button';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import type {
  ToolbarProps,
  ToolbarSlot,
  TransformToolbarSlot,
} from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { motion } from 'framer-motion';

const BookInfo = ({ bookTitle }: { bookTitle: string }) => {
  const [showPdf, setShowPdf] = useState(false);
  const book: Book = BOOKS.find((book) => book.title === bookTitle)!;

  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    Download: () => <></>,
    DownloadMenuItem: () => <></>,
    Open: () => <></>,
    OpenMenuItem: () => <></>,
    Print: () => <></>,
    PrintMenuItem: () => <></>,
  });

  const renderToolbar = (
    Toolbar: (props: ToolbarProps) => React.ReactElement,
  ) => <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>;
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });
  const { renderDefaultToolbar } =
    defaultLayoutPluginInstance.toolbarPluginInstance;

  return (
    <div className="mt-14">
      {/* book overview */}
      <div className="flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-5xl font-semibold md:text-7xl">{book.title}</h1>

          <div className="text-light-100 mt-7 flex flex-row flex-wrap gap-4 text-xl">
            <p>
              By{' '}
              <span className="font-semibold text-primary">{book.author}</span>
            </p>

            <p>
              Category{' '}
              <span className="font-semibold text-primary">{book.genre}</span>
            </p>
          </div>

          <p className="text-light-100 mt-2 text-justify text-xl">
            {book.description}
          </p>

          <PulsatingButton
            className="mt-6 bg-white"
            onClick={() => setShowPdf(!showPdf)}
          >
            {showPdf ? 'Hide PDF' : 'Read this book'}
          </PulsatingButton>
        </div>

        <div className="relative flex flex-1 justify-center">
          <div className="relative">
            <BookCover
              variant="wide"
              className="z-10"
              coverColor={book.coverColor}
              coverImage={book.coverUrl}
            />

            <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
              <BookCover
                variant="wide"
                coverColor={book.coverColor}
                coverImage={book.coverUrl}
              />
            </div>
          </div>
        </div>
      </div>

      {/* pdf renderer */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: showPdf ? 1 : 0, height: showPdf ? '850px' : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="mt-16 overflow-hidden"
      >
        {showPdf && (
          <Worker workerUrl="/pdf-worker/pdf.worker.min.js">
            <Viewer
              fileUrl={book.pdfUrl}
              plugins={[defaultLayoutPluginInstance]}
              defaultScale={SpecialZoomLevel.ActualSize}
            />
          </Worker>
        )}
      </motion.div>
    </div>
  );
};

export default BookInfo;
