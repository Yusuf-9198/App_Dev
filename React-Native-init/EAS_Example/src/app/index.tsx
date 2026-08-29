import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
} from 'react-native';
import Animated, {
  FadeInDown,
  FadeInRight,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

// Interface definitions
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Sub-component for individual Task item with micro-interactions
const TaskItem = React.memo(
  ({
    item,
    onToggle,
    onDelete,
  }: {
    item: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
  }) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const handlePressIn = () => {
      scale.value = withSpring(0.98, { damping: 12 });
    };

    const handlePressOut = () => {
      scale.value = withSpring(1, { damping: 12 });
    };

    return (
      <Animated.View
        entering={FadeInRight.duration(400)}
        layout={Layout.springify()}
        style={[styles.taskCard, animatedStyle]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => onToggle(item.id)}
          style={styles.taskContent}
        >
          <View
            style={[
              styles.checkbox,
              item.completed && styles.checkboxCompleted,
            ]}
          >
            {item.completed && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text
            style={[
              styles.taskText,
              item.completed && styles.taskTextCompleted,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onDelete(item.id)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.deleteText}>✕</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
);

TaskItem.displayName = 'TaskItem';

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Explore Expo Router architecture', completed: true },
    { id: '2', title: 'Design component state machine', completed: false },
    { id: '3', title: 'Refactor styles into dynamic tokens', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (!inputValue.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: inputValue.trim(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    setInputValue('');
  };

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* Header Section */}
        <Animated.View
          entering={FadeInDown.duration(600).springify()}
          style={styles.header}
        >
          <Text style={styles.badge}>TASK MANAGER</Text>
          <Text style={styles.title}>Workspace</Text>
        </Animated.View>

        {/* Input Bar */}
        <Animated.View
          entering={FadeInDown.delay(150).duration(600).springify()}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            placeholderTextColor="#8E8E93"
            value={inputValue}
            onChangeText={setInputValue}
            onSubmitEditing={handleAddTask}
            returnKeyType="done"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.addButton}
            onPress={handleAddTask}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Task List */}
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No tasks yet. Create one!</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    marginBottom: 20,
  },
  badge: {
    fontSize: 11,
    fontWeight: '700',
    color: '#007AFF',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1C1C1E',
    letterSpacing: -0.5,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1C1C1E',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
      },
      android: { elevation: 2 },
      web: { shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 6 },
    }),
  },
  addButton: {
    height: 48,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 24,
    gap: 12,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0F0F2',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
      },
      android: { elevation: 1 },
      web: { shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 8 },
    }),
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#C7C7CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxCompleted: {
    backgroundColor: '#34C759',
    borderColor: '#34C759',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  taskText: {
    fontSize: 16,
    color: '#1C1C1E',
    fontWeight: '500',
    flex: 1,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#8E8E93',
  },
  deleteText: {
    color: '#C7C7CC',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#8E8E93',
    fontSize: 15,
  },
});