import React, { createContext, useState, ReactNode } from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

interface Plan {
  id: number;
  img: string;
  title: string;
  price: number;
  extra?: string;
}

interface SelectedPlan {
  title: string;
  price: number | null;
}

interface PlansContextProps {
  monthlyPlans: Plan[];
  setMonthlyPlans: React.Dispatch<React.SetStateAction<Plan[]>>;
  yearlyPlans: Plan[];
  setYearlyPlans: React.Dispatch<React.SetStateAction<Plan[]>>;
  selectedMonthlyPlan: SelectedPlan;
  setSelectedMonthlyPlan: React.Dispatch<React.SetStateAction<SelectedPlan>>;
  selectedYearlyPlan: SelectedPlan;
  setSelectedYearlyPlan: React.Dispatch<React.SetStateAction<SelectedPlan>>;
}

export const PlansContext = createContext<PlansContextProps | undefined>(undefined);

interface PlansProviderProps {
  children: ReactNode;
}

export const PlansProvider: React.FC<PlansProviderProps> = ({ children }) => {
  const [monthlyPlans, setMonthlyPlans] = useState<Plan[]>([
    { id: 1, img: arcade, title: "Arcade", price: 9 },
    { id: 2, img: advanced, title: "Advanced", price: 12 },
    { id: 3, img: pro, title: "Pro", price: 15 },
  ]);

  const [yearlyPlans, setYearlyPlans] = useState<Plan[]>([
    { id: 4, img: arcade, title: "Arcade", price: 90, extra: "2 months free" },
    { id: 5, img: advanced, title: "Advanced", price: 120, extra: "2 months free" },
    { id: 6, img: pro, title: "Pro", price: 150, extra: "2 months free" },
  ]);

  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState<SelectedPlan>({
    title: "",
    price: null,
  });

  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState<SelectedPlan>({
    title: "",
    price: null,
  });

  const contextValue: PlansContextProps = {
    monthlyPlans,
    setMonthlyPlans,
    yearlyPlans,
    setYearlyPlans,
    selectedMonthlyPlan,
    setSelectedMonthlyPlan,
    selectedYearlyPlan,
    setSelectedYearlyPlan,
  };

  return <PlansContext.Provider value={contextValue}>{children}</PlansContext.Provider>;
};
