import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { CardAlbum } from '../../components/CardAlbum';
import { StackParamList } from "../../routes/routes";
import { buscaAlbuns } from "../../services/api";

type AlbumScreenProps = NativeStackScreenProps<StackParamList, 'Album'>

export interface AlbunsProps {
    id: number, 
    idArtista: number, 
    minutos: number, 
    nomeArtista: string, 
    titulo: string
}

export function Albuns({route,navigation}: AlbumScreenProps) {

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
                return <CardAlbum navigate={navigation} item={item} />
            }}
        />
    </View>
}
