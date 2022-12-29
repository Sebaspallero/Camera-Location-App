import { View, Text, ScrollView, TextInput, Button } from "react-native";
import colors from "../../utils/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePlace } from "../../store/place.slice";
import { ImageSelector, LocationSelector } from "../../components";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [coords, setCoords] = useState(null)

  const dispatch = useDispatch();
  
  const onHandleSubmit = () =>{
    dispatch(savePlace({title, image, coords}));
    navigation.navigate('Places')
    
  };

  const onHandleChange = (text) =>{
    setTitle(text)

  };

  const onImagePicker = (uri) =>{
    setImage(uri)
  }

  const onLocationPicker = (location) =>{
    setCoords(location)
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.inputLabel}>New Place</Text>
        <TextInput onChangeText={onHandleChange} style={styles.input} placeholder='Titulo'/>
        <ImageSelector onImagePicker={onImagePicker}/>
        <LocationSelector onLocationPicker={onLocationPicker}/>
        <Button style={styles.button} color={colors.primary} title='Guardar Dirección' onPress={onHandleSubmit}/>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
