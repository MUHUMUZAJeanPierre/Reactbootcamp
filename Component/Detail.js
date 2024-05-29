import React from 'react'
import { View, Image, Text } from 'react-native';

function Detail({ navigation,route }) {
    const routes = route.params
    console.log("routes: ", routes);
    return (
        <View style={{ flex:1, backgroundColor:'red',paddingTop:20}}>
            <View style={{
                width: 360,
                height: "50%",
                alignSelf:'center'
            }}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${routes.poster_path}` }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                />
            </View>
            <View>
                <Text style={{fontSize:500, color:"white",fontSize:20}}>{routes.release_date}</Text>
                <Text style={{fontSize:500, color:"white",fontSize:20}}>{routes.original_title}</Text>
            </View>
        </View>
    )
}

export default Detail
