import { G, Path } from 'react-native-svg';

export const MouthComposer = (value: number, alone: boolean) => {
  switch (value) {
    case 1:
      return normalSmile(alone);
    case 2:
      return normalThin(alone);
    case 3:
      return eat(alone);
    case 4:
      return openMouth(alone);
    case 5:
      return openTooth(alone);
    case 6:
      return sad(alone);
    case 7:
      return angry(alone);
    case 8:
      return cute(alone);
    case 9:
      return hate(alone);
    case 10:
      return smiliey(alone);
    default:
      return <></>;
  }
};

const angry = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-580,-620)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        d="M806.304 771.743C805.437 779.11 805.004 784.31 803.704 788.644C798.504 811.61 788.104 800.344 769.037 800.777C745.204 801.21 704.471 824.177 695.804 793.41C694.071 787.777 693.204 782.577 692.771 777.81C688.437 734.477 730.904 748.777 773.371 765.243C789.837 772.177 800.237 772.61 806.304 771.743Z"
        fill="white"
      />
      <Path
        d="M804.137 788.643L792.438 787.343"
        stroke="#170E0E"
        strokeWidth="11.3815"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M817.138 765.244C817.138 765.244 811.071 780.41 773.371 765.677C725.704 747.044 677.604 731.877 695.804 793.844C704.904 824.177 745.204 801.644 769.038 801.21C791.571 800.777 801.971 816.377 806.304 772.177"
        stroke="#170E0E"
        strokeWidth="11.3815"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M692.771 777.81C697.104 778.677 721.371 770.01 727.004 778.243C732.637 786.477 739.571 779.11 743.037 780.41C746.504 781.71 762.104 783.877 762.104 783.877"
        stroke="#170E0E"
        strokeWidth="11.3815"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};

const cute = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-640,-620)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        fill={'none'}
        d="M809.297 750.856C809.297 750.856 820.564 744.789 826.631 755.189C832.697 765.589 817.964 777.289 817.964 777.289C817.964 777.289 834.431 789.423 823.164 804.589C814.064 816.723 800.198 815.856 800.198 815.856"
        stroke="#170E0E"
        stroke-width="20"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
  );
};

const eat = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-600,-610)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        fill={'none'}
        d="M807.564 767.297C791.964 776.397 769.43 773.797 749.93 764.264"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fill={'none'}
        d="M752.097 749.097C752.097 749.097 752.097 768.164 730.864 775.964"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};

const hate = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-610,-620)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        fill={'none'}
        d="M820.997 777.919C820.997 777.919 765.964 752.352 739.531 766.219"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};

const normalSmile = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-580,-610)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        fill={'none'}
        d="M793.697 770.764C768.997 785.497 725.231 769.464 704.864 744.764"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};

const normalThin = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-600,-610)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        fill={'none'}
        d="M798.031 764.264C778.964 775.53 748.631 768.597 726.531 753.43"
        stroke="#FEE4BF"
        strokeWidth="10.6951"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};

const openMouth = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-580,-620)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        d="M800.016 771.848C800.45 778.781 795.25 790.915 785.716 799.581C736.75 769.681 714.65 785.281 714.65 785.281C697.316 758.848 701.216 722.881 743.25 750.181C772.716 768.815 790.483 771.848 800.016 771.848Z"
        fill="#170E0E"
      />
      <Path
        d="M785.717 799.581C775.317 808.681 759.717 814.315 738.483 805.648C728.517 801.748 720.717 793.948 714.65 785.281C714.65 785.281 736.75 769.681 785.717 799.581Z"
        fill="#FE9DAB"
      />
      <Path
        fill={'none'}
        d="M808.25 770.115C808.25 770.115 790.05 780.081 743.25 750.181C687.35 714.215 698.617 789.615 738.05 805.648C779.217 822.548 800.45 785.715 800.017 771.848"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fill={'none'}
        d="M714.65 785.281C714.65 785.281 736.75 769.681 785.717 799.581"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};

const openTooth = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-580,-620)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        d="M800.184 776.042C800.618 790.342 779.384 826.742 738.218 809.842C698.784 793.809 687.084 718.409 743.418 754.375C772.884 773.009 790.651 776.042 800.184 776.042Z"
        fill="white"
      />
      <Path
        fill={'none'}
        d="M808.417 774.309C808.417 774.309 790.217 784.275 743.417 754.375C687.517 718.409 698.784 793.809 738.217 809.842C779.384 826.742 800.617 789.909 800.184 776.042"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fill={'none'}
        d="M705.284 765.209C705.284 765.209 734.751 784.709 743.418 782.975C752.518 781.675 751.217 794.242 792.384 795.542"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};

const sad = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-590,-620)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        fill={'none'}
        d="M806.697 784.149C806.697 784.149 789.364 763.782 717.864 784.149"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};

const smiliey = (alone: boolean) => {
  const transform = alone ? 'scale(4) translate(-590,-615)' : '';
  return (
    <G transform={transform} mask="url(#mask0_26_635)">
      <Path
        fill={'none'}
        d="M812.331 773.797C801.498 778.564 796.297 769.03 779.397 777.264C767.264 782.897 760.764 784.631 746.031 775.964C736.497 769.897 724.797 778.564 713.531 762.097"
        stroke="#170E0E"
        strokeWidth="13"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
};
