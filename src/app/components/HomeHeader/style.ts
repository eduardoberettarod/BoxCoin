import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 354,
        paddingHorizontal: 26,
        paddingBottom: 46,
        gap: 24,
        justifyContent: 'flex-end',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    label: {
        fontSize: 12,
        color: colors.white
    },
    total: {
        fontSize: 32,
        color: colors.white
    },
    resumoContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
})