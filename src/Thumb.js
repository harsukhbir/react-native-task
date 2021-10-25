import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

import FullInfoContext from './context/fullInfo/FullInfoContext';

const Thumb = ({ navigation }) => {


    const { setFullInfoItem } = useContext(FullInfoContext)

    const [DATA, setData] = useState([]);
    const getData = async () => {

        try {
            const { data } = await axios.get(`https://vercel-express-liart.vercel.app/api/posts?start=0&limit=50`);
            setData(data);
            console.log(data)

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getData()
    }, []);
    const fullScreen = (url, title) => navigation.push('FUllInfo', { url, title })


    const handlePress = (item) => {
        
        console.log(item.item);
        setFullInfoItem(item.item); 
        // fullScreen(item.item.url, item.item.title)
        navigation.push("FUllInfo")
    }

    const renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() =>handlePress(item)}>
                <Card style={{ margin: 10, marginHorizontal: 20 }}>
                    <Card.Cover
                        style={{ height: 150, width: 150 }}
                        source={{ uri: item.item.thumbnailUrl }} />
                </Card>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ margin: 5 }}>
            <FlatList
                data={DATA}
                numColumns={2}
                keyExtractor={(data, index) => data.id}
                renderItem={renderItem}
                inverted={false}
            />
        </View>

    )
}
export default Thumb;
