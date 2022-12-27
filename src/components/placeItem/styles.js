import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
      },

      image: {
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: colors.background,
    },

    infoContainer: {
        marginLeft: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
      },

      title: {
        fontSize: 18,
        color: colors.text,
        marginBottom: 10,
      },

      address: {
        fontSize: 14,
        color: colors.primary,
      },
});