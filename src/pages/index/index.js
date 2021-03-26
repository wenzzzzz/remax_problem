import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import { requirePluginComponent, requirePlugin } from 'remax/macro';
const Cell =
  requirePluginComponent('plugin://contactPlugin/cell');
const PICK =
  requirePluginComponent('plugin://myPlugin/date-picker');

  console.log(Cell)
  console.log(PICK) 

export default () => {
  return (
    <View >
      <Cell />
    </View>
  );
};
