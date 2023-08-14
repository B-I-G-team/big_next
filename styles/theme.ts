const color = {
  text_100: '#ACABAB',
  text_300: '#7F7F7F',
  text_500: '#000000',
  red_500: '#D00051',
  red_100: '#FC1C4A',
  kakao: '#FFEB00',
  background: 'EBEBEB',
  border_100: '#E0E2E7',
  border_300: '#CCCCCC',
  blue: '#0951BF',
  white: '#FFFFFF',
  green: '#018263',
  gray_disabled: '#EDEDED',
  gray_hover: '#EDEDED',
};

const sizePrimary = {
  sm: '100px',
  md: '140px',
  fit: '100%',
};

const sizeGhost = {
  default: '100px',
  fit: '100%',
};

export const theme = {
  color,
  sizePrimary,
  sizeGhost,
};

export type Theme = typeof theme;

type ColorObject = typeof color;
type SizePrimaryObject = typeof sizePrimary;
type SizeGhostObject = typeof sizeGhost;
export type Color = keyof ColorObject;
export type SizePrimary = keyof SizePrimaryObject;
export type SizeGhost = keyof SizeGhostObject;
