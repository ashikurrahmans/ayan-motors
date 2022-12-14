import React from "react";
import SingleCarItem from "./CarsItem/SingleCarItem";
import AllSearchItems from "./SelectSearch/AllSearchItems";
import StockHeader from "./StockHeader";
import StocklistBottom from "./StocklistBottom";
import VehicleSearchButtons from "./VehicleSearchButtons";

const StockListPage = () => {
  return (
    <>
      <StockHeader
        title="Used Toyota in West Bromwich, West Midlands"
        imageurl="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80"
      />
      <div className="bg-black">
        <VehicleSearchButtons></VehicleSearchButtons>
      </div>
      <AllSearchItems></AllSearchItems>
      <SingleCarItem></SingleCarItem>
      <div className="bg-gray-800 py-8">
        <StocklistBottom></StocklistBottom>
      </div>
    </>
  );
};

export default StockListPage;
