import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';

const DetailsScreen = ({ route }) => {
    const { url } = route.params;
    return (
        <WebView source={{ uri: url }} />
    );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
