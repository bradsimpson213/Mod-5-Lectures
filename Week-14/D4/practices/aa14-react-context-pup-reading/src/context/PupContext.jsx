import { createContext, useState } from "react";

import speedy from '../pups/speedy-pup.jpg';
import banana from '../pups/banana-pup.jpg';
import sleepy from '../pups/sleepy-pup.jpg';

export const PupContext = createContext()

export function PupProvider(props) {
    const [puppyType, setPuppyType] = useState(sleepy)
    return (
      <PupContext.Provider value={{ puppyType, setPuppyType }}>
        {props.children}
      </PupContext.Provider>
    );
}