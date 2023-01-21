import {
    View,
    Text,
    Image,
  } from 'react-native';
const Card = props => {
    return(
        <View style={{flex:1, flexDirection: 'row',   marginVertical: 8,marginHorizontal: 16}}>
            <Image source={{uri: props.avatar}} style={{width: 80, height:80}}/>
        <View style={{padding: 20}}>
        <Text style={{fontWeight: 600,color: 'black'}}>
                ID: {props.id}
            </Text>
            <Text style={{fontWeight: 300,color: 'black'}}>
                Name: {props.first_name} {props.last_name}
            </Text>
            <Text style={{fontWeight: 300,color: 'black'}}>
                Email: {props.email}
            </Text>

        </View>
        </View>
    )
}

export default Card