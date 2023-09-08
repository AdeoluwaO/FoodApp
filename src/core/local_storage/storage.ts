import EncryptedStorage from 'react-native-encrypted-storage';

export async function storeValue({ key, value }: { key: string, value: string }) {
    try {
        const response = await EncryptedStorage.setItem(key, value);
        console.log(JSON.stringify(response))
    } catch (e) {
        console.log(e)
    }
}

export async function getValue({ key }: { key: string }) {

    try {
        const response = await EncryptedStorage.getItem(key);
        return response;
    } catch (error) {
        console.log(error)
    }
}


export async function clearAllStoredData() {
    try {
        await EncryptedStorage.clear();

    } catch (error) {
        console.log(error)
    }
}