import {View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { AppColors } from '../core/utils/utils_exports';

const {width, height} = Dimensions.get('window');

type Props =  {
    title: string,
    price: string,
    image: string
};

function ProductContainer({title, price, image}: Props) {
    return(
        <View style={styles.topcontainer}>
            <View style={styles.baseContainer}>
            <Image style={{
                    height: 100,
                    width: width * 0.65
                }} source={{uri: image}} />
                <View style={{padding: 16}}>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>N {price}</Text>
                </View>
            </View>
        </View>
    );
}

export default ProductContainer;

const styles = StyleSheet.create({
    baseContainer: {
        height: height * 0.30,
        width: width * 0.65,
        backgroundColor: AppColors.white,
        borderRadius: 30,
        alignItems: 'center',
        paddingBottom: 16,
        // bottom:40
        // position: 'absolute',
    },
    topcontainer: {
    marginHorizontal: 16
    },
    title: {
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: AppColors.black,
        overflow: 'hidden'
    },
    price: {
        fontWeight: '700',
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        textAlign: 'center',
        color: AppColors.orange
    }
})