import React from "react";
import { View, Image, Animated, Text, Pressable, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useFonts, BalsamiqSans_400Regular, BalsamiqSans_700Bold } from '@expo-google-fonts/balsamiq-sans';
import { AirbnbRating } from 'react-native-ratings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SavedScreen from "./SavedScreen";

const Tab = createBottomTabNavigator();

const Explore = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_700Bold,
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                latitude: 37.437,
                longitude: -122.170515,
                latitudeDelta: 0.08,
                longitudeDelta: 0.08,
            }}
            style={styles.mapContainer}
            >
                <Marker coordinate={{ latitude : 37.4464327 , longitude : -122.1614185 }}>
                    <Image
                        source={require('../assets/beer_pin.png')}
                        style={{width: 220, height: 220}}
                        resizeMode="contain"
                    />
                </Marker>
                <Marker coordinate={{ latitude : 37.4275297 , longitude : -122.1437689 }}>
                    <Image
                        source={require('../assets/beer_pin.png')}
                        style={{width: 220, height: 220}}
                        resizeMode="contain"
                    />
                </Marker>
                <Marker coordinate={{ latitude : 37.45 , longitude : -122.1858344 }}>
                    <Image
                        source={require('../assets/beer_pin.png')}
                        style={{width: 220, height: 220}}
                        resizeMode="contain"
                    />
                </Marker>
                <Marker coordinate={{ latitude : 37.452 , longitude : -122.1614185 }}>
                    <Image
                        source={require('../assets/beer_pin.png')}
                        style={{width: 220, height: 220}}
                        resizeMode="contain"
                    />
                </Marker>
                <Marker coordinate={{ latitude : 37.462 , longitude : -122.19 }}>
                    <Image
                        source={require('../assets/beer_pin.png')}
                        style={{width: 220, height: 220}}
                        resizeMode="contain"
                    />
                </Marker>
            </MapView>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={38}></Ionicons>
            </Pressable>
            <Animated.ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                // snapToInterval={100}
                style={styles.scrollView}
                contentContainerStyle={styles.endPadding}
            >
                <Pressable onPress={() => navigation.navigate('DetailScreen')} style={styles.card}>
                    <Image
                        source={require('../assets/bar1.jpeg')}
                        style={styles.cardImg}
                    />
                    <Text style={styles.cardTitle}>Hidden Tap And Barrel</Text>
                    <Text style={styles.cardAddress}>320 University Ave, Palo Alto, CA 94301</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={4}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", margin: 10}}
                        />
                        <Text style={styles.rating}>4.3</Text>
                    </View>
                </Pressable>
                <View style={styles.card}>
                    <Image
                        source={require('../assets/bar2.jpeg')}
                        style={styles.cardImg}
                    />
                    <Text style={styles.cardTitle}>Menlo Tavern</Text>
                    <Text style={styles.cardAddress}>100 El Camino Real, Menlo Park, CA 94025</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={5}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", margin: 10}}
                        />
                        <Text style={styles.rating}>4.8</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('../assets/bar3.jpeg')}
                        style={styles.cardImg}
                    />
                    <Text style={styles.cardTitle}>Calave</Text>
                    <Text style={styles.cardAddress}>299 California Ave, Palo Alto, CA 94306</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={5}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", margin: 10}}
                        />
                        <Text style={styles.rating}>4.9</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('../assets/bar4.jpeg')}
                        style={styles.cardImg}
                    />
                    <Text style={styles.cardTitle}>The Rose And Crown</Text>
                    <Text style={styles.cardAddress}>547 Emerson St, Palo Alto, CA 94301</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={4}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", margin: 10}}
                        />
                        <Text style={styles.rating}>4.2</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('../assets/bar5.jpeg')}
                        style={styles.cardImg}
                    />
                    <Text style={styles.cardTitle}>British Bankers Club</Text>
                    <Text style={styles.cardAddress}>555 Santa Cruz Ave, Menlo Park, CA 94025</Text>
                    <View style={{flexDirection: "row"}}>
                        <AirbnbRating
                            count={5}
                            defaultRating={5}
                            size={14}
                            showRating={false}
                            ratingContainerStyle={{width: "30%", margin: 10}}
                        />
                        <Text style={styles.rating}>4.7</Text>
                    </View>
                </View>

            </Animated.ScrollView>
        </View>
    );
};

const ExploreScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Explore') {
                    iconName = focused
                    ? 'map'
                    : 'map-outline';
                } else if (route.name === 'Saved') {
                    iconName = focused ? 'heart' : 'heart-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Explore" component={Explore} options={{headerShown: false}} />
            <Tab.Screen name="Saved" component={SavedScreen} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        position: "absolute",
        top: 46,
        left: 38,
    },
    mapContainer: {
        width: "100%",
        height: "100%",
    },
    scrollView: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        marginHorizontal: 8,
        borderRadius: 12,
        height: 250,
        width: 340,
        overflow: "hidden",
        backgroundColor: "#016B52",
    },
    cardImg: {
        width: "100%",
        height: "58%",
    },
    cardTitle: {
        margin: 10,
        fontFamily: 'BalsamiqSans_700Bold',
        color: "white",
        fontSize: 18,
    },
    cardAddress: {
        marginLeft: 10,
        fontFamily: 'BalsamiqSans_400Regular',
        color: "white",
        fontSize: 14,
    },
    rating: {
        fontFamily: 'BalsamiqSans_400Regular',
        color: "white",
        fontSize: 14,
        marginTop: 13,
    }
});

export default ExploreScreen;
