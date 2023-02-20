import { FlatList, StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import images from "../assets/Images/images";

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

const renderSongItem = ({item}) => {
    // console.log(item);
    return (
        <View style={styles.container}>
            <Text style={styles.songIndexText}>{item.songIndex}</Text>
            <Image 
                style={styles.imageStyle}
                source={{
                    uri: item.imageUrl
                }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.songTitleText} numberOfLines={1}>{item.songTitle}</Text>
                <Text style={styles.artistText} numberOfLines={1}>{getSongArtists(item.songArtists)}</Text>
            </View>
            <Text style={styles.albumText} numberOfLines={1}>{item.albumName}</Text>
            <Text style={styles.durationText}>{millisToMinutesAndSeconds(item.duration)}</Text>
        </View>
    )
}

const SongList = ({tracks}) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Image style={styles.logoStyle} source={images.spotify}/>
                <Text style={styles.titleText}>My Favourite Album</Text>
            </View>
            <FlatList 
                data={tracks}
                renderItem={({item}) => renderSongItem({item})}
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