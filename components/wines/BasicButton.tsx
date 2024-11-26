import * as S from './BasicButton.css';

export interface BasicButtonPropsType {
  children: React.ReactNode;
  $fontSize?: string;
  $fontColor?: string;
  $bgColor?: string;
  $hoverFontColor?: string;
  $hoverBgColor?: string;
  $width?: string;
  onClick?: () => void;
}

export default function BasicButton({
  children,
  $fontColor = 'var(--white)',
  $bgColor = 'var(--purple-100)',
  $hoverFontColor,
  $hoverBgColor = '',
  $fontSize = '16px',
  $width = 'auto',
  onClick,
}: BasicButtonPropsType) {
  return (
    <S.Button
      $fontColor={$fontColor}
      $bgColor={$bgColor}
      $hoverFontColor={$hoverFontColor}
      $hoverBgColor={$hoverBgColor}
      $fontSize={$fontSize}
      $width={$width}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}
