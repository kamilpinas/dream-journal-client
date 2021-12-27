import React, {useState} from 'react';
import Header from '../components/Header';
import {DreamCard} from '../components/DreamCard';
import moment from 'moment';
import {theme} from '../core/theme';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Fab} from '../components/Fab';
import {NewDreamModal} from '../components/NewDreamModal';
import {Searchbar} from 'react-native-paper';

export default function JournalScreen({navigation}) {
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>Dziennik</Header>
      <ScrollView style={styles.scrollView}>
        <Searchbar
          placeholder="Szukaj"
          onChangeText={value => setSearchQuery(value)}
          value={searchQuery}
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Super mily sen to byl bardzo"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Super mily sen to byl bardzo"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Super mily sen to byl bardzo"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Super mily sen to byl bardzo"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
        <DreamCard
          title="Dzik jest bardzo zły"
          date={moment().format('YYYY-MM-DD')}
          content="lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum lotem ipsum "
          icon="camera"
          onPress={() => setOpenModal(true)}
        />
      </ScrollView>
      <Fab label="Dodaj sen" onClick={() => navigation.navigate('NewDream')} />
      {/* <NewDreamModal
        showModal={openModal}
        toggle={() => setOpenModal(!openModal)}
      /> */}
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
