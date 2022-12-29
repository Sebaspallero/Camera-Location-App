import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 15
      },

    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 1,
    },

  image: {
        width: 300,
        height: 200,
    },

    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-around'
      }

});