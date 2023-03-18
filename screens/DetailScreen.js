import React, { useState } from "react";
import { View, Pressable, Image, TouchableOpacity, Linking, Text, StyleSheet } from "react-native";
import { AirbnbRating } from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';


const DetailScreen = ({ navigation }) => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(!state);
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={38}></Ionicons>
            </Pressable>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.logoText}>HH.</Text>
            </View>
            <Image
                source={require('../assets/hidden_tap.jpeg')}
                style={styles.detailImg}
            />
            <TouchableOpacity onPress={() => handleClick()} style={styles.heartIcon}>
                <Ionicons
                    name = {state ? 'heart' : 'heart-outline'} 
                    size = {50}
                    color = "#016B52"
                />
            </TouchableOpacity>
            <Text style={styles.barTitle}>
                Hidden Tap And Barrel
            </Text>
            <Text style={styles.barAddress}>
                320 University Ave, Palo Alto, CA 94301
            </Text>
            <View style={{flexDirection: "row"}}>
                    <AirbnbRating
                        count={5}
                        defaultRating={4}
                        size={16}
                        showRating={false}
                        ratingContainerStyle={{width: "28%", margin: 10}}
                    />
                    <Text style={styles.barRating}>4.3</Text>
            </View>
            <Text style={styles.barDescription}>
                Global wines and craft beer pair with New American small plates in classy, warm environs.
            </Text>
            <View style={styles.reviewContainer}>
                <Image
                    source={require('../assets/user.png')}
                    style={styles.userIcon}
                />
                <Text style={styles.reviewText}>"Nice vibe, good service, cool drinks."</Text>
            </View>
            <View style={styles.reviewContainer}>
                <Image
                    source={require('../assets/user.png')}
                    style={styles.userIcon}
                />
                <Text style={styles.reviewText}>"Great small bites, nice beer and friendly staff."</Text>
            </View>
            <View style={styles.linkContainer}>
                <Pressable onPress={() => Linking.openURL('https://www.hiddentapandbarrel.com/menu')} style={styles.menuBtn}>
                    <Text style={styles.menuText}>MENU</Text>
                </Pressable>
                <Pressable style={styles.revBtn}>
                    <Text style={styles.menuText}>RESERVE A TABLE</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logoContainer: {
        width: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 40,
        left: 163,
    },
    logo: {
        width: 40,
        height: 48,
    },
    logoText: {
        fontFamily: 'BalsamiqSans_700Bold',
        color: "#016B52",
        fontSize: 30,
        marginTop: 10,
    },
    reviewContainer: {
        marginTop: 5,
        marginLeft: 17,
        flexDirection: "row",
        alignItems: "center",
    },
    userIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    reviewText: {
        fontFamily: 'BalsamiqSans_400Regular',
        color: "gray",
        fontSize: 16,
    },
    backButton: {
        marginTop: 50,
        marginLeft: 30,
        marginBottom: 10,
    },
    detailImg: {
        width: "100%",
        height: "32%",
    },
    heartIcon: {
        width: 60,
        position: "absolute",
        top: 405,
        left: 360,
    },
    barTitle: {
        width: 300,
        marginTop: 10,
        marginBottom: 6,
        marginLeft: 18,
        fontFamily: 'BalsamiqSans_700Bold',
        color: "#016B52",
        fontSize: 28,
    },
    barAddress: {
        marginLeft: 18,
        fontFamily: 'BalsamiqSans_400Regular',
        color: "black",
        fontSize: 16,
    },
    barRating: {
        fontFamily: 'BalsamiqSans_400Regular',
        color: "black",
        fontSize: 15,
        marginTop: 12,
    },
    barDescription: {
        marginTop: 10,
        marginLeft: 18,
        marginBottom: 20,
        fontFamily: 'BalsamiqSans_400Regular',
        color: "gray",
        fontSize: 16,
    },
    linkContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    menuBtn: {
        width:"80%",
        backgroundColor:"#016B52",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 70,
    },
    menuText: {
        fontFamily: 'BalsamiqSans_400Regular',
        color: "white",
        fontSize: 16,
    },
    revBtn: {
        width:"80%",
        backgroundColor:"#016B52",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 20,
    },
});
export default DetailScreen;