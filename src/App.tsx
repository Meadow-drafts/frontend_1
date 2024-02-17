import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import ThankYou from "./pages/ThankYou";

const App: React.FC = () => {
  return (
        <BrowserRouter>
          <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
            <Sidebar />
            <div className="sm:basis-[60%] relative px-5 bg-white rounded-md w-[300px] sm:w-[10%] h-[100%] sm:pr-[80px]">
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/selectplan" element={<SelectPlan />} />
              <Route path="/addons" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
              </div>
          </div>
        </BrowserRouter>
  );
};

export default App;
