import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  formBox:{
    margin: 20
  },

  inputLabel:{
    fontSize: 18,
    marginBottom: 20,
  },
  
  input:{
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  },


});
