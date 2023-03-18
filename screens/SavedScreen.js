import React from "react";
import { View, Pressable, Image, Linking, Text, StyleSheet } from "react-native";
import { AirbnbRating } from 'react-native-ratings';


const SavedScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('DetailScreen')} style={styles.infoContainer}>
                <Image
                    source={require('../assets/bar1.jpeg')}
                    style={styles.barImg}
                />
                <View>
                    <Text style={styles.barTitle}>Hidden Tap And Barrel</Text>
                    <Text style={styles.barAddress}>320 University Ave</Text>
                    <Text style={styles.barAddress}>Palo Alto</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={4}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", marginLeft: 34, marginTop: 8}}
                        />
                        <Text style={styles.rating}>4.3</Text>
                    </View>
                </View>
            </Pressable>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/bar2.jpeg')}
                    style={styles.barImg}
                />
                <View>
                    <Text style={styles.barTitle}>Menlo Tavern</Text>
                    <Text style={styles.barAddress}>100 El Camino Real</Text>
                    <Text style={styles.barAddress}>Menlo Park</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={5}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", marginLeft: 34, marginTop: 8}}
                        />
                        <Text style={styles.rating}>4.8</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/bar3.jpeg')}
                    style={styles.barImg}
                />
                <View>
                    <Text style={styles.barTitle}>Calave</Text>
                    <Text style={styles.barAddress}>299 California Ave</Text>
                    <Text style={styles.barAddress}>Palo Alto</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={5}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", marginLeft: 34, marginTop: 8}}
                        />
                        <Text style={styles.rating}>4.9</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../assets/bar4.jpeg')}
                    style={styles.barImg}
                />
                <View>
                    <Text style={styles.barTitle}>The Rose And Crown</Text>
                    <Text style={styles.barAddress}>547 Emerson St</Text>
                    <Text style={styles.barAddress}>Palo Alto</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={4}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", marginLeft: 34, marginTop: 8}}
                        />
                        <Text style={styles.rating}>4.2</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    infoContainer: {
        marginTop: 12,
        padding: 12,
        width: "90%",
        height: "15%",
        backgroundColor: "#016B52",
        borderRadius: 10,
        flexDirection: "row",
    },
    barImg: {
        width: "36%",
        height: "100%",
        borderRadius: 6,
        marginRight: 12,
    },
    barTitle: {
        fontFamily: 'BalsamiqSans_400Regular',
        color: "white",
        fontSize: 17,
        marginBottom: 6,
    },
    barAddress: {
        fontFamily: 'BalsamiqSans_400Regular',
        color: "white",
        fontSize: 14,
    },
    rating: {
        marginTop: 10,
        marginLeft: 16,
        fontFamily: 'BalsamiqSans_400Regular',
        color: "white",
    }
});
export default SavedScreen;