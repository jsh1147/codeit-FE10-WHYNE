export const aromaTranslationMap: Record<string, string> = {
  CHERRY: '체리',
  BERRY: '베리',
  OAK: '오크',
  VANILLA: '바닐라',
  PEPPER: '후추',
  BAKING: '제빵',
  GRASS: '풀',
  APPLE: '사과',
  PEACH: '복숭아',
  CITRUS: '시트러스',
  TROPICAL: '트로피컬',
  MINERAL: '미네랄',
  FLOWER: '꽃',
  TOBACCO: '담뱃잎',
  EARTH: '흙',
  CHOCOLATE: '초콜릿',
  SPICE: '스파이스',
  CARAMEL: '카라멜',
  LEATHER: '가죽',
};

export const translateAroma = (aromas: string[]): string[] => {
  return aromas.map((aroma) => aromaTranslationMap[aroma] || aroma);
};

export const translateAromaToKey = (aromas: string[]): string[] => {
  const reversedMap = Object.fromEntries(
    Object.entries(aromaTranslationMap).map(([key, value]) => [value, key]),
  );
  return aromas.map((aroma) => reversedMap[aroma] || aroma);
};
