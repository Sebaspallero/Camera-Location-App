import { View, Text, ScrollView, TextInput, Button } from "react-native";
import colors from "../../utils/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePlace } from "../../store/place.slice";
import { ImageSelector } from "../../components";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  
  const onHandleSubmit = () =>{
    dispatch(savePlace({title,image}));
    navigation.navigate('Places')
    
  };

  const onHandleChange = (text) =>{
    setTitle(text)

  };

  const onImagePicker = (uri) =>{
    setImage(uri)
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.inputLabel}>New Place</Text>
        <TextInput onChangeText={onHandleChange} style={styles.input} placeholder='Titulo'/>
        <ImageSelector onImagePicker={onImagePicker}/>
        <Button style={styles.button} color={colors.primary} title='Guardar Dirección' onPress={onHandleSubmit}/>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
