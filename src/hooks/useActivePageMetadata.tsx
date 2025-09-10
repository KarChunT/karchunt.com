import { useConfig } from 'nextra-theme-docs';
import { FrontMatter } from 'nextra';

export function useActivePageMetadata(): FrontMatter {
  const config = useConfig();
  return config.normalizePagesResult.activeMetadata;
}
