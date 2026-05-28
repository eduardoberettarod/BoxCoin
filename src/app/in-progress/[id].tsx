import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function InProgress() {
    
    const params = useLocalSearchParams()

    return (
        <View>
            <Text>
                id: {params.id}
            </Text>
        </View>
    )
}