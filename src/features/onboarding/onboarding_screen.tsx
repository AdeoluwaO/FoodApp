import { Dimensions, Image, ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../core/utils/app_colors";
import LinearGradient from "react-native-linear-gradient";
import { AppLogo, CustomButton } from '../../shared_components/shared_components_exports';
import { AuthStack } from "../../../App";
import type {StackScreenProps} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const { height } = Dimensions.get('window');
function Onboarding() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView>
            <View style={{
                backgroundColor: AppColors.red,
                height,
                paddingVertical: StatusBar.currentHeight,
                paddingHorizontal: 16
            }}>
                <AppLogo />
                <Text style={style.titleText} >Food for Everyone</Text>
                <CustomButton
                    styles={{ position: 'absolute', bottom: 20, zIndex: 7, alignSelf: 'center' }}
                    title='Get Started'
                    onPress={() => {
                    }}
                    />
                <Image
                    style={{ zIndex: 2, right: 32, top: 30, transform: [{ scale: 1 }] }}
                    source={require('../../../assets/images/png/female.png')} />
                <Image
                    style={{ left: 160, bottom: 300}}
                    source={require('../../../assets/images/png/male.png')} />
                <LinearGradient
                    start={{ x: 30, y: 500 }} end={{ x: 234, y: 242 }}
                    style={{ flex: 1 }}
                    colors={['red', 'green']}>
                </LinearGradient>
            </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default Onboarding;


const style = StyleSheet.create({
    titleText: {
        fontWeight: '800',
        fontSize: 65,
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: AppColors.white
    }
});