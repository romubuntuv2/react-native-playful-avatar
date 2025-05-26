export type TAvatarElements = {
  accessory: TAvatarElement[];
  eyes: TAvatarElement[];
  face: TAvatarElement[];
  mouth: TAvatarElement[];
  outfit: TAvatarElement[];
  haircut: TAvatarElement[];
};

export type TAvatarElement = {
  name: string;
  type: 'accessory' | 'eyes' | 'face' | 'mouth' | 'outfit' | 'haircut';
};

export type TAvatarBackgroundShape = 'Square' | 'Rounded' | 'Circle';
export type TAvatarAccessory =
  | 'Rounded Glasses'
  | 'Simple Earring'
  | 'Glasses'
  | 'Futuristic Glasses'
  | 'Stylish Glasses'
  | 'Mask'
  | 'Earring'
  | 'Cap'
  | 'Circle Earring'
  | 'Mask Google'
  | 'Moustache'
  | 'Earphone';
export type TAvatarEyes =
  | 'Thin'
  | 'Closed'
  | 'Cynic'
  | 'Sad'
  | 'Angry'
  | 'Normal';
export type TAvatarFace = 'Blush' | 'Bear' | 'Normal';
export type TAvatarMouth =
  | 'Normal Smile'
  | 'Normal Thin'
  | 'Eat'
  | 'Open Mouth'
  | 'Open Tooth'
  | 'Sad'
  | 'Angry'
  | 'Cute'
  | 'Hate'
  | 'Smiliey';
export type TAvatarOutfit =
  | 'Blue hoodie'
  | 'Retro yellow polo'
  | 'Classic suit with red tie'
  | 'Pastel blue sweater'
  | 'Aviator jacket'
  | 'Grey sweater with white scarf'
  | 'Green sweater with yellow polka dots'
  | 'Striped purple cardigan'
  | 'Red sweater with white diamonds'
  | 'Pink sweater with round patterns'
  | 'Purple sweater with Peter Pan collar'
  | 'Chic jacket with gold pendant'
  | 'Blue overalls with green buttons'
  | 'Black sweater with floral white collar'
  | 'Black top with geometric patterns'
  | 'Black buttoned tank top'
  | 'Yellow top with black pompoms'
  | 'Orange top with festive patterns'
  | 'Simple purple sweater'
  | 'Classic blue overalls'
  | 'Black shirt with white collar'
  | 'Black top with wavy stripes'
  | 'Brown pinafore dress';
export type TAvatarHaircut =
  | 'Classic short'
  | 'Double bun'
  | 'Bob with bangs'
  | 'Retro pompadour'
  | 'Relaxed mullet'
  | 'Natural waves'
  | 'Structured short'
  | 'Stylish quiff'
  | 'Rockabilly'
  | 'Bohemian flower'
  | 'Space buns'
  | 'Messy pixie'
  | 'Voluminous curls'
  | 'Asymmetrical short'
  | 'Short curls'
  | 'Spiky punk'
  | 'Retro wave'
  | 'Wavy short'
  | 'Thick curls'
  | 'Low ponytail'
  | 'High ponytail'
  | 'Tight curls'
  | 'Side shave';

export type TUserConfig = {
  backgroundColor?: string;
  backgroundShape?: TAvatarBackgroundShape;
  accessory?: TAvatarAccessory;
  eyes?: TAvatarEyes;
  face?: TAvatarFace;
  faceColor?: string;
  mouth?: TAvatarMouth;
  outfit?: TAvatarOutfit;
  haircut?: TAvatarHaircut;
  haircutColor?: string;
};

export type TAvatarConfig = {
  backgroundColor: string;
  backgroundShapeRadius: number;
  accessoryID: number;
  eyesID: number;
  faceID: number;
  faceColor: string;
  mouthID: number;
  outfitID: number;
  haircutID: number;
  haircutColor: string;
};
