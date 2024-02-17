import {create} from 'zustand';

interface AddOn {
    id: number;
    value: string;
    desc: string;
    price: number;
  }

  interface AddOnStore {
    addOns?:AddOn[]; 
    selectedAddOn: AddOn | null
    setSelectedAddOn : (addon:AddOn[]) => void,
  }

const initialState: AddOnStore ={
    addOns:[
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
      ],
    selectedAddOn: null,
    setSelectedAddOn: (addon: any) =>(initialState.selectedAddOn = addon)
}

const useAddOnsStore = create<AddOnStore>((set) => initialState);

export default useAddOnsStore;
