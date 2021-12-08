import * as React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {theme} from '../core/theme';
interface FabProps {
  label: string;
}
export const Fab = (props: FabProps) => (
  <FAB
    label={props.label}
    style={styles.fab}
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: theme.colors.primary,
    margin: 20,
    right: 0,
    bottom: 0,
  },
});
