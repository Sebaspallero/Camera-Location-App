import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { PlaceItem } from "../../components";

import { styles } from "./styles";

const PlaceList = ({ navigation }) => {

  const places = useSelector((state)=> state.place.places);

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}/>
  );
};

export default PlaceList;
