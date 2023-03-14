import { Assignment } from "@mui/icons-material";
import React from "react";
import DailyTask from "../components/DailyTask";
import Header from "../components/Header";

function HomePage() { 
  return (
    <div className="flex-col w-full h-full">
      <div className="p-3">
        <Header />
      </div>
      <div className="flex p-3">
        <div className="mr-2 w-1/3">
          <DailyTask />
        </div>
        <div className=" w-2/3">
          <Assignment />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
