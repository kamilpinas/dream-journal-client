import React from 'react';
import Header from '../components/Header';
import {DreamCard} from '../components/DreamCard';
import moment from 'moment';
import {theme} from '../core/theme';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Fab} from '../components/Fab';

export default function JournalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>Dziennik</Header>
      <ScrollView style={styles.scrollView}>
        <DreamCard
          title="Dzik jest bardzo zły"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Super mily sen to byl bardzo"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Super mily sen to byl bardzo"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Super mily sen to byl bardzo"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Super mily sen to byl bardzo"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          subtitle={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
        />
      </ScrollView>
      <Fab label="Dodaj sen" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
