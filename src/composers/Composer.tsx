import { AccessoriesComposer } from '../avatarElements/Accessories';
import { EyesComposer } from '../avatarElements/Eyes';
import { FaceComposer } from '../avatarElements/Face';
import { HairComposer } from '../avatarElements/Hair';
import { MouthComposer } from '../avatarElements/Mouth';
import { OutfitsComposer } from '../avatarElements/Outfits';
import type { TAvatarElement } from '../types';
import ColoredComposer from './ColoredComposer';
import SimpleComposer from './SimpleComposer';

const Composer = ({
  color,
  id,
  element,
}: {
  color: string;
  id: number;
  element: TAvatarElement;
}) => {
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
      return <SimpleComposer elementID={id} composer={EyesComposer} isAlone />;
    case 'mouth':
      return <SimpleComposer elementID={id} composer={MouthComposer} isAlone />;
    case 'accessory':
      return (
        <SimpleComposer elementID={id} composer={AccessoriesComposer} isAlone />
      );
    default:
      return (
        <SimpleComposer elementID={id} composer={AccessoriesComposer} isAlone />
      );
  }
};

export default Composer;
