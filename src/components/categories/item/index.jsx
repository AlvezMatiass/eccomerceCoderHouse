import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from "react-native";
import { styles } from './style'
import { COLORS } from "../../../themes";

const CategoryItem = ({id, name, backgroundColor, backgroundImage, onSelectCategory }) => {

    const { width } = useWindowDimensions()

    const tabletMode = width > 640

    return (
        <TouchableHighlight onPress={() => onSelectCategory(id)} style={[styles.container, { backgroundColor}]} underlayColor={COLORS.background}>
            <ImageBackground 
            source={{ uri: backgroundImage}} 
            style={tabletMode ? styles.imageBackgroundTablet : styles.imageBackground} 
            resizeMode={tabletMode ? "contain" : "cover"}>
                <Text style={tabletMode ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
            </ImageBackground>
        </TouchableHighlight>
    )
}

export default CategoryItem;