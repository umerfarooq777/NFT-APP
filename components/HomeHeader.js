import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { RectButtonSec } from "./Button";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25,
            paddingVertical: SIZES.large, }}
        />

        <View style={{ width: 45, height: 45,marginRight:80 }}>
          <RectButtonSec
          text="Connected"
          textColor={COLORS.white}
          backColor={COLORS.success}
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>



{/* Glass morph card */}
      <View style={{ 
        height:150,
        marginVertical: SIZES.font-10,
        borderRadius: SIZES.font-5,
        backgroundColor:'rgba(255, 255, 255, 0.32)',
        borderColor:'white',
        borderWidth:.25,
         }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small,
          }}
        >
          Umer Farooq
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
            paddingHorizontal: SIZES.font,
          }}
        >
          0xeE19........ba33fD
        </Text>
        <View style={{ width: 45, height: 45, margin: SIZES.small }}>

          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%",borderColor:COLORS.primary,borderWidth:2,borderRadius:50 }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>

      </View>





      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 5,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
