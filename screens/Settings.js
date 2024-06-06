import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableOpacity, Alert } from 'react-native';

import Bubble from './../components/Bubble';
import LongButton from './../components/LongButton';
import CircleButton from './../components/CircleButton';
import globalStyles from '../constants/GlobalStyles';
import TopBar from '../components/TopBar';
import Colors from '../constants/Colors';
import Settings from '../constants/Settings';
import IconTextButton from '../components/IconTextButton';

import * as FileSystem from 'expo-file-system';


export default function SettingsScreen({ navigation, route }) {


    function updateData() {
        Alert.alert(
            'Mise à jour des données',
            'Voulez-vous vraiment mettre à jour les données de l\'application ?',
            [
                {
                    text: 'Annuler',
                    style: 'cancel'
                },
                {
                    text: 'Mettre à jour',
                    onPress: () => {
                        const serverUrl = Settings.serverUrl;
                        const files = Settings.files;

                        FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'json', { intermediates: true });
                        FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'img', { intermediates: true });

                        let success = true;

                        files.forEach(file => {
                            let url = serverUrl + file;
                            fetch(url, { cache: "no-store" })
                                .then(response => response.json())
                                .then(data => {
                                    FileSystem.writeAsStringAsync(FileSystem.documentDirectory + file, JSON.stringify(data))
                                        .then(() => {
                                            console.log('File ' + file + ' written');
                                        })
                                        .catch(error => {
                                            console.error('Error:', error);
                                            success = false;
                                        });
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    success = false;
                                });
                        });


                        const img = Settings.img;

                        img.forEach(file => {
                            let url = serverUrl + file;
                            FileSystem.downloadAsync(url, FileSystem.documentDirectory + file)
                                .then(() => {
                                    console.log('File ' + file + ' downloaded');
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    success = false;
                                });
                        });

                        if (!success) {
                            Alert.alert(
                                'Erreur',
                                'Impossible de mettre à jour les données. Vérifiez votre connexion Internet et réessayez.',
                                [
                                    {
                                        text: 'OK',
                                        style: 'cancel'
                                    }
                                ]
                            )
                        } else {
                            setTimeout(() => {
                                Alert.alert(
                                    'Mise à jour des données',
                                    'Les données ont été mises à jour avec succès. Vous pourriez avoir à redémarrer l\'application pour voir certains changements.',
                                    [
                                        {
                                            text: 'OK',
                                            onPress: () => navigation.navigate('Home'),
                                            style: 'cancel'
                                        }
                                    ]
                                )
                            }, 1000);
                        }
                    }
                }
            ]
        )
    }



    return (

        <View style={globalStyles.container}>

            <TopBar type="none" title="Options" language="fr" />

            <View style={[globalStyles.containerTopBar, globalStyles.containerTopBarCenterVertical]}>

                <Bubble text="Que ce soit lors de la première installation de l'application ou lorsque vous avez modifié des textes ou des images de manière distante (depuis l'API), il faut synchroniser à nouveau les données avec celles du serveur." style={{ marginBottom: 20 }} />
                <IconTextButton text="Mettre à jour les données" icon={require('./../assets/img/cloudDownload.png')} onPress={updateData} />

                <LongButton text="Retour" onPress={() => navigation.navigate('Home')} />

            </View>
        </View>)
}