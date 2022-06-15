import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import { orientationDetection } from "./OrientationDetection";


export default function TeachrCard(props){
    const teachrsInfos = [
        {
            "photo": require("../assets/photos/avatar-6e099274d7f7f82d267b3185604cfdf8.jpg"),
            "formation": "Université Parigi-Saclay",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra hendrerit posuere. Proin egestas efficitur fermentum. Curabitur nec est vitae ipsum eros.",
        },
        {
            "photo": require("../assets/photos/avatar-06c6c598c8eb3741b19afc5ae4c284b1.jpg"),
            "formation": "Sorbonne Université",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget euismod purus. Suspendisse molestie nec felis nec vulputate. Mauris a nibh suscipit proin.",
        },
        {
            "photo": require("../assets/photos/avatar-52e877ea3219207c15f797940273b415.jpg"),
            "formation": "Université Aix-Marseille",
            "description": "Fusce eu rhoncus turpis, in luctus nunc. Curabitur eu orci ultrices, porta ligula a, facilisis neque. Curabitur a lorem vulputate massa porta vehicula volutpat.",
        },
        {
            "photo": require("../assets/photos/avatar-055f78ee81462fe7fb426182a27b5181.jpg"),
            "formation": "Université de Burdeos",
            "description": "Morbi congue ornare nulla in varius. Sed ornare, felis nec vehicula sagittis, lorem sem ullamcorper urna, ut rhoncus nisi orci vitae risus. Nullam malesuada mi.",
        },
        {
            "photo": require("../assets/photos/avatar-194f05142ad2718895847a1cefa68ae0.jpg"),
            "formation": "Université di Grenoble",
            "description": "Duis dignissim augue tortor, in porttitor ex cursus at. Pellentesque ullamcorper tellus eu nisl porttitor posuere sed eget neque. Sed placerat nunc vel leo dui.",
        },
        {
            "photo": require("../assets/photos/avatar-533e951fc62a26a45638740bf5423e52.jpg"),
            "formation": "Université Paris 1 Panthéon-Sorbonne",
            "description": "Aliquam erat volutpat. Praesent nec laoreet nunc. Nam in nunc porttitor, malesuada turpis eu, vulputate magna. Pellentesque mollis convallis ligula. Donec amet.",
        },
        {
            "photo": require("../assets/photos/avatar-913a3831f4c22837cfaad013d2d19faf.jpg"),
            "formation": "Université di Strasburgo",
            "description": "Vivamus vitae lacus vestibulum turpis faucibus semper ac in purus. Etiam vestibulum nibh sit amet suscipit congue. Integer in efficitur nulla, id venenatis est.",
        },
        {
            "photo": require("../assets/photos/avatar-1432ff1cd4c85f2228e4d554b22cd574.jpg"),
            "formation": "Université di Tolosa III Paul Sabatier",
            "description": "Nulla sit amet enim in turpis maximus interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eget quam.",
        },
        {
            "photo": require("../assets/photos/avatar-5936350c79b20f65dae54989df38dea6.jpg"),
            "formation": "Université di Lille",
            "description": "Cras vehicula ante posuere massa commodo aliquet. Suspendisse rhoncus velit mauris, id elementum risus semper sed. Nam feugiat pharetra vestibulum. Interdum ex.",
        },
        {
            "photo": require("../assets/photos/avatar-811625483afad60806481e9cc3b50a23.jpg"),
            "formation": "Université Claude-Bernard di Lione",
            "description": "Aenean euismod in ante vitae rhoncus. Donec hendrerit in nisl vel vulputate. Phasellus lacinia magna eu purus porttitor ornare. Donec non luctus neque, vel leo.",
        },
        {
            "photo": require("../assets/photos/avatar-e69ed3b6dc7d618f94895bea595b9ced.jpg"),
            "formation": "Université Panthéon-Assas",
            "description": "Etiam efficitur massa quis erat semper, in pharetra libero cursus. Maecenas aliquet, lorem sit amet tincidunt viverra, ante arcu finibus enim, id tempus tellus.",
        },
        
    ]
  const orientation = orientationDetection()


    return (
        <View style={[styles.cardWrapper, {width: orientation === 'PORTRAIT' ? 270 : 450, marginTop: orientation === 'PORTRAIT' ? 30 : 20, }]}>
            <View style={[styles.cardContainer, {paddingTop: orientation === 'PORTRAIT' ? 30 : 15, paddingHorizontal: orientation === 'PORTRAIT' ? 25 : 10, paddingBottom: orientation === 'PORTRAIT' ? 45 : 20}]}>
                <View>
                    <View style={[styles.teachr, {marginBottom:  orientation === 'PORTRAIT' ? 30 : 15,}]}>
                        <Image style={styles.teachrPhoto} source={teachrsInfos[props.index].photo}/>
                        <Text style={styles.teachrName}>{props.prenom}</Text>
                    </View>
                    <View style={{marginBottom:  orientation === 'PORTRAIT' ? 30 : 15,}}>
                        <Text style={styles.teachrInfoTitle}>Formation</Text>
                        <Text style={styles.teachrInfoText}>{teachrsInfos[props.index].formation}</Text>
                    </View>
                    <View style={{marginBottom:  orientation === 'PORTRAIT' ? 30 : 15,}}>
                        <Text style={styles.teachrInfoTitle}>Description</Text>
                        <Text style={styles.teachrInfoText}>{teachrsInfos[props.index].description}</Text>
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