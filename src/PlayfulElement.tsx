import { useMemo } from 'react';
import type { TAvatarElement } from './types';
import { getIdByAvatarElement } from './utils/avatarUtils';
import Svg from 'react-native-svg';
import { View, type ViewStyle } from 'react-native';
import Composer from './composers/Composer';

const PlayfulElement = ({
  style,
  element,
  colorProps,
}: {
  style: ViewStyle;
  element: TAvatarElement;
  colorProps?: string;
}) => {
  const color = useMemo(() => {
    return colorProps === undefined
      ? element.type === 'haircut'
        ? '#422d2d'
        : '#C99589'
      : colorProps;
  }, [colorProps, element]);

  const id = useMemo(() => {
    return getIdByAvatarElement(element);
  }, [element]);

  return (
    <View style={style}>
      <Svg height={'100%'} width={'100%'} viewBox="0 0 1300 1300">
        <Composer id={id} color={color} element={element} />
      </Svg>
    </View>
  );
};

export default PlayfulElement;
