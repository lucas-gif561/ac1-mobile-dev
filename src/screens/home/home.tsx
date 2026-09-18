import axios from 'axios';
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export const Home = () => {
    const [pokemon, setPokemon] = useState({name: String, sprite: String});
    const [busca, setBusca] = useState("escreva aqui");

    const buscar = async () => {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${busca}`
            );
            setPokemon({
                name: response.data.name,
                sprite: response.data.sprites.front_default,
            });
        } catch (err) {
            setPokemon({
                name: `${busca}: não encontrado`,
                sprite: "https://avatars.fastly.steamstatic.com/06079aa271060229722208f1e5c50dd4ade1f98e_full.jpg",
            });
        }

        

    }

    return (
        <View style={styles.broba}>
            <Text>{`${pokemon.name}`}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: `${pokemon.sprite}`,
                }}
            />
            <br/>
            <TextInput style={styles.caxa} onChangeText={setBusca} value={busca}/>
            <Button
                title="Buscar Pokémon"
                onPress={buscar}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    broba: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 20,
    },
    caxa: {
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 7,
        marginBottom: 7,
        width: 200,
    },
    tinyLogo: {
        width: 250,
        height: 250,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
    },
});