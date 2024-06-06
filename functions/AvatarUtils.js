import React from 'react';
import * as FileSystem from 'expo-file-system';


const getAvatar = async (scenario, image) => {
    switch (scenario) {
        case 1:
            switch (image) {
                case 'main':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/mainScenario1.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading mainScenario1 file:', error);
                        return null;
                    }
                case 'friend1':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/friend1Scenario1.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading friend1Scenario1 file:', error);
                        return null;
                    }
                case 'friend2':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/friend2Scenario1.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading friend2Scenario1 file:', error);
                        return null;
                    }
                case 'good':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/goodScenario1.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading goodScenario1 file:', error);
                        return null;
                    }
                case 'bad':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/badScenario1.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading badScenario1 file:', error);
                        return null;
                    }
                case 'banner':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/bannerScenario1.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading bannerScenario1 file:', error);
                        return null;
                    }
                default:
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/mainScenario1.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading mainScenario1 file:', error);
                        return null;
                    }
            }
        case 2:
            switch (image) {
                case 'main':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/mainScenario2.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading mainScenario2 file:', error);
                        return null;
                    }
                case 'friend1':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/friend1Scenario2.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading friend1Scenario2 file:', error);
                        return null;
                    }
                case 'friend2':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/friend2Scenario2.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading friend2Scenario2 file:', error);
                        return null;
                    }
                case 'good':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/goodScenario2.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading goodScenario2 file:', error);
                        return null;
                    }
                case 'bad':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/badScenario2.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading badScenario2 file:', error);
                        return null;
                    }
                case 'banner':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/bannerScenario2.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading bannerScenario2 file:', error);
                        return null;
                    }
                default:
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/mainScenario2.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading mainScenario2 file:', error);
                        return null;
                    }
            }
        case 3:
            switch (image) {
                case 'main':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/mainScenario3.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading mainScenario3 file:', error);
                        return null;
                    }
                case 'friend1':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/friend1Scenario3.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading friend1Scenario3 file:', error);
                        return null;
                    }
                case 'friend2':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/friend2Scenario3.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading friend2Scenario3 file:', error);
                        return null;
                    }
                case 'good':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/goodScenario3.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading goodScenario3 file:', error);
                        return null;
                    }
                case 'bad':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/badScenario3.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading badScenario3 file:', error);
                        return null;
                    }
                case 'banner':
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/bannerScenario3.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading bannerScenario3 file:', error);
                        return null;
                    }
                default:
                    try {
                        const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/mainScenario3.png');
                        return img.exists ? img.uri : null;
                    } catch (error) {
                        console.error('Error reading mainScenario3 file:', error);
                        return null;
                    }
            }
        default:
            try {
                const img = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'img/mainScenario1.png');
                return img.exists ? img.uri : null;
            } catch (error) {
                console.error('Error reading mainScenario1 file:', error);
                return null;
            }
    }
}



export { getAvatar };