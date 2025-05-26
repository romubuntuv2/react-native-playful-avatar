import { type JSX } from 'react';

const SimpleComposer = ({
  elementID,
  composer,
  isAlone,
}: {
  elementID: number;
  composer: (value: number, alone: boolean) => JSX.Element;
  isAlone?: boolean;
}) => {
  return composer(elementID, isAlone === undefined ? false : isAlone);
};

export default SimpleComposer;
