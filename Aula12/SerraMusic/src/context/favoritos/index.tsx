import React,{createContext, useEffect, useState} from "react";
import { MusicaProps } from "../../screens/Musicas";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TipoContextoFavoritos {
    listaFavorita: MusicaProps[],
    adicionaItemFavoritos: (itemFavorito: MusicaProps)=> void;
    retiraItemFavoritos: (id: number)=>void;
};

export const ContextoFavorito = createContext<TipoContextoFavoritos>({
    listaFavorita: [],
    adicionaItemFavoritos: (itemFavorito:MusicaProps)=>{},
    retiraItemFavoritos:(id:number)=>{}
});

export const ProvedorFavorito = ({children})=>{
    const [listaFavorita, setListaFavorita] = useState<MusicaProps[]>([]);

    useEffect(()=>{
        getData().then((res)=>{
            res && setListaFavorita(res);
        })
    }, [])

    function retiraItemFavoritos (index:number) {
        let novaLista = listaFavorita.filter((favorita)=>{
            return favorita.id !== index
        });
        storeData(novaLista);
        setListaFavorita(novaLista);
    }

    function adicionaItemFavoritos (item: MusicaProps) {
        storeData([...listaFavorita,item]);
        setListaFavorita([...listaFavorita, item]);
    }

    async function storeData (value: MusicaProps[]) {
        try {
            let valorJSON = JSON.stringify(value);
            await AsyncStorage.setItem("@chaveFavorita", valorJSON );
        } catch (e){
            // saving error
        }
    }

    async function getData() {
        try {
            const jsonValue = await AsyncStorage.getItem("@chaveFavorita");
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            // error reading value
        }
    }

    return (
        <ContextoFavorito.Provider
            value={{
                listaFavorita,
                retiraItemFavoritos,
                adicionaItemFavoritos
            }}
        >
            {children}
        </ContextoFavorito.Provider>
    )
}