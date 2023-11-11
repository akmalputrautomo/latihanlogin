import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GantiBrand, HapusBedak, TambahBedak, kurangJumlahMakeup, tambahJumlahMakeup } from "../../../redux/action/MakeUp";

export const ButtonRedux = () => {
  // kita gunakan untuk menjalankan fungsi manipulasi data
  const dispatch = useDispatch();
  const [Newbedak, setNewbedak] = useState("");
  // const [Brand, setBrand] = useState("");

  const handleBedak = () => {
    dispatch(TambahBedak(Newbedak));
    setNewbedak("");
  };

  // const handleBranded = () => {
  //   dispatch(GantiBrand({ namaBrand: Brand }));
  //   setBrand("");
  // };

  return (
    <div className=" space-x-4 ">
      <input
        placeholder="Masukan nama bedak"
        className="p-2 border rounded border-gray-400"
        value={Newbedak}
        onChange={(e) => {
          setNewbedak(e.target.value);
        }}
      ></input>
      <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer" onClick={handleBedak}>
        simpan
      </button>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => {
          dispatch(HapusBedak());
        }}
      >
        hapus bedak
      </button>
      <div className="space-x-4 mt-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => {
            dispatch(tambahJumlahMakeup());
          }}
        >
          TAMBAH
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => {
            dispatch(kurangJumlahMakeup());
          }}
        >
          KURANG
        </button>
      </div>
      <div className="mt-4">
        {/* <input
          className="p-2 border rounded border-gray-400"
          value={Brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        ></input>
        <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer" onClick={handleBranded}>
          simpan
        </button> */}
        <input
          placeholder="Masukan nama brand"
          className="p-2 border rounded border-gray-400"
          onChange={(e) => {
            dispatch(GantiBrand({ namaBrand: e.target.value, Penerbit: "sedang di cari" }));
          }}
        ></input>
      </div>
    </div>
  );
};
