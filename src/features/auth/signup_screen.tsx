import { useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { CustomButton, CustomTextInput, ViewBox } from '../../shared_components/shared_components_exports';
import { AppColors } from '../../core/utils/app_colors';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStack } from '../../../App';
import { AuthImpl } from '../../data/auth_data';


type SignUpScreenParams = StackScreenProps<AuthStack, 'SignUp'>

const { height, width } = Dimensions.get('window');
function SignUpScreen({ navigation }: SignUpScreenParams) {
    const authImp = new AuthImpl();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.baner}>
                <Text style={style.titleText}>{' Meals\nGet Started'}</Text>
            </View>
            <ViewBox style={{ gap: 30 }}>
                <CustomTextInput
                    title='Name'
                    textInputConfig={{
                        placeholder: 'name',
                    }} />
                <CustomTextInput
                    title='Job'
                    textInputConfig={{
                        placeholder: 'occupation',
                    }} />
                <CustomTextInput
                    title='Email'
                    textInputConfig={{
                        placeholder: 'please enter you email',
                        onChangeText: (email: string) => {
                        setEmail(email);
                        }
                    }} />

                <CustomTextInput
                    title='Password'
                    textInputConfig={{
                        placeholder: 'please enter you password',
                        onChangeText: (password: string) => {
                                setPassword(password);
                        },
                        
                    }} />
                <Text>Already have an account<Text
                    onPress={() => {
                        navigation.replace('Login');
                    }}
                    style={[style.titleText, { fontSize: 16, color: AppColors.red }]}>Login</Text></Text>
                <CustomButton title='Submit' styles={{ alignSelf: 'center' }} onPress={() => {
                 const user =   authImp.registerUser(email, password);
                 setEmail(''),
                 setPassword('')
                 
                     navigation.navigate('Home');
                 
                }} />
            </ViewBox>
        </ScrollView>
    );
}

export default SignUpScreen;


const style = StyleSheet.create({
    baner: {
        backgroundColor: AppColors.red, width,
        height: height * 0.4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 8,
        borderBottomEndRadius: 40
    },
    titleText: {
        fontWeight: '800',
        fontSize: 65,
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: AppColors.white
    }
});
