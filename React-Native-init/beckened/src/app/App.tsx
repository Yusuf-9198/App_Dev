import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, TouchableOpacity, RefreshControl } from 'react-native';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  phone?: string;
  location?: {
    country: string;
  };
}

interface ApiResponse {
  data?: {
    data?: User[];
  };
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");
      const data: ApiResponse = await response.json();
      
      if (data?.data?.data) {
        setUsers(data.data.data);
      } else {
        setError('No users found');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const renderUserCard = ({ item }: { item: User }) => (
    <TouchableOpacity 
      style={styles.userCard}
      onPress={() => setSelectedUser(item)}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: item.avatar }}
        style={styles.avatar}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          {item.first_name} {item.last_name}
        </Text>
        <Text style={styles.userEmail}>{item.email}</Text>
        {item.location && (
          <Text style={styles.userLocation}>📍 {item.location.country}</Text>
        )}
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141313" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Users</Text>
        <Text style={styles.subtitle}>{users.length} members</Text>
      </View>

      {loading && !refreshing ? (
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={styles.loadingText}>Loading users...</Text>
        </View>
      ) : error && users.length === 0 ? (
        <View style={styles.centerContent}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchData}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={users}
          renderItem={renderUserCard}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={onRefresh}
              tintColor="#ffffff"
            />
          }
        />
      )}

      {selectedUser && (
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setSelectedUser(null)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            
            <Image
              source={{ uri: selectedUser.avatar }}
              style={styles.largeAvatar}
            />
            <Text style={styles.modalName}>
              {selectedUser.first_name} {selectedUser.last_name}
            </Text>
            <Text style={styles.modalEmail}>{selectedUser.email}</Text>
            {selectedUser.phone && (
              <Text style={styles.modalPhone}>📞 {selectedUser.phone}</Text>
            )}
            {selectedUser.location && (
              <Text style={styles.modalLocation}>
                📍 {selectedUser.location.country}
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141313',
  },
  header: {
    backgroundColor: '#1f1f1f',
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 16,
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#999999',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    gap: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4a90e2',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 2,
  },
  userLocation: {
    fontSize: 11,
    color: '#666666',
  },
  chevron: {
    fontSize: 24,
    color: '#4a90e2',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#ffffff',
  },
  errorText: {
    fontSize: 16,
    color: '#ff6b6b',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1f1f1f',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '85%',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#ffffff',
  },
  largeAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 8,
    marginBottom: 16,
  },
  modalName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  modalEmail: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 12,
  },
  modalPhone: {
    fontSize: 13,
    color: '#4a90e2',
    marginBottom: 8,
  },
  modalLocation: {
    fontSize: 13,
    color: '#4a90e2',
  },
});
