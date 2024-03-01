import React from 'react';
import {View, StyleSheet} from 'react-native';

import component from '@/components';

const {LayoutMain} = component;
const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default function CommentScreen() {
  return (
    <LayoutMain>
      <View />
    </LayoutMain>
  );
}
