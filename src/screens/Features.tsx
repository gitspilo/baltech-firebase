import React from 'react';
import { StyleSheet, View, FlatList, TouchableNativeFeedback } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, theme } from 'galio-framework';
import { AntDesign } from '@expo/vector-icons'; 
import { features } from '../helpers/features'
import { HomeStackParamList } from '../navigations/HomeNavigation';

interface Props {
  navigation: StackNavigationProp<HomeStackParamList, "Abcd">;
}

export function Features({ navigation }: Props) {
  const renderItem = ({ item }: any) => (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate(item.nav)}
      background={TouchableNativeFeedback.Ripple(theme.COLORS.WHITE, false)}
    >
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.subTitle}</Text>
        </View>
        <View>
          <AntDesign name="rightcircleo" size={34} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.CARD_BORDER_RADIUS,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});
