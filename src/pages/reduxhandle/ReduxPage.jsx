import React from "react";
import { ViewRedux } from "../../assets/component/componentRedux/ViewRedux";
import { ButtonRedux } from "../../assets/component/componentRedux/ButtonRedux";

export const ReduxPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <br />
      <ViewRedux />
      <br />
      <ButtonRedux />
    </div>
  );
};
