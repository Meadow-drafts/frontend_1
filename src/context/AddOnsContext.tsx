import React, { createContext, useState, ReactNode,  SetStateAction } from "react";

interface AddOn {
  id: number;
  value: string;
  desc: string;
  price: number;
}

interface AddOnsContextProps {
  addOns: AddOn[];
  setAddOns: React.Dispatch<SetStateAction<AddOn[]>>;
  selectedAddOnsValue: AddOn[];
  setSelectedAddOnsValue: React.Dispatch<SetStateAction<AddOn[]>>;
}

export const AddOnsContext = createContext<AddOnsContextProps | undefined>(undefined);

export interface AddOnsProviderProps {
  children: ReactNode;
}

export const AddOnsProvider: React.FC<AddOnsProviderProps> = ({ children }) => {
  const [addOns, setAddOns] = useState<AddOn[]>([
    {
      id: 1,
      value: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
    },
    {
      id: 2,
      value: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      value: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ]);

  const [selectedAddOnsValue, setSelectedAddOnsValue] = useState<AddOn[]>([]);

  const contextValue:AddOnsContextProps = {
    addOns,
    setAddOns,
    selectedAddOnsValue,
    setSelectedAddOnsValue,
  };

  return (
    <AddOnsContext.Provider value={contextValue}>
      {children}
    </AddOnsContext.Provider>
  );
};
