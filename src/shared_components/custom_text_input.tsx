import { View, TextInput, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';
import { AppColors } from '../core/utils/app_colors';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { Text, TextInputProps  } from 'react-native';

const { width, height } = Dimensions.get('window');
type TextInputParams = {
    title?: string,
    textInputConfig: TextInputProps,
    containerStyle?: StyleProp<ViewStyle>
}
function CustomTextInput({ title, textInputConfig, containerStyle }: TextInputParams) {
    return (

        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
                <TextInput style={[styles.textInputContainer, containerStyle]} {...textInputConfig} />
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
});