import { useContext } from 'react';
import { PupContext } from '../../context/PupContext';
import speedy from '../../pups/speedy-pup.jpg';
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';

const PupImage = () => {
  const { puppyType } = useContext(PupContext)
  console.log(puppyType)
  return (
    <img src={ puppyType } alt="pup" />
  );
};

export default PupImage;
