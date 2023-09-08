import { Dimensions, ScrollView, StyleSheet, Text, FlatList } from "react-native";
import { AppColors } from "../../core/utils/app_colors";
import { CustomTextInput, ProductContainer, ViewBox } from '../../shared_components/shared_components_exports';
import { AuthStack } from "../../../App";
import type { StackScreenProps } from '@react-navigation/stack';
import { ProdusImpl } from "../../data/get_products";
import { useEffect, useState } from "react";
import { concat } from "react-native-reanimated";

type Props = StackScreenProps<AuthStack, 'Home'>;


const { height } = Dimensions.get('window');
function HomeScreen({ navigation }: Props) {
    async function getData() {
    const response = await prodImpl.getAllProducts()
    setProductsList(response);
    console.log(`FINDNG ${JSON.stringify(response)}`)
    console.log(`STATE ARRAY LIST ${JSON.stringify(productsList)}`)

    }
    const prodImpl = new ProdusImpl();
    const [productsList, setProductsList] = useState<Array<Map<string, unknown> | string>>([])
    useEffect(() => {
      const product =  getData()
      
    }, [])
    return (
        <ViewBox>
             <Text style={style.titleText}>{'Delicious\nfood for you'}</Text>
                <CustomTextInput
                    iconName="search"
                    textInputConfig={{
                        placeholder: 'Search'
                    }} />
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                // keyExtractor={(item) => }
                data={productsList} 
                initialNumToRender={10}
                renderItem={({item} : {item:  Map<string, unknown>}) => {
                    
                 return   <ProductContainer 

                 image={item['image']}
                 title={item['title']} 
                 price={JSON.stringify(item['price'])} />
                }} />
        </ViewBox>
    );
}

export default HomeScreen;


const style = StyleSheet.create({
    titleText: {
        fontWeight: '800',
        fontSize: 45,
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: AppColors.black
    }
});