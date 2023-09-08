import { View, TextInput, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';
import { AppColors } from '../core/utils/app_colors';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { Text, TextInputProps  } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
type TextInputParams = {
    title?: string,
    textInputConfig: TextInputProps,
    containerStyle?: StyleProp<ViewStyle>,
    iconName?: string
}
function CustomTextInput({ title, textInputConfig, containerStyle, iconName }: TextInputParams) {
    return (

        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={[styles.textInputContainer, {flexDirection: 'row'}]}>
                <Icon name={iconName!} size={30} color={AppColors.black} />
                <TextInput style={[styles.textInput, containerStyle]} {...textInputConfig} />
            </View>
        </View>
    );
}
export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    textInputContainer: {
        backgroundColor: AppColors.lightGrey,
        paddingHorizontal: 16,
        borderRadius: 30,
        height: height * 0.08,
        width: width * 0.9,
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    textInput: {
        width: width * 0.8,  
        height: height * 0.08,    
    }
});