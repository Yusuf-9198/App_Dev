import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';

export default function Index() {
  const [output, setOutput] = useState<string>('');

  // 1. Save Simple String
  const saveData = async () => {
    try {
      await SecureStore.setItemAsync('Name', 'Muhammad');
      setOutput('Data saved successfully: Name = "Muhammad"');
    } catch (error) {
      setOutput(`Error saving data: ${error}`);
    }
  };

  // 2. Get Simple String
  const getData = async () => {
    try {
      const value = await SecureStore.getItemAsync('Name');
      setOutput(value ? `Fetched Name: ${value}` : 'No data found for "Name".');
    } catch (error) {
      setOutput(`Error fetching data: ${error}`);
    }
  };

  // 3. Delete Item
  const deleteData = async () => {
    try {
      await SecureStore.deleteItemAsync('Name');
      setOutput('Deleted key "Name" successfully.');
    } catch (error) {
      setOutput(`Error deleting key: ${error}`);
    }
  };

  // 4. Check Platform Availability
  const checkAvailability = async () => {
    try {
      const available = await SecureStore.isAvailableAsync();
      setOutput(
        available
          ? 'SecureStore is available on this platform.'
          : 'SecureStore is NOT available on this platform.'
      );
    } catch (error) {
      setOutput(`Error checking availability: ${error}`);
    }
  };

  // 5. Save Object (JSON Stringified)
  const saveObject = async () => {
    try {
      const user = {
        name: 'Muhammad',
        age: 25,
        email: 'fwafdew@example.com',
      };
      await SecureStore.setItemAsync('UserObject', JSON.stringify(user));
      setOutput('Object saved successfully as JSON string!');
    } catch (error) {
      setOutput(`Error saving object: ${error}`);
    }
  };

  // 6. Get Object (JSON Parsed)
  const getObject = async () => {
    try {
      const jsonValue = await SecureStore.getItemAsync('UserObject');
      if (jsonValue) {
        const parsedUser = JSON.parse(jsonValue);
        setOutput(`Fetched Object: ${JSON.stringify(parsedUser, null, 2)}`);
      } else {
        setOutput('No object data found for "UserObject".');
      }
    } catch (error) {
      setOutput(`Error fetching object: ${error}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SecureStore Tester</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.button} onPress={checkAvailability}>
          <Text style={styles.buttonText}>CHECK AVAILABILITY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={saveData}>
          <Text style={styles.buttonText}>SAVE STRING</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={getData}>
          <Text style={styles.buttonText}>GET STRING</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={saveObject}>
          <Text style={styles.buttonText}>SAVE OBJECT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={getObject}>
          <Text style={styles.buttonText}>GET OBJECT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={deleteData}>
          <Text style={styles.buttonText}>DELETE NAME</Text>
        </TouchableOpacity>

        <View style={styles.outputContainer}>
          <Text style={styles.outputLabel}>Output Log:</Text>
          <Text style={styles.outputText}>{output || 'Select an action above...'}</Text>
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
    color: '#000000',
  },
  container: {
    padding: 16,
    gap: 10,
  },
  button: {
    backgroundColor: '#0284c7',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  outputContainer: {
    marginTop: 15,
  },
  outputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 6,
  },
  outputText: {
    fontSize: 14,
    color: '#334155',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    minHeight: 60,
  },
});