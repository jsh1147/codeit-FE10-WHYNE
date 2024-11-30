import { useRouter } from 'next/router';

export const useWineNavigation = () => {
  const router = useRouter();

  const navigateToWine = (wineId: number) => {
    router.push({
      pathname: `wines/${wineId}`,
    });
  };

  return navigateToWine;
};
