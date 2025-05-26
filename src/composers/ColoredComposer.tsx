import { type JSX } from 'react';

const ColoredComposer = ({
  elementID,
  composer,
  color,
  isAlone,
}: {
  elementID: number;
  composer: (value: number, color: string, alone: boolean) => JSX.Element;
  color: string;
  isAlone?: boolean;
}) => {
  return composer(elementID, color, isAlone === undefined ? false : isAlone);
};

export default ColoredComposer;
