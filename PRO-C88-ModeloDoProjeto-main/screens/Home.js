import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Titulo</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>botão</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    button:{

    }
})