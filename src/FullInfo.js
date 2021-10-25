import React,{useContext} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import FullInfoContext from "./context/fullInfo/FullInfoContext"

const FullInfo = ({ navigation }) => {

    // console.log(route.params);
    const {item} = useContext(FullInfoContext);
     console.log("from fullinfo ",item);
    console.log("hello")
    return (
        <View style={{ flex: 1, justifyContent: "center", margin: 10 }}>

            <Image
                style={{ height: "100%", width: "100%", marginTop: 5 }}
                source={{ uri: item.url }} />
            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 5 }}>{item.title}</Text>
        </View>


    )
}
export default FullInfo;
