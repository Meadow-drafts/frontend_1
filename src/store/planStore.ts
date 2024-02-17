import {create} from 'zustand';
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

interface Plan {
  id: number;
  title: string;
  price: number;
  img?: string;
  extra?: string; // Optional additional info
}

interface PlansStore {
  monthlyPlans: Plan[];
  yearlyPlans: Plan[];
  selectedPlan: Plan | null; // Currently selected plan (monthly or yearly)
  isYearlySelected: boolean;
  setSelectedPlan: (plan: Plan) => void;
  toggleYearly: () => void;
}

const initialState: PlansStore = {
  monthlyPlans: [
    { id: 1, title: "Arcade", price: 9, img:arcade },
    { id: 2, title: "Advanced", price: 12, img:advanced},
    { id: 3, title: "Pro", price: 15, img: pro },
  ],
  yearlyPlans: [
    { id: 4, title: "Arcade", price: 90, extra: "2 months free" , img: arcade},
    { id: 5, title: "Advanced", price: 120, extra: "2 months free", img:advanced },
    { id: 6, title: "Pro", price: 150, extra: "2 months free", img:pro },
  ],
  selectedPlan: null,
  isYearlySelected: false,
  setSelectedPlan: (plan) => (initialState.selectedPlan = plan),
  toggleYearly: () => (initialState.isYearlySelected = !initialState.isYearlySelected),
};

const usePlansStore = create<PlansStore>((set) => initialState);

export default usePlansStore;
