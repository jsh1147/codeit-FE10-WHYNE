import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const PC = 'pc';
export const TABLET = 'tablet';
export const MOBILE = 'mobile';

export const useResponsiveQuery = ():
  | typeof PC
  | typeof TABLET
  | typeof MOBILE => {
  const [responsiveQuery, setResponsiveQuery] = useState<
    typeof PC | typeof TABLET | typeof MOBILE
  >(PC);

  const pcQuery = useMediaQuery({ query: '(min-width: 1200px)' });
  const tabletQuery = useMediaQuery({ query: '(max-width: 1199px)' });
  const mobileQuery = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (pcQuery) {
      setResponsiveQuery(PC);
    } else if (tabletQuery) {
      setResponsiveQuery(TABLET);
    } else if (mobileQuery) {
      setResponsiveQuery(MOBILE);
    }
  }, [pcQuery, tabletQuery, mobileQuery]);

  return responsiveQuery;
};
