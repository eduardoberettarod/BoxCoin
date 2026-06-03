import { View, Text, Button } from "react-native";
import { router } from "expo-router";
import HomeHeader from "./components/HomeHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { use } from "react";

const resume = {
    total: 'R$ 20.543,87',
    input: {
        label:'Entrada',
        value: 'R$ 9.543,83'
    },
    output: {
        label:'Saída',
        value: '-R$ 1.783,29'
    }
}

export default function Index() {

    const insets = useSafeAreaInsets()

    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={resume} />
        </View>
    )
}