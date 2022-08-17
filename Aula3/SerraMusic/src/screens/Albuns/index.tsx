import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { CardAlbum } from '../../components/CardAlbum';
import { buscaAlbuns } from "../../services/api";

export interface AlbunsProps {
    id: number, 
    idArtista: number, 
    minutos: number, 
    nomeArtista: string, 
    titulo: string
}

export function Albuns() {

    const [albuns,setAlbuns] = useState<AlbunsProps[]>([]);

    useEffect(()=>{
        buscaAlbuns().then((res)=>{
            setAlbuns(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return <View>
        <FlatList
            data={albuns}
            renderItem={({ item }) => {
                return <CardAlbum item={item} />
            }}
        />
    </View>
}
