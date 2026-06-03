import { View, Text, ColorValue } from "react-native";
import { styles } from './style'
import { Feather } from "@expo/vector-icons";

export type ResumeProps = {
    label: string,
    value: string
};

type Props = {
    data: ResumeProps,
    icon: {
        nameIcon: keyof typeof Feather.glyphMap,
        colorIcon: ColorValue
    },
    isRight?: boolean
}

export default function Resume({ data, icon, isRight = false }: Props) {
    return (
        <View style={styles.container}>

            <View style={[styles.header, isRight && { justifyContent: 'flex-end' }]}>
                <Feather name={icon.nameIcon} size={16} color={icon.colorIcon} />
                <Text style={styles.label}>
                    {data.label}
                </Text>
            </View>

            <View>
                <Text style={styles.value}>
                    {data.value}
                </Text>
            </View>
        </View>
    )
}