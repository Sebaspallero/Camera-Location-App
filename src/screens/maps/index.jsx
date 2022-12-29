import React, {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { useLayoutEffect } from "react";
import { styles } from "./styles";

const Maps = ({ navigation }) => {

  const [selectedLocation, setSelectedLocation] = useState();

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onHandleSaveLocation = () => {
    if (selectedLocation) navigation.navigate("NewPlace", { mapLocation: selectedLocation });
  };

  const onHandlePickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <Ionicons name="md-save-sharp" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);

  return (
    <MapView initialRegion={initialRegion} style={styles.container} onPress={onHandlePickLocation}>
      {
        selectedLocation && (
          <Marker
            title="Lugar Seleccionado"
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng
            }}/>
        )
      }
    </MapView>
  );
};

export default Maps;
