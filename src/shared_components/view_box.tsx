import { View, StyleSheet, SafeAreaView, StyleProp, Platform, StatusBar, ViewStyle } from 'react-native';
import { AppColors } from '../core/utils/app_colors';

type ScreensViewoxProps = {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

function ViewBox({ children, style }: ScreensViewoxProps) {
    return (
        <SafeAreaView>
            <View style={[styles.container, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}
export default ViewBox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.grey,
        gap: 20,
        paddingHorizontal: 16,
        paddingVertical: Platform.OS == 'android' ? StatusBar.currentHeight : null
    }
});