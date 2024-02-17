import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import useAddOnsStore from "../store/addOnsStore";

const AddOns: React.FC = () => {
  const navigate = useNavigate();

  const {addOns, selectedAddOn, setSelectedAddOn} = useAddOnsStore();

  const [addOnId, setAddOnId] = useState(0);  

  const handleAddOnSelect = (item: any) => {
    console.log(item)
    setAddOnId(item.id);
    setSelectedAddOn(item);
    console.log({selectedAddOn})
   
    console.log({addOnId})
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({selectedAddOn})
    if (selectedAddOn) {
      navigate("/summary");
    } else {
      alert("Please select an Add on");
    }
  };

 


  return (
    <div className="">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Pick add-ons
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Add-ons help enhance your gaming experience.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col relative space-y-4"
      >
        {addOns?.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                addOnId !== item.id? "bg-white" : "bg-primary-lightBlue"
              } border-2 ${
                addOnId !== item.id
                  ? "border-neutral-lightGray"
                  : "border-primary-purplishBlue"
              } rounded-md flex items-center justify-between p-4 cursor-pointer transition-all duration-300 hover:border-primary-purplishBlue`}
            >
              <div className="flex items-center space-x-6">
                <div>
                  <input
                    className="h-5 w-5 cursor-pointer"
                    onChange={() => handleAddOnSelect(item)}
                    type="checkbox"
                    value={item.value}
                  />
                </div>
                <div>
                  <p className="font-[500] text-primary-marineBlue">
                    {item.value}
                  </p>
                  <p className="text-neutral-coolGray text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-primary-purplishBlue">+${item.price}/mo</p>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between items-center pt-[100px] sm:pt-[47px]">
          <button
            onClick={() => navigate("/selectplan")}
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

export default AddOns;
