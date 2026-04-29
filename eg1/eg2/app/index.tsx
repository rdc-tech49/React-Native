import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const FlexboxMastery = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header Row */}
      <View style={styles.header}>
        <View style={styles.circle} />
        <View style={styles.headerTextContainer}>
          <View style={styles.lineLong} />
          <View style={styles.lineShort} />
        </View>
      </View>

      {/* 2. Main Content (Filling Space) */}
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Flex: 1 Area</Text>
        </View>
      </View>

      {/* 3. Footer Grid (Using Wrap) */}
      <View style={styles.footer}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the whole screen
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    flexDirection: 'row', // Align horizontal
    alignItems: 'center', // Center vertically
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    gap: 25, // Modern spacing
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6200EE',
  },
  headerTextContainer: {
    flex: 1, // Takes up remaining horizontal space
    gap: 8,
  },
  lineLong: { height: 10, width: '80%', backgroundColor: '#e4dfdfff', borderRadius: 5 },
  lineShort: { height: 10, width: '40%', backgroundColor: '#E0E0E0', borderRadius: 5 },
  
  content: {
    flex: 2, // Grows twice as much as other areas
    justifyContent: 'center',
    marginVertical: 20,

  },
  card: {
    flex: 1,
    backgroundColor: '#BB86FC',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
  },
  cardText: { fontSize: 20, fontWeight: 'bold', color: 'white' },

  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows items to wrap to next line
    justifyContent: 'space-between',
    gap: 10,
  },
  square: {
    width: '48%', // Roughly half the width
    height: 80,
    backgroundColor: '#03DAC6',
    borderRadius: 10,
  },
});

export default FlexboxMastery;