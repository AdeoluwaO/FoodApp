import { View, Text, StyleSheet, StyleProp, ViewStyle, Pressable, Dimensions } from "react-native";
import { AppColors } from "../core/utils/app_colors";
import Icon from 'react-native-vector-icons/FontAwesome';

type ButtonProps = {
styles: StyleProp<ViewStyle>| null,
title: string | null,
onPress: () => void
}

const {height, width} = Dimensions.get('window');

function CustomButton({styles, title, onPress}: ButtonProps) {
    return (
        <View style={ [style.contaier, styles] }>
            <Pressable onPress={onPress}>
            <Text style={style.text}>{title}</Text>
                {/* <Icon name="facebook"  /> */}
            </Pressable>
        </View>
    );
}

export default CustomButton;

const style = StyleSheet.create({
    contaier:{
        backgroundColor: AppColors.white,
        height: height * 0.07,
        width: width * 0.8,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'SF-Pro-Rounded-Regular',
        fontWeight: '600',
        fontSize: 17,
        color: AppColors.lightRed,
        
    }
});