import * as ImagePicker from "expo-image-picker";
import { View, Text, Image, Button } from 'react-native'
import React, {useState} from 'react'
import { styles } from './styles';
import colors from "../../utils/colors";

const ImageSelector = ({onImagePicker}) => {

    const [pickedURL, setPickedURL] = useState(null)
    
    const onHandleTakeImage = async() =>{
        const isCameraPermission = await verifyPermission();
        if(!isCameraPermission) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8,
        });

        setPickedURL(image.uri);
        onImagePicker(image.uri)
    };

    

    const verifyPermission = async() =>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if(status !== 'granted'){
            alert.alert(
                'Permisos insuficientes',
                'Necesitas dar permiso a la camara',
                [{text: 'Ok'}]
            );
            return false;
        };
        return true
    };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedURL ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedURL }} />
        )}
      </View>
      <Button style={styles.button} title='Tomar Foto' color={colors.primary} onPress={onHandleTakeImage} />
    </View>
  )
}

export default ImageSelector