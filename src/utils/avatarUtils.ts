import { AVATAR_ELEMENTS, SEEDED_COLORS } from '../contants';
import type {
  TAvatarAccessory,
  TAvatarConfig,
  TAvatarElement,
  TAvatarEyes,
  TAvatarFace,
  TAvatarHaircut,
  TAvatarMouth,
  TAvatarOutfit,
  TUserConfig,
} from '../types';
import { checkIfIsHexColor, getRandomColor } from './colorUtils';

export const getHashCode = (text: string) => {
  let hash = 0,
    i,
    chr;
  if (text.length === 0) return hash;
  for (i = 0; i < text.length; i++) {
    chr = text.charCodeAt(i);
    hash = hash * 31 + chr;
    hash = Math.trunc(hash); // Convert to 32bit integer
  }
  console.log(hash);
  return hash;
};

export const getValueNotSeeded = (
  userConfig: TUserConfig,
  type: keyof TUserConfig
) => {
  const configValue = userConfig[type];
  const configArray = AVATAR_ELEMENTS[
    type as keyof typeof AVATAR_ELEMENTS
  ] as TAvatarElement[];
  return configValue
    ? configArray.findIndex((item) => item.name === configValue) + 1
    : Math.floor(Math.random() * configArray.length) + 1;
};

export const getRandomValue = (type: keyof TUserConfig) => {
  const configArray = AVATAR_ELEMENTS[
    type as keyof typeof AVATAR_ELEMENTS
  ] as TAvatarElement[];
  return Math.floor(Math.random() * configArray.length) + 1;
};

export const getIdByAvatarElement = (element: TAvatarElement) => {
  const list = AVATAR_ELEMENTS[element.type];
  return list.findIndex((item) => item.name === element.name) + 1;
};

export const getRadiusByBackgroundShape = (shape: string) => {
  switch (shape) {
    case 'Square':
      return 0;
    case 'Rounded':
      return 200;
    case 'Circle':
      return 650;
    default:
      return 650;
  }
};

const getColorDifferent = (
  typeColor: string | undefined,
  backgrondColor: string | undefined,
  otherElementColor: string | undefined,
  baseColor: string
) => {
  if (typeColor === undefined || !checkIfIsHexColor(typeColor))
    return baseColor;
  if (typeColor === backgrondColor || typeColor === otherElementColor)
    return baseColor;
  else return typeColor;
};

export const genUserConfigBySeed = (seed: string) => {
  const hashCode = Math.abs(getHashCode(seed));

  const backgroundColor =
    SEEDED_COLORS.backgroundColors[
      hashCode % SEEDED_COLORS.backgroundColors.length
    ];
  const backgroundShape = 'Circle';
  console.log((hashCode % AVATAR_ELEMENTS.accessory.length) + 1);
  const accessory = (
    AVATAR_ELEMENTS.accessory[
      (hashCode % AVATAR_ELEMENTS.accessory.length) + 1
    ] as TAvatarElement
  ).name as TAvatarAccessory;
  console.log((hashCode % AVATAR_ELEMENTS.eyes.length) + 1);
  const eyes = (
    AVATAR_ELEMENTS.eyes[
      (hashCode % AVATAR_ELEMENTS.eyes.length) + 1
    ] as TAvatarElement
  ).name as TAvatarEyes;
  console.log((hashCode % AVATAR_ELEMENTS.face.length) + 1);
  const face = (
    AVATAR_ELEMENTS.face[
      (hashCode % AVATAR_ELEMENTS.face.length) + 1
    ] as TAvatarElement
  ).name as TAvatarFace;
  console.log((hashCode % AVATAR_ELEMENTS.mouth.length) + 1);
  const mouth = (
    AVATAR_ELEMENTS.mouth[
      (hashCode % AVATAR_ELEMENTS.mouth.length) + 1
    ] as TAvatarElement
  ).name as TAvatarMouth;
  console.log((hashCode % AVATAR_ELEMENTS.outfit.length) + 1);
  const outfit = (
    AVATAR_ELEMENTS.outfit[
      (hashCode % AVATAR_ELEMENTS.outfit.length) + 1
    ] as TAvatarElement
  ).name as TAvatarOutfit;
  console.log((hashCode % AVATAR_ELEMENTS.haircut.length) + 1);
  const haircut = (
    AVATAR_ELEMENTS.haircut[
      (hashCode % AVATAR_ELEMENTS.haircut.length) + 1
    ] as TAvatarElement
  ).name as TAvatarHaircut;
  const faceColor =
    SEEDED_COLORS.faceColors[hashCode % SEEDED_COLORS.faceColors.length];
  const haircutColor =
    SEEDED_COLORS.haircutColors[hashCode % SEEDED_COLORS.haircutColors.length];

  const userConfig: TUserConfig = {
    backgroundColor,
    backgroundShape,
    accessory,
    eyes,
    face,
    mouth,
    outfit,
    haircut,
    faceColor,
    haircutColor,
  };
  console.log(userConfig);
  return userConfig;
};

export const genConfig = (userConfig?: TUserConfig) => {
  if (!userConfig) {
    const backgroundColor = getRandomColor();
    const backgroundShapeRadius = getRadiusByBackgroundShape('Circle');

    const accessoryID = getRandomValue('accessory');
    const eyesID = getRandomValue('eyes');
    const faceID = getRandomValue('face');
    const mouthID = getRandomValue('mouth');
    const outfitID = getRandomValue('outfit');
    const haircutID = getRandomValue('haircut');

    const haircutColor = '#423232';
    const faceColor = '#C99589';

    const avatarConfig: TAvatarConfig = {
      backgroundColor: backgroundColor,
      backgroundShapeRadius,
      accessoryID,
      eyesID,
      faceID,
      faceColor,
      mouthID,
      outfitID,
      haircutID,
      haircutColor,
    };
    return avatarConfig;
  } else {
    const backgroundColor =
      userConfig.backgroundColor !== undefined &&
      checkIfIsHexColor(userConfig.backgroundColor)
        ? userConfig.backgroundColor
        : getRandomColor();

    const backgroundShapeRadius = userConfig.backgroundShape
      ? getRadiusByBackgroundShape(userConfig.backgroundShape)
      : 650;

    const accessoryID = getValueNotSeeded(userConfig, 'accessory');
    const eyesID = getValueNotSeeded(userConfig, 'eyes');
    const faceID = getValueNotSeeded(userConfig, 'face');
    const mouthID = getValueNotSeeded(userConfig, 'mouth');
    const outfitID = getValueNotSeeded(userConfig, 'outfit');
    const haircutID = getValueNotSeeded(userConfig, 'haircut');

    const haircutColor = getColorDifferent(
      userConfig.haircutColor,
      userConfig.backgroundColor,
      userConfig.faceColor,
      '#423232'
    );
    const faceColor = getColorDifferent(
      userConfig.faceColor,
      userConfig.backgroundColor,
      userConfig.haircutColor,
      '#F7C0B5'
    );

    const avatarConfig: TAvatarConfig = {
      backgroundColor: backgroundColor,
      backgroundShapeRadius,
      accessoryID,
      eyesID,
      faceID,
      faceColor,
      mouthID,
      outfitID,
      haircutID,
      haircutColor,
    };
    return avatarConfig;
  }
};
