import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal:{
        backgroundColor: '#ccccccaa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'flex-end',
        backgroundColor: "#e4e4e4",
        width: "80%",
        padding: 5,
        borderRadius:5,
        maxHeight: "90%"
    },
    tituloContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: 'flex-end',
        borderBottomWidth: 2,
        width: "100%",
        backgroundColor: "#e4e4e4"
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 15
    },
    duracao: {
        color: '#a4a4a4'
    },
    favoritoContainer: {

    }
})