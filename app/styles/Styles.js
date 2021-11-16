import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const titleStyle = {
    fontSize: 22,
    fontWeight: "bold"
}

const textMuted = {
   fontSize: 16, 
   color: "rgba(0,0,0,0.6)"
}

const scrollItem = {
    width: windowWidth,
    padding: 15,
    borderBottomWidth: 1, 
    borderBottomColor: "#CCC",
}

const headerImage = {
    width: windowWidth,
    height: windowWidth / 2,
    resizeMode: "cover",
    //borderRadius: windowWidth / 4,
    //margin: (windowWidth / 4)
}


export {
    scrollItem,
    titleStyle, textMuted,
    headerImage
}