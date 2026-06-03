import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
    label: {
        color: colors.white,
        fontSize: 12
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    value: {
        fontSize: 20,
        color: colors.white
    },
    container: {
        gap: 5
    }
});