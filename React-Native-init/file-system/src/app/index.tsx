import { useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView, TextInput } from "react-native";
import { File, Directory, Paths } from "expo-file-system";

export default function Index() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  // Base file references
  const demoFile = new File(Paths.document, "Demo.txt");
  const copiedFile = new File(Paths.document, "Demo_Copy.txt");
  const movedFile = new File(Paths.document, "Demo_Moved.txt");
  const docDir = new Directory(Paths.document);

  // Write content to Demo.txt
  const handleWriteFile = async () => {
    try {
      if (!demoFile.exists) {
        demoFile.create();
      }
      demoFile.write(inputText || "Hello from Expo FileSystem!");
      setOutput(`File written successfully at: ${demoFile.uri}`);
    } catch (e: any) {
      setOutput(`Error writing file: ${e.message}`);
    }
  };

  // Read content from Demo.txt
  const handleReadFile = async () => {
    try {
      if (!demoFile.exists) {
        setOutput("Demo.txt does not exist.");
        return;
      }
      setOutput(`Demo.txt Content:\n${demoFile.text()}`);
    } catch (e: any) {
      setOutput(`Error reading file: ${e.message}`);
    }
  };

  // Copy Demo.txt -> Demo_Copy.txt
  const handleCopyFile = async () => {
    try {
      if (!demoFile.exists) {
        setOutput("Cannot copy: Demo.txt does not exist.");
        return;
      }
      demoFile.copy(copiedFile);
      setOutput(`Copied Demo.txt to Demo_Copy.txt`);
    } catch (e: any) {
      setOutput(`Error copying file: ${e.message}`);
    }
  };

  // Move Demo.txt -> Demo_Moved.txt
  const handleMoveFile = async () => {
    try {
      if (!demoFile.exists) {
        setOutput("Cannot move: Demo.txt does not exist.");
        return;
      }
      demoFile.move(movedFile);
      setOutput(`Moved Demo.txt to Demo_Moved.txt`);
    } catch (e: any) {
      setOutput(`Error moving file: ${e.message}`);
    }
  };

  // List all contents in the directory
  const handleListFiles = async () => {
    try {
      const contents = docDir.list();
      if (contents.length === 0) {
        setOutput("Directory is empty.");
        return;
      }
      const names = contents.map((item) => item.name).join("\n");
      setOutput(`Files in Directory:\n${names}`);
    } catch (e: any) {
      setOutput(`Error listing files: ${e.message}`);
    }
  };

  // Delete ALL files inside Paths.document directory
  const handleDeleteAllFiles = async () => {
    try {
      const contents = docDir.list();
      if (contents.length === 0) {
        setOutput("Directory is already empty.");
        return;
      }

      let deletedCount = 0;
      for (const item of contents) {
        item.delete();
        deletedCount++;
      }

      setOutput(`Successfully deleted ${deletedCount} item(s). Directory is clear.`);
    } catch (e: any) {
      setOutput(`Error deleting files: ${e.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Expo FileSystem API</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter text to write"
        value={inputText}
        onChangeText={setInputText}
      />

      <View style={styles.buttonGrid}>
        <Button title="Write Demo.txt" onPress={handleWriteFile} />
        <Button title="Read Demo.txt" onPress={handleReadFile} />
        <Button title="Copy File" onPress={handleCopyFile} />
        <Button title="Move File" onPress={handleMoveFile} />
        <Button title="List Files" onPress={handleListFiles} />
        <Button title="Delete All Files" color="red" onPress={handleDeleteAllFiles} />
      </View>

      <View style={styles.outputBox}>
        <Text style={styles.outputLabel}>Output / Logs:</Text>
        <Text style={styles.outputText}>{output}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20,
  },
  outputBox: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 6,
    minHeight: 120,
  },
  outputLabel: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  outputText: {
    fontFamily: "monospace",
  },
});