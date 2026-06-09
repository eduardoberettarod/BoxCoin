import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  label: {
    fontSize: 12,
    color: colors.gray[500],
    marginBottom: 5
  },
  status: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  value: {
    fontSize: 18,
    color: colors.black,
    flex: 1
  },
  goal: {
    fontSize: 14,
    color: colors.teal[500]
  },
  percentage: {
    fontSize: 14,
    color: colors.teal[500]
  },
  progress: {
    height: 5,
    marginTop: 16,
    width: '100%',
    backgroundColor: colors.gray[300],
    borderRadius: 5,
    overflow: 'hidden'
  },
  currentProgress: {
    height: 5,
    backgroundColor: colors.teal[500]
  }
});