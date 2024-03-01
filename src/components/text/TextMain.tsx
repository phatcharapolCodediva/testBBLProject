import React, { PropsWithoutRef } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { Colors, ColorType } from '@/shared/style/colors';
import { FontSize, FontSizeType } from '@/shared/style/fontSize';

type TextMainProps = TextProps & {
  title: string;
  fontColor?: ColorType;
  fontSize?: FontSizeType;
  textAlign?: TextStyle['textAlign'];
  textDecorationLine?: TextStyle['textDecorationLine'];
};

export default function TextMain({
  title = '',
  fontColor = 'grey_1',
  fontSize = 'font16',
  textAlign = 'left',
  textDecorationLine = 'none',
  ...props
}: PropsWithoutRef<TextMainProps>) {
  const TextStyles = (): StyleProp<TextStyle> => ({
    color: Colors[fontColor],
    fontSize: FontSize[fontSize],
    textAlign,
    textDecorationLine,
  });

  return (
    <Text style={[TextStyles()]} {...props}>
      {title}
    </Text>
  );
}
