import { View, Button, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import colors from '../../utils/colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapPreview from '../mapPreview/index'
import { styles } from './styles'
import * as Location from 'expo-location'


const LocationSelector = ({onLocationPicker}) => {

    const [pickedLocation, setPickedLocation] = useState(null);

    const navigation = useNavigation();
    const route = useRoute()

    const mapLocation = route?.params?.mapLocation

    const verifyPermission = async() =>{
        const {status} = await Location.requestForegroundPermissionsAsync();

        if(status !== 'granted'){
            alert.alert(
                'Permisos insuficientes',
                'Necesitas dar permiso a la ubicación',
                [{text: 'Ok'}]
            );
            return false;
        }
        return true
    }

    const onHandleGetLocation = async () => {
        const isLocationPermission = await verifyPermission();
        if (!isLocationPermission) return;
    
        const location = await Location.getCurrentPositionAsync({
          timeout: 5000,
        });
    
        const { latitude, longitude } = location.coords;
    
        setPickedLocation({ lat: latitude, lng: longitude });
    
        onLocationPicker({ lat: latitude, lng: longitude });
      };

      const onHandleMapLocation = async() =>{
        const isLocationPermission = await verifyPermission();
        if (!isLocationPermission) return;
        navigation.navigate('Maps')
      }

      useEffect (()=>{
        if(mapLocation){
            setPickedLocation(mapLocation);
            onLocationPicker(mapLocation)
        }
      },[mapLocation])
      
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <MapPreview location={pickedLocation} style={styles.mapPreview}>
            <Text>No hay ninguna ubicación seleccionada</Text>
        </MapPreview>
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} title='Obtener ubicación' color={colors.primary} onPress={onHandleGetLocation} />
        <Button style={styles.button} color={colors.primary} title='Selección desde Mapa' onPress={onHandleMapLocation}/>
      </View>
    </View>
  )
}

export default LocationSelector