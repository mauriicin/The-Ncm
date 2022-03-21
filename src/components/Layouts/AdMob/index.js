import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AdMobRewarded } from 'expo-ads-admob';


export default function Banners(){    
    const rewardedAdID = Platform.select({
        ios: "ca-app-pub-7956965293728495~1548807236",
        android: "ca-app-pub-7956965293728495~5679623932",
    });

    async function showRewarded() {
        AdMobRewarded.setAdUnitID(rewardedAdID);        
        AdMobRewarded.requestAdAsync().then(() => {
            AdMobRewarded.showAdAsync().catch((e) => console.log(e.message));
        });
    }   
    
    useFocusEffect(
        useCallback(() => {    
          return () => showRewarded();
        }, [])
      );
    return <></>;
}