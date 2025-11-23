"use client";
import BusinessClass from "@/components/common/BusinessClass/main/BusinessClass";
import Filtering from "@/components/common/Filtering/main/Filtering";
import Hero from "@/components/modules/Home/Hero";
import Home from "@/components/modules/Home/main/Home";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab, Tab } from "@/redux/featured/tab/tabSlice";
import { RootState } from "@/redux/store";
import { useGetMeQuery } from "@/redux/featured/auth/authApi";

const MainPage = () => {

  const {data , error, isLoading} =  useGetMeQuery({})
  console.log(data)

  const dispatch = useDispatch();
  const selectedTab = useSelector((state: RootState) => state.tab.selectedTab);
  const [findTicket, setFindTicket] = useState(true);

  // Function to change selected tab
  const handleTabChange = (tab: Tab) => {
    dispatch(setSelectedTab(tab));
  };

  return (
    <main>
      {/* Pass selectedTab to Hero */}
      <Hero selectedTab={selectedTab} />

      {/* Pass the Redux-controlled selectedTab and setter */}
      <BusinessClass
        setFindTicket={setFindTicket}
        selectedTab={selectedTab}
        setSelectedTab={handleTabChange} // ✅ use Redux dispatcher
      />

      {findTicket ? (
        <Home />
      ) : (
        <Filtering selectedTab={selectedTab} />
      )}
    </main>
  );
};

export default MainPage;
