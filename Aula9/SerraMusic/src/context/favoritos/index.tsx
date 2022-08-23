import React,{createContext, useState} from "react";
import { MusicaProps } from "../../screens/Musicas";

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

    function retiraItemFavoritos (index:number) {
        let novaLista = listaFavorita.filter((favorita)=>{
            return favorita.id !== index
        })

        setListaFavorita(novaLista);
    }

    function adicionaItemFavoritos (item: MusicaProps) {
        setListaFavorita([...listaFavorita, item]);
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