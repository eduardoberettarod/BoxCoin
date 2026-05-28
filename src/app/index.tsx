import { View, Text, Button } from "react-native";
import { router } from "expo-router";
import HomeHeader from "./components/HomeHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { use } from "react";

export default function Index() {

    const insets = useSafeAreaInsets()

    return (
        <View style={{ flex: 1 }}>
            <HomeHeader />
        </View>
    )
}