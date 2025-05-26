import { useMemo } from 'react';
import { FaceComposer } from './avatarElements/Face';
import { HairComposer } from './avatarElements/Hair';
import { MouthComposer } from './avatarElements/Mouth';
import ColoredComposer from './composers/ColoredComposer';
import SimpleComposer from './composers/SimpleComposer';
import type { TAvatarElement } from './types';
import { getIdByAvatarElement } from './utils/avatarUtils';
import { OutfitsComposer } from './avatarElements/Outfits';
import { EyesComposer } from './avatarElements/Eyes';
import { AccessoriesComposer } from './avatarElements/Accessories';
import Svg from 'react-native-svg';
import { View, type ViewStyle } from 'react-native';

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
      ? element.type == 'haircut'
        ? '#422d2d'
        : '#C99589'
      : colorProps;
  }, [colorProps, element]);

  const id = useMemo(() => {
    return getIdByAvatarElement(element);
  }, [element]);

  const Composer = () => {
    switch (element.type) {
      case 'face':
        return (
          <ColoredComposer
            elementID={id}
            composer={FaceComposer}
            color={color}
            isAlone
          />
        );
      case 'haircut':
        return (
          <ColoredComposer
            elementID={id}
            composer={HairComposer}
            color={color}
            isAlone
          />
        );
      case 'outfit':
        return (
          <SimpleComposer elementID={id} composer={OutfitsComposer} isAlone />
        );
      case 'eyes':
        return (
          <SimpleComposer elementID={id} composer={EyesComposer} isAlone />
        );
      case 'mouth':
        return (
          <SimpleComposer elementID={id} composer={MouthComposer} isAlone />
        );
      case 'accessory':
        return (
          <SimpleComposer
            elementID={id}
            composer={AccessoriesComposer}
            isAlone
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <View style={style}>
      <Svg height={'100%'} width={'100%'} viewBox="0 0 1300 1300" fill="none">
        {Composer()}
      </Svg>
    </View>
  );
};

export default PlayfulElement;
