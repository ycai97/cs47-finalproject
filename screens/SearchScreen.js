import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, SafeAreaView } from 'react-native';
import { useFonts, BalsamiqSans_400Regular, BalsamiqSans_700Bold } from '@expo-google-fonts/balsamiq-sans';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const SearchScreen = ({ navigation, route }) => {
    // const user = route.params.user;
    let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_700Bold,
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.userWelcome}>Hi, Yutian!</Text>
            <Text style={styles.caption}>Where are you heading?</Text>
            <SafeAreaView style={styles.searchBox}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyCGVpvR8h7GG4x482Ygt0hxMV3x4eqfMq0',
                        language: 'en',
                    }}
                    
                />
            </SafeAreaView>
            <Image source={require('../assets/pour.gif')} style={styles.beerPour}/>
            <Pressable onPress={() => navigation.navigate('ExploreScreen')} style={styles.loginBtn}>
                <Text style={styles.loginText}>SEARCH</Text>
            </Pressable>

    
        </View>
    );
}

// const SearchScreen = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;
    
//                 if (route.name === 'Search') {
//                     iconName = focused
//                     ? 'search'
//                     : 'search-outline';
//                 } else if (route.name === 'Explore') {
//                     iconName = focused ? 'map' : 'map-outline';
//                 }

//                 return <Ionicons name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: 'green',
//                 tabBarInactiveTintColor: 'gray',
//             })}
//         >
//             <Tab.Screen name="Search" component={Search} options={{headerShown: false}} />
//             <Tab.Screen name="Explore" component={ExploreScreen} options={{headerShown: false}} />
//         </Tab.Navigator>
//     );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#016B52',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userWelcome: {
    fontFamily: 'BalsamiqSans_400Regular',
    color: "white",
    fontSize: 28,
    position: "absolute",
    left: 44,
    top: 68,
    marginBottom: 20,
  },
  caption: {
    fontFamily: 'BalsamiqSans_400Regular',
    fontSize: 16,
    color: "white",
    marginTop: 80,
    marginBottom: 5,
    marginLeft: -160,
  },
  searchBox: {
    width: "80%",
    height: 320,
    // backgroundColor: "white",
  },
  inputText: {
    fontFamily: 'BalsamiqSans_400Regular',
    height:30,
    color:"darkgreen"
  },
  loginBtn: {
    width:"80%",
    backgroundColor:"green",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 50,
  },
  loginText: {
    fontFamily: 'BalsamiqSans_700Bold',
    color:"white"
  },
  beerPour: {
    width: "49%",
    height: "23%",
  }
});

export default SearchScreen;