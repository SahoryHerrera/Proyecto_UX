import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

const Homepage = () => {
  const currentDate = moment().format('dddd D [de] MMMM [de] YYYY');
  
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarButton}>
          <MaterialIcons name="home" style={styles.toolbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton}>
          <MaterialIcons name="luggage" style={styles.toolbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton}>
          <MaterialIcons name="favorite" style={styles.toolbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton}>
          <MaterialIcons name="account-circle" style={styles.toolbarIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.pageContent}>
        <View style={styles.welcomeBlock}>
          <View style={styles.welcomeRow}>
            <View style={styles.welcomeArticle}>
              <Text style={styles.welcomeTitle}>Descubrir</Text>
              <Text style={styles.welcomeDate}>{currentDate}</Text>
            </View>
            <View style={styles.weatherContainer}>
              <MaterialIcons name="wb-sunny" style={styles.weatherIcon} />
              <Text style={styles.weatherTemperature}>20°</Text>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar"
              placeholderTextColor="#888888"
            />
            <TouchableOpacity style={styles.searchButton}>
              <MaterialIcons name="search" style={styles.searchButtonIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categoriesBlock}>
          <Text style={styles.categoriesTitle}>Categorías</Text>
          <View style={styles.categoriesRow}>
            <TouchableOpacity style={styles.categoriesButton}>
              <Text style={styles.categoriesButtonText}>Cerca de ti</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoriesButton}>
              <Text style={styles.categoriesButtonText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoriesButton}>
              <Text style={styles.categoriesButtonText}>Para ti</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsRow}>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>Apart. Guijarros</Text>
                <Text style={styles.cardRating}>4.5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>River view</Text>
                <Text style={styles.cardRating}>4.5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>Portal del Angel</Text>
                <Text style={styles.cardRating}>4.5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>Lugar real</Text>
                <Text style={styles.cardRating}>4.5</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    backgroundColor: '#f0f0f0',
  },
  toolbarButton: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarIcon: {
    fontSize: 24,
    color: '#888888',
  },
  pageContent: {
    flex: 1,
    padding: 16,
  },
  welcomeBlock: {
    marginBottom: 16,
  },
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  welcomeArticle: {
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeDate: {
    fontSize: 16,
    color: '#666666',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    fontSize: 24,
    marginRight: 4,
  },
  weatherTemperature: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333333',
  },
  searchButton: {
    backgroundColor: '#2196f3',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonIcon: {
    fontSize: 24,
    color: '#ffffff',
  },
  categoriesBlock: {
    marginBottom: 16,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoriesRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  categoriesButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#cccccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesButtonText: {
    fontSize: 16,
    color: '#333333',
  },
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: '50%',
    marginBottom: 16,
  },
  cardHeader: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardRating: {
    fontSize: 14,
    color: '#888888',
  },
});

export default Homepage;
