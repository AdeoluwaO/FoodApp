import { Dimensions, StyleSheet, View, Image, ScrollView, Text } from "react-native";
import { AppColors } from "../../core/utils/app_colors";
import { CustomButton, ViewBox } from '../../shared_components/shared_components_exports';
import { Dashboard } from "../../../App";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = BottomTabScreenProps<Dashboard, 'Profile'>;


const { height, width } = Dimensions.get('window');
function ProfileScreen({ navigation }: Props) {
    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.profileImage}>

                    {/* <Image src='../'  /> */}
                </View>
                <View style={styles.textContainer}>

                <Text style={styles.titleText}>EMAIL</Text>
                <Text style={styles.subTitleText}>email</Text>
                <Text style={styles.titleText}>FIRST NAME </Text>
                <Text style={styles.subTitleText}>First Name </Text>
                <Text style={styles.titleText}>LAST NAME</Text>
                <Text style={styles.subTitleText}>Last Name</Text>
                </View>
            </View>
        </ScrollView>

    );
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    profileImage: {
    width,
    backgroundColor: AppColors.opacGrey,
    height: height * 0.5,
    borderBottomRightRadius: 50,
    },
    titleText: {
        fontWeight: '800',
        fontSize: 25,
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: AppColors.opacOrange
    },
    subTitleText: {
        fontWeight: '400',
        fontSize: 18,
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: AppColors.orange
    },
    textContainer: {
        gap: 20,
        paddingHorizontal: 16
    }
});