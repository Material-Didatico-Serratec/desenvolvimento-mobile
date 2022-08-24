import React from "react";
import { Routes } from "./src/routes/routes";
import 'react-native-gesture-handler';
import { ProvedorFavorito } from "./src/context/favoritos";

export default function App () {
  return (
    <ProvedorFavorito>
      <Routes/>
    </ProvedorFavorito>
  )
  
}
