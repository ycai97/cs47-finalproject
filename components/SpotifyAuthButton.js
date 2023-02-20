import { StyleSheet, Text, Pressable, Image } from "react-native";
import { Themes } from "../assets/Themes";
import images from "../assets/Images/images";

const SpotifyAuthButton = ({authFunc}) => {
    return (
        <Pressable style={styles.authButton} onPress={authFunc}>
            <Image style={styles.spotifyLogo} source={images.spotify}/>
            <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    authButton: {
      backgroundColor: Themes.colors.spotify,
      padding: 12,
      borderRadius: 99999,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    spotifyLogo: {
        width: 20,
        height: 20,
        marginRight: 6,
    },
    authText: {
      color: "white",
      fontSize: 15,
      fontWeight: 'bold',
    },
});

export default SpotifyAuthButton;