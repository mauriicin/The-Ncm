import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AdMobRewarded } from 'expo-ads-admob';


export default function Banners(){    
    const rewardedAdID = Platform.select({
        ios: "ca-app-pub-7956965293728495/3346471615",
        android: "ca-app-pub-7956965293728495/3849884556",
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