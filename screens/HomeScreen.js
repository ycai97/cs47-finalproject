import { StyleSheet, SafeAreaView } from "react-native";
import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import { Themes } from "../assets/Themes";

export default function HomeScreen({ navigation }) {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

    let songIndex = 0;
    for (let i = 0; i < tracks.length; i++) {
      songIndex += 1;
      tracks[i]["songIndex"] = songIndex;
    }

    let contentDisplayed = null;
    if (token) {
      contentDisplayed = <SongList tracks={tracks} navigation={navigation}/>
    } else {
      contentDisplayed = <SpotifyAuthButton authFunc={getSpotifyAuth} />;
    }
  
    return (
      <SafeAreaView style={styles.container}>
        {/* TODO: Your code goes here */}
        {contentDisplayed}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
  });