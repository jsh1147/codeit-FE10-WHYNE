import {
  css,
  RuleSet,
  type CSSObject,
  type Interpolation,
} from 'styled-components';

type Breakpoints = 'tablet' | 'mobile';

const breakpoints: Record<Breakpoints, string> = {
  tablet: '@media (max-width: 1199px)',
  mobile: '@media (max-width: 767px)',
};

type QueryFunc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: Interpolation<object>[]
) => RuleSet<object>;

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<Breakpoints, QueryFunc>;

export default media;
