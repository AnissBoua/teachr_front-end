import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TeachrCard(props){
    return (
        <View>
            <Text>{props.prenom}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    card: { }
 })