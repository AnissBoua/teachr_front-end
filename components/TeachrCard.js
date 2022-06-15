import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import { orientationDetection } from "./OrientationDetection";


export default function TeachrCard(props){
    const localhostIP = "000.000.0.000"
    const orientation = orientationDetection()


    return (
        <View style={[styles.cardWrapper, {width: orientation === 'PORTRAIT' ? 270 : 450, marginTop: orientation === 'PORTRAIT' ? 30 : 20, }]}>
            <View style={[styles.cardContainer, {paddingTop: orientation === 'PORTRAIT' ? 30 : 15, paddingHorizontal: orientation === 'PORTRAIT' ? 25 : 10, paddingBottom: orientation === 'PORTRAIT' ? 45 : 20}]}>
                <View>
                    <View style={[styles.teachr, {marginBottom:  orientation === 'PORTRAIT' ? 30 : 15,}]}>
                        <Image style={styles.teachrPhoto} source={{uri: 'http://' + localhostIP + ':8000/' + props.photo}}/>
                        <Text style={styles.teachrName}>{props.prenom}</Text>
                    </View>
                    <View style={{marginBottom:  orientation === 'PORTRAIT' ? 30 : 15,}}>
                        <Text style={styles.teachrInfoTitle}>Formation</Text>
                        <Text style={styles.teachrInfoText}>{props.formation}</Text>
                    </View>
                    <View style={{marginBottom:  orientation === 'PORTRAIT' ? 30 : 15,}}>
                        <Text style={styles.teachrInfoTitle}>Description</Text>
                        <Text style={styles.teachrInfoText}>{props.description}</Text>
                    </View>
                </View>
                <View style={[{flexDirection:  orientation === 'PORTRAIT' ? "column" : "row", justifyContent:  orientation === 'PORTRAIT' ? "flex-start" : "space-around",}]}>
                    <TouchableHighlight style={[styles.cardButton, styles.blueButton]} >
                        <Text style={styles.blueButtonText}>Prendre un cours avec ce Teach'r</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.cardButton, styles.orangeButton]}>
                        <Text style={styles.orangeButtonText}>Retirez ce Teach'r de mes favoris</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: 270,
        height: "85%",
        borderRadius: 10,
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        
        marginHorizontal: 15,
    },
    cardContainer: {
        justifyContent:"space-between",
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        
        
        
    },
    teachr: {
        flexDirection: "row",
        alignItems: "center",
        
    },
    teachrPhoto: {
        width: 50,
        height:50,
        borderRadius: 50,
        marginRight: 20,
    },
    teachrName: {
        fontSize: 22,
    },
    teachrInfoTitle: {
        fontSize: 16,
        color: "#b8b2b2",
    },
    teachrInfoText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cardButton: {
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    blueButton: {
        backgroundColor: "#076ec0",
    },
    blueButtonText: {
        fontSize: 16,
        color: "white",
    },
    orangeButton: {
        borderWidth: 1,
        borderColor: "#ff7f5f",
    },
    orangeButtonText: {
        fontSize: 16,
        color: "#ff7f5f",
    },
 })