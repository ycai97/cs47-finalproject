import { FlatList, StyleSheet, Text, View, Dimensions, Image, Pressable } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import images from "../assets/Images/images";
import { AntDesign } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const getSongArtists = (lst) => {
    if (lst.length === 0) {
        return "none";
    } else if (lst.length === 1) {
        return lst[0].name;
    } else {
        let res = "";
        for (let i = 0; i < lst.length; i++) {
            res = res + lst[i].name + ", ";
        }
        res = res.slice(0, -2);
        return res;
    }
}

const renderSongItem = ({item, navigation}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('PreviewScreen', {url: item.previewUrl})}>
                <AntDesign name="play" size={21} color="green" />
            </Pressable>
            {/* <Text style={styles.songIndexText}>{item.songIndex}</Text> */}
            <Pressable onPress={() => navigation.navigate('DetailsScreen', {url: item.externalUrl})}>
                <Image 
                    style={styles.imageStyle}
                    source={{
                        uri: item.imageUrl
                    }}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('DetailsScreen', {url: item.externalUrl})}>
                <View style={styles.textContainer}>
                    <Text style={styles.songTitleText} numberOfLines={1}>{item.songTitle}</Text>
                    <Text style={styles.artistText} numberOfLines={1}>{getSongArtists(item.songArtists)}</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('DetailsScreen', {url: item.externalUrl})}>
                <Text style={styles.albumText} numberOfLines={1}>{item.albumName}</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('DetailsScreen', {url: item.externalUrl})}>
                <Text style={styles.durationText}>{millisToMinutesAndSeconds(item.duration)}</Text>
            </Pressable>
        </View>
    )
}

const SongList = ({tracks, navigation}) => {
    // console.log(tracks);
    return (
        <View>
            <View style={styles.headerContainer}>
                <Image style={styles.logoStyle} source={images.spotify}/>
                <Text style={styles.titleText}>My Favourite Album</Text>
            </View>
            <FlatList 
                data={tracks}
                renderItem={({item}) => renderSongItem({item, navigation})}
                keyExtractor={(item) => item.songIndex}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    logoStyle: {
        width: 30,
        height: 30,
        margin: 10,
    },
    titleText: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: width,
      height: 100,
      padding: 12,
    },
    songIndexText: {
        width: 20,
        color: Themes.colors.gray,
    },
    imageStyle: {
        width: 70,
        height: 70,
        margin: 10,
        borderRadius: 6,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 128,
        margin: 5,
    },
    songTitleText: {
        fontSize: 15,
        color: 'white',
    },
    artistText: {
        fontSize: 15,
        color: Themes.colors.gray,
    },
    albumText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 15,
        width: 86,
        margin: 10,
    },
    durationText: {
        color: 'white',
        fontSize: 15,
        width: 50,
    }
  });

export default SongList;