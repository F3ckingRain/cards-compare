import React from "react";
import Wrapper from "@/containers/Wrapper/Wrapper";
import CardsContainer from "@/containers/CardsContainer/CardsContainer";

function HomePage() {
  return (
    <>
      <Wrapper>home page</Wrapper>

      <Wrapper>
        <CardsContainer />
      </Wrapper>
    </>
  );
}

export default HomePage;
