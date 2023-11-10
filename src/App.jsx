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
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 140); // Adjust the delay as needed
  }, []);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <>
      <TopBrand />
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
