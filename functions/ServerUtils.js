import * as FileSystem from 'expo-file-system';
import Settings from '../constants/Settings';

const hasData = async () => {
    const files = Settings.files;
    let hasDataApp = true;

    try {
        for (const file of files) {
            const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + file);
            if (!fileInfo.exists) {
                hasDataApp = false;
                break;
            }
        }
    } catch (error) {
        //console.error('Error:', error);
    }

    return hasDataApp;
}

export { hasData };