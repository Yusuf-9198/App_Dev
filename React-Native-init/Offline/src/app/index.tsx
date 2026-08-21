import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [output, setOutput] = useState<string>('');

  // 1. SAVE DATA (setItem)
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('user_name', 'Muhammad Yusuf');
      setOutput('Data saved: user_name = "Muhammad Yusuf"');
    } catch (e) {
      setOutput(`Error saving data: ${e}`);
    }
  };

  // 2. GET DATA (getItem)
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user_name');
      setOutput(`Fetched value for "user_name": ${value}`);
    } catch (e) {
      setOutput(`Error getting data: ${e}`);
    }
  };

  // 3. REMOVE DATA (removeItem)
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('user_name');
      setOutput('Removed key: "user_name"');
    } catch (e) {
      setOutput(`Error removing data: ${e}`);
    }
  };

  // 4. CLEAR STORAGE (clear)
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setOutput('Storage cleared completely.');
    } catch (e) {
      setOutput(`Error clearing storage: ${e}`);
    }
  };

  // 5. GET ALL KEYS (getAllKeys)
  const getAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      setOutput(`All stored keys: ${JSON.stringify(keys)}`);
    } catch (e) {
      setOutput(`Error getting all keys: ${e}`);
    }
  };

  // 6. MULTI SET (multiSet)
  const multiSet = async () => {
    try {
      const keyValuePairs: [string, string][] = [
        ['role', 'Developer'],
        ['branch', 'IT'],
      ];
      await AsyncStorage.multiSet(keyValuePairs);
      setOutput('MultiSet saved: role = "Developer", branch = "IT"');
    } catch (e) {
      setOutput(`Error multi-setting data: ${e}`);
    }
  };

  // 7. MULTI GET (multiGet)
  const multiGet = async () => {
    try {
      const values = await AsyncStorage.multiGet(['role', 'branch']);
      setOutput(`MultiGet fetched: ${JSON.stringify(values)}`);
    } catch (e) {
      setOutput(`Error multi-getting data: ${e}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header Bar matching image */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>index</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Action Buttons */}
        <TouchableOpacity style={styles.button} onPress={saveData}>
          <Text style={styles.buttonText}>SAVE DATA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={getData}>
          <Text style={styles.buttonText}>GET DATA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={removeData}>
          <Text style={styles.buttonText}>REMOVE DATA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={clearStorage}>
          <Text style={styles.buttonText}>CLEAR STORAGE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={getAllKeys}>
          <Text style={styles.buttonText}>GET ALL KEYS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={multiSet}>
          <Text style={styles.buttonText}>MULTI SET</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={multiGet}>
          <Text style={styles.buttonText}>MULTI GET</Text>
        </TouchableOpacity>

        {/* Output Section matching image */}
        <View style={styles.outputContainer}>
          <Text style={styles.outputLabel}>Output:</Text>
          <Text style={styles.outputText}>{output}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    padding: 16,
    gap: 8,
  },
  button: {
    backgroundColor: '#29b6f6', // Light blue shade matching the image
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 0.5,
  }, 
  outputContainer: {
    marginTop: 20,
    paddingTop: 10,
  },
  outputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 6,
  },
  outputText: {
    fontSize: 14,
    color: '#555555',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 50,
  },
});