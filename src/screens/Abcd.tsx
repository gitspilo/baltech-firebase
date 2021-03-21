import React, { useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableNativeFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';
import { Text, theme } from 'galio-framework';
import { orderBy } from 'lodash';
import { RootState, Dispatch } from '../../store';

export function Abcd() {
  const dispatch = useDispatch<Dispatch>();
  const all = useSelector((state: RootState) => orderBy(state.abcd.all, ['small'], ['asc']));
  const isLoading = useSelector((state: RootState) => state.loading.effects.abcd.loadAbcd);

  useEffect(() => {    
    dispatch.abcd.loadAbcd();
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableNativeFeedback
      onPress={() => {}}
      background={TouchableNativeFeedback.Ripple(theme.COLORS.WHITE, true)}
    >
      <View style={styles.item}>
        <View style={styles.top}>
          <Image
            style={styles.image}
            source={{ uri: item.imageURL }}
          />
        </View>
        <View style={styles.middle}>
          <Text style={styles.label}>{item.label}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.capital}>{item.capital}</Text>
          <Text style={styles.small}>{item.small}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <SafeAreaView>
      <FlatList
        refreshing={isLoading}
        onRefresh={() => dispatch.abcd.loadAbcd()}
        data={all}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.small}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.CARD_BORDER_RADIUS,
    elevation: theme.SIZES.ANDROID_ELEVATION,
    shadowColor: theme.COLORS.WHITE,
    shadowOpacity: theme.SIZES.BLOCK_SHADOW_OPACITY,
    shadowRadius: theme.SIZES.BLOCK_SHADOW_RADIUS,
    shadowOffset: { width: 0, height: 0 },
  },
  top: {
    paddingTop: 5,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'contain',
    height: 120,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  capital: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  small: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 72,
  },
  middle: {
    alignItems: 'center',
  },
  label: {
    marginTop: 2,
    textTransform: 'capitalize',
    fontSize: 16,
  }
});