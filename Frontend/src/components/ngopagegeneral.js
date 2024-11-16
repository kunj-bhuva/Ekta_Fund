import React from 'react';
import { useParams } from 'react-router-dom';
import FeedTheHungry from './feedthehungry.js';
import EveryGirlInSchool from './everygirlinschool.js';
import SafeWaterForAll from './safewaterforall.js';
import RightToCleanAir from './righttocleanair.js';
import ProtectTheElderly from './protectelderly.js';
import NoChildOrphaned from './nochildorphaned.js';
import ManageIndiasWaste from './managewaste.js';
import EndPeriodPoverty from './endperiodpoverty.js';
import StopAnimalCruelty from './stopanimalcruelity.js';

const NGOPagegeneral = () => {
  const { index } = useParams();

  // Map the index to a specific NGO component
  let ngoComponent;
  switch (parseInt(index)) {
    case 0:
      ngoComponent = <FeedTheHungry />;
      break;
    case 1:
      ngoComponent = <EveryGirlInSchool />;
      break;
    case 2:
      ngoComponent = <SafeWaterForAll />;
      break;
    case 3:
      ngoComponent = <RightToCleanAir />;
      break;
    case 4:
      ngoComponent = <ProtectTheElderly />;
      break;
    case 5:
      ngoComponent = <NoChildOrphaned />;
      break;
    case 6:
      ngoComponent = <ManageIndiasWaste />;
      break;
    case 7:
      ngoComponent = <EndPeriodPoverty />;
      break;
    case 8:
      ngoComponent = <StopAnimalCruelty />;
      break;
    default:
      ngoComponent = <div>NGO not found</div>;
  }

  return <div>{ngoComponent}</div>;
};

export default NGOPagegeneral;
