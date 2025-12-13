import { glob } from 'glob';
import { QUIZ } from '@/constants';
import QuizClient from '@/components/QuizClient';

export const metadata = {
  title: 'Quiz',
};

const page = () => {
  const dirs = glob.sync('public/quiz/**/');
  const items: QuizItem[] = dirs
    .slice(1)
    .map((dir) => {
      // Replace all backslashes with forward slashes and ensure leading slash
      const src = '/' + dir.replace(/\\/g, '/').replace(/^\/+/, '');
      const parts = src.split('/');
      const folderName = parts[3];

      if (folderName && QUIZ[folderName]) {
        return {
          ...QUIZ[folderName],
          slug: folderName,
        };
      }

      return null; // Return null if no match is found
    })
    .filter(Boolean); // Filter out null values

  return <QuizClient quizzes={items} />;
};

export default page;
