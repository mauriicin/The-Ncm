import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AdMobRewarded } from 'expo-ads-admob';


export default function Banners(){    
    const rewardedAdID = Platform.select({
        //ios: "ca-app-pub-3940256099942544/1712485313",
        //android: "ca-app-pub-3940256099942544/5224354917",
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