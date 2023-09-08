import { Dimensions, ScrollView, StyleSheet, Text, FlatList} from "react-native";
import { AppColors } from "../../core/utils/app_colors";
import { CustomTextInput, ViewBox } from '../../shared_components/shared_components_exports';
import { AuthStack } from "../../../App";
import type {StackScreenProps} from '@react-navigation/stack';

type Props =  StackScreenProps<AuthStack, 'Home'>;


const { height } = Dimensions.get('window');
function HomeScreen({navigation}: Props) {
    return (
        <ViewBox>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={style.titleText}>{'Deliciou\nfood for you'}</Text>
            <CustomTextInput textInputConfig={{
                placeholder: 'Search'
            }} />
            {/* <FlatList data={} renderItem={} /> */}
        </ScrollView>
        </ViewBox>
    );
}

export default HomeScreen;


const style = StyleSheet.create({
    titleText: {
        fontWeight: '800',
        fontSize: 65,
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: AppColors.black
    }
});