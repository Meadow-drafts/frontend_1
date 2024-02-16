import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePlansStore from "../store/planStore";

const SelectPlan: React.FC = () => {
  const navigate = useNavigate();
  const [planId, setPlanId] = useState(0)
  const [toggleYearly, setToggleYearly] = useState(false);
  const { monthlyPlans, yearlyPlans, isYearlySelected, selectedPlan, setSelectedPlan } = usePlansStore();


  const handleToggleYearly = () => {
    setToggleYearly((prev) => !prev);
  };

  const handlePlanSelect = (item: Plan) => {
    console.log(item)
    setSelectedPlan(item);
    setPlanId(item.id)
    console.log({planId})
  };


  const handleSubmit = (event: React.FormEvent) => {    event.preventDefault();

    console.log({selectedPlan})
    if (selectedPlan) {
      navigate("/addons");
    } else {
      alert("Please choose a plan");
    }
  };


  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Select your Plan
      </h1>
      <p className="text-neutral-coolGray mb-6">
        You have the option of monthly or yearly billing.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col relative">

        
        <div
        className={`${
          toggleYearly ? "hidden" : "block"
        } plansMonthly mb-8 flex flex-col sm:flex-row justify-between cursor-pointer`}>
          {monthlyPlans.map((item) => {
            return (
              <div
                onClick={() => handlePlanSelect(item)}
                key={item.id}
                className={`plan ${
                  planId != item.id? "bg-white" : "bg-primary-lightBlue"
                } border-2 ${
                  planId != item.id                    ? "border-neutral-lightGray"
                    : "border-primary-purplishBlue"
                } rounded-md p-4 flex items-center justify-around mb-4 sm:mb-0 sm:block sm:basis-[31%] transition-all duration-300 hover:border-primary-purplishBlue`}
             >
                <img className="sm:mb-10" src={item.img} alt="plan image" />
                <h4 className="text-primary-marineBlue font-[500]">
                  {item.title}
                </h4>
                <p className="text-neutral-coolGray text-[14px] font-[500]">
                  ${item.price}/mo
                </p>
              </div>
            );
          })}
        </div>
        <div
           className={`${
            toggleYearly ? "block" : "hidden"
          } plansYearly mb-8 flex flex-col sm:flex-row justify-between cursor-pointer`}
          >
          {yearlyPlans.map((item) => {
            return (
              <div
                onClick={() => handlePlanSelect(item)}
                key={item.id}
                className={`plan ${
                  planId != item.id? "bg-white" : "bg-primary-lightBlue"
                } border-2 ${
                  planId != item.id  
                    ? "border-neutral-lightGray"
                    : "border-primary-purplishBlue"
                } rounded-md p-4 flex items-center justify-around mb-4 sm:mb-0 sm:block sm:basis-[31%] transition-all duration-300 hover:border-primary-purplishBlue`}
              >
                <img className="sm:mb-10" src={item.img} alt="plan image" />
                <h4 className="text-primary-marineBlue font-[500]">
                  {item.title}
                </h4>
                <p className="text-neutral-coolGray text-[14px] font-[500]">
                  ${item.price}/yr
                </p>
                <p className="text-primary-marineBlue text-[12px]">
                  {item.extra}
                </p>
              </div>
            );
          })}
        </div>     
        <div
          className={`bg-neutral-alabaster flex justify-center items-center py-3 space-x-8 rounded-md ${
            isYearlySelected ? "mb-[70px]" : "mb-[77px]"
          } ${
            isYearlySelected ? "sm:mb-[79px]" : "sm:mb-[97px]"
          }`}
        >
          <p
            className={`${
              isYearlySelected ? "text-neutral-coolGray" : "text-primary-marineBlue"
            } text-[14px] font-[500]`}
          >
            Monthly
          </p>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              onClick={handleToggleYearly}
              className="w-11 h-6 peer-focus:outline-none  rounded-full peer dark:bg-primary-marineBlue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"
            ></div>
          </label>
          <p
            className={`${
              isYearlySelected
                ? "text-primary-marineBlue"
                : "text-neutral-coolGray "
            } text-[14px] font-[500]`}
          >
            Yearly
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
          >
            Go back
          </button>

          <button
            className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
            type="submit"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectPlan;
