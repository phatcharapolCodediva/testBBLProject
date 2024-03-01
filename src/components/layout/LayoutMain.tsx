import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import ScrollViewBox from './ScrollViewMain';

type LayoutMainProps = {
  children: ReactNode;
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
export default function LayoutMain({ children }: Readonly<LayoutMainProps>) {
  return (
    <SafeAreaView style={style.Container}>
      <ScrollViewBox style={style.Container}>
        <View style={style.Container}>{children}</View>
      </ScrollViewBox>
    </SafeAreaView>
  );
}
