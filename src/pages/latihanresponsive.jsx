import React from "react";

export const Latihanresponsive = () => {
  return (
    // <div className="w-full h-full text-center text-white p-4">
    //   <h1 className="bg-red-500 w-full h-32 flex justify-center items-center">MERAH</h1>
    //   <div className="flex tablet:flex-col-reverse desktop:flex">
    //     <h1 className="bg-purple-500 w-1/2 h-[30rem] flex items-center justify-center m-2">UNGU</h1>
    //     <div className="flex-col w-full">
    //       <h1 className="bg-green-500 w-4/4 h-2/4 flex items-center justify-center m-2">HIJAU</h1>
    //       <div className="flex h-full">
    //         <h1 className="bg-blue-500 w-1/2 h-[13.5rem] flex items-center justify-center m-2">BIRU</h1>
    //         <h1 className="bg-pink-500 w-1/2 h-[13.5rem] flex items-center justify-center m-2">PINK</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-full text-center text-white p-4">
      <div className="mobile:justify-end mobile:flex">
        <h1 className="bg-red-500 w-full h-32 flex justify-center items-center tablet:h-[5rem] tablet:w-full mobile:w-1/4">MERAH</h1>
      </div>
      <div className="flex tablet:flex-col-reverse mobile:flex-col desktop:flex-row ">
        <h1 className="bg-purple-500 w-full h-[30rem] flex items-center justify-center m-2 tablet:w-full mobile:h-[10rem]desktop:h-[30rem] desktop:w-1/4">UNGU</h1>
        <div className="flex-col w-full tablet:flex-col mobile:flex-col-reverse mobile:flex">
          <h1 className="bg-green-500 w-full tablet:w-4/4 h-2/4 flex items-center justify-center m-2 tablet:h-[10rem] mobile:h-[5rem] desktop:h-3/4">HIJAU</h1>
          <div className="flex h-full tablet:flex-row mobile:flex-row-reverse">
            <h1 className="bg-blue-500 w-full tablet:w-1/2 h-[13.5rem] flex items-center justify-center m-2">BIRU</h1>
            <h1 className="bg-pink-500 w-full tablet:w-1/2 h-[13.5rem] flex items-center justify-center m-2">PINK</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
