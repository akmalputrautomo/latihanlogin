import React from "react";
import { useSelector } from "react-redux";

export const ViewRedux = () => {
  const Data = useSelector((state) => state.makeup);
  const bedak = Data && Data.listBedak.map((listdatabedak) => listdatabedak).join(",");

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-4">Jumlah MakeUp : {Data.jumlahmakeup}</h1>
      <h1 className="text-lg">List Bedak : {bedak}</h1>
      <h1 className="text-lg">Nama Brand : {Data.namaBrand}</h1>
      <h1 className="text-lg">Penerbit : {Data.Penerbit}</h1>
    </div>
  );
};
