import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll(hasMore: boolean, loadMore: () => void) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!loadMoreRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => {
            loadMore();
            return prevPage + 1;
          });
        }
      },
      {
        threshold: 1.0,
      },
    );

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasMore, loadMore]);

  return { loadMoreRef, page };
}
