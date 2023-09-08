import { ColorValue, Dimensions, StyleSheet, View } from "react-native";
import Logo from "../../assets/images/svg/logo.svg";
import {AppColors} from '../core/utils/utils_exports';
import { Text } from "react-native-svg";

const {width, height} = Dimensions.get('window');
function AppLogo() {
    return (
        <View style={styles.view}>
            <Logo onPress={() => console.log('PRESSED')} />
            <Text>TESTING</Text>
        </View>
    );
}

export default AppLogo;

const styles = StyleSheet.create({
    view: {
        color: AppColors.white,
        height: 73,
        width: 73,
        borderRadius: 30        
    }
});