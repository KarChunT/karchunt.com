// export { NotFoundPage as default } from 'nextra-theme-docs';
'use client';

import { motion } from 'motion/react';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import Footer from '@/components/Footer';

const PRIMARY_ORB_HORIZONTAL_OFFSET = 40;
const PRIMARY_ORB_VERTICAL_OFFSET = 20;

export default function NotFoundPage() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="relative flex min-h-[calc(100vh-185px)] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_70%)] text-[var(--foreground)]">
        <div
          aria-hidden={true}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <motion.div
            animate={{
              x: [
                0,
                PRIMARY_ORB_HORIZONTAL_OFFSET,
                -PRIMARY_ORB_HORIZONTAL_OFFSET,
                0,
              ],
              y: [
                0,
                PRIMARY_ORB_VERTICAL_OFFSET,
                -PRIMARY_ORB_VERTICAL_OFFSET,
                0,
              ],
              rotate: [0, 10, -10, 0],
            }}
            className="absolute top-1/2 left-1/3 size-90 rounded-full bg-gradient-to-tr from-yellow-400/20 to-amber-300/20 blur-3xl"
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            animate={{
              x: [
                0,
                -PRIMARY_ORB_HORIZONTAL_OFFSET,
                PRIMARY_ORB_HORIZONTAL_OFFSET,
                0,
              ],
              y: [
                0,
                -PRIMARY_ORB_VERTICAL_OFFSET,
                PRIMARY_ORB_VERTICAL_OFFSET,
                0,
              ],
            }}
            className="absolute right-1/4 bottom-1/3 size-120 rounded-full bg-gradient-to-br from-yellow-300/10 to-amber-200/10 blur-3xl"
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: 'easeInOut',
            }}
          />
        </div>

        <Empty>
          <EmptyHeader>
            <EmptyTitle className="text-8xl font-extrabold text-yellow-400">
              404
            </EmptyTitle>
            <EmptyDescription className="text-nowrap">
              The page you're looking for might have been <br />
              moved or doesn't exist.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>

      <Footer />
    </HomeLayout>
  );
}
