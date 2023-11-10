import { useState, useEffect } from "react";
import {
  TopSlide,
  LeftSearch,
  RightProduct,
  TopContent,
  TopSlideShow,
  SmallScreenFilters,
  HideSmallFilter,
  TopBrand,
  NavBar,
  SideBar,
} from "./components";

const App = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <TopBrand />
      <div className="h-[48px] bg-black"></div>
      <NavBar />

      <TopSlide />
      <TopSlideShow />

      <TopContent />
      <HideSmallFilter />
      <section className="flex  mx-auto max-w-[95%]">
        <LeftSearch />
        <RightProduct />
      </section>
    </>
  );
};
export default App;
