// import { createSlice } from "@reduxjs/toolkit";

// export const MakeUp = createSlice({
//   name: "makeup",
//   initialState: {
//     jumlahmakeup: 10,
//     namaBrand: "lato lato",
//     Penerbit: "sari roit",
//     listBedak: ["bedak tabur ", "bedak foundation ", "bedak halus"],
//   },
//   // fungsi yang di lakukan atau di gunakan untuk manipulasi value yang ada di atas
//   reducers: {
//     tambahJumlahMakeup: (state) => {
//       state.jumlahmakeup = state.jumlahmakeup + 1;
//     },
//     kurangJumlahMakeup: (state) => {
//       state.jumlahmakeup = state.jumlahmakeup - 1;
//     },
//     TambahBedak: (state, action) => {
//       state.listBedak.push(action.payload);
//     },
//     HapusBedak: (state) => {
//       state.listBedak.pop();
//     },
//     GantiBrand: (state, action) => {
//       state.namaBrand = action.payload.namaBrand;
//       state.Penerbit = action.payload.Penerbit;
//     },
//   },
// });

// // fungsi yang bisa kita gunakan
// export const { tambahJumlahMakeup, kurangJumlahMakeup, TambahBedak, HapusBedak, GantiBrand } = MakeUp.actions;

// export default MakeUp.reducer;
