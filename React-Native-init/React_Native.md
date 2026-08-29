# React - Native - Notes
- React Native is an open source framework for building Android and iOS applications using React and the app platform’s native capabilities.
- React Native allows developers who know React to create native apps. At the same time, native developers can use React Native to gain parity between native platforms by writing common features once.

## 1. Directory Tree & Architecture

Modern Expo uses **file-based routing** within an `app` directory. Folder configurations automatically dictate screen navigation contexts.

```text
my-notes-app/
├── app/                  # 📂 Routing Core (File-based navigation pathways)
│   ├── _layout.tsx       # 📝 Master Frame Layout (Theme contexts, global providers)
│   ├── index.tsx         # 📱 Root Application Target (e.g., Notes Listing Screen)
│   ├── edit.tsx          # 📱 Secondary Target View (e.g., Note Editor Screen)
│   └── +not-found.tsx    # ⚠️ Fallback Error Layer (404 execution handler)
├── assets/               # 📂 Static Resources (Launch splashes, imagery, typography)
│   ├── images/
│   └── fonts/
├── components/           # 📂 Stateless UI Sub-units (Reusable Note Cards, Custom Buttons)
│   └── NoteCard.tsx
├── hooks/                # 📂 Isolated Custom Logic Engines (e.g., useResponsive)
│   └── useResponsive.ts
├── constants/            # 📂 Immutable Configuration Matrix (Global color palettes)
│   └── Colors.ts
├── app.json              # ⚙️ Application Manifest (Native build instructions)
├── package.json          # 📦 Package dependencies list & automation script profiles
└── tsconfig.json         # 🛠️ TypeScript strict evaluation constraints
```
## Components
- **Core Components**

| React Native Component | Android View | iOS View | Web Analog | Description |
| :--- | :--- | :--- | :--- | :--- |
| `<View>` | `ViewGroup` | `UIView` | `<div>` | A non-scrolling container that supports layout with Flexbox, styling, and touch handling. |
| `<Text>` | `TextView` | `UITextView` | `<p>` | Displays and styles strings of text. All text must be wrapped in this component. |
| `<Image>` | `ImageView` | `UIImageView` | `<img>` | Displays different types of images (local or from the web). |
| `<ScrollView>` | `ScrollView` | `UIScrollView` | `<div>` (scroll) | A scrolling container that can contain multiple components and views. |
| `<TextInput>` | `EditText` | `UITextField` | `<input>` | A component for entering text via the device keyboard. |

1. **View**
- A view is the basic building block of UI: A small rectangular element ont the screen which can
  be used to display text, images, buttons  or respond to user input.
- At runtime, React Native creates the corresponding Android and iOS views for those components.
- **React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps.**
- It means that when you write a piece of code, the phone doesn't see JavaScript—it sees its own native language.
  When you use a <Text> component in React Native, the framework tells the Android system to show an `android.widget.TextView` and tells the iOS system to show a `UITextView`.

```javascript
import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Cat = () => {
  return (
          <View>
            <Text>Hello, I am...</Text>
            <TextInput
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderWidth: 1,
                    }}
                    defaultValue="Name me!"
            />
          </View>
  );
};
export default Cat;
```
- Components with props
```javascript
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const CatProps = {
  name: string,
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
          <View>
            <Text>
              I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
            </Text>
            <Button
                    onPress={() => {
                      setIsHungry(false);
                    }}
                    disabled={!isHungry}
                    title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
            />
          </View>
  );
};

const Cafe = () => {
  return (
          <>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
          </>
  );
};

export default Cafe;
```
2. **TextInput**
- `TextInput` is a core component  that allows the user to enter text.
- It has an `onChangeText` prop that takes a function to be called every time the text changed.
- an `onSubmitEditing` prop that takes a function to be called when the text is submitted.
```javascript
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕') // hr word pr slice pizza show hoga
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
```

3. **ScrollView**
- The ScrollView is a generic scrolling container that can contain multiple components and views.
-  The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).
- ScrollViews can be configured to allow paging through views using swiping gestures by using the `pagingEnabled` props.
- Swiping horizontally between views can also be implemented on Android using the `ViewPager` component.
```javascript
import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

export default App;
```
- The `pagingEnabled` prop is a simple way to create "slides" or "pages" in your app UI. When you enable it,
  the scroll view stops at intervals equal to the size of the scroll view, rather than letting the user scroll freely.
- While ScrollView works on both, some developers prefer the `ViewPager` component on Android because it provides a more "native" feel for that specific platform's navigation patterns.
```javascript
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

// Get the width of the phone screen
const { width } = Dimensions.get('window');

const PagingExample = () => {
  return (
    <ScrollView 
      horizontal={true}   // Swipe left/right
      pagingEnabled={true} // Snap to pages
      showsHorizontalScrollIndicator={false}
    >
      <View style={[styles.page, { backgroundColor: '#ffadad' }]}>
        <Text style={styles.text}>Page 1</Text>
      </View>
      <View style={[styles.page, { backgroundColor: '#ffd6a5' }]}>
        <Text style={styles.text}>Page 2</Text>
      </View>
      <View style={[styles.page, { backgroundColor: '#fdffb6' }]}>
        <Text style={styles.text}>Page 3</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    width: width, // Each page is exactly the width of the screen
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default PagingExample;
```
- On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.
```javascript
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function ScrollViewExample() {
  return (
          <ScrollView
                  // horizontal: Changes scroll direction from vertical (default) to left-to-right
                  horizontal={true}

                  // pagingEnabled: Snaps the scroll position to multiples of the ScrollView's width
                  pagingEnabled={true}

                  // showsHorizontalScrollIndicator: Hides the scrollbar track at the bottom of the screen
                  showsHorizontalScrollIndicator={false}

                  // scrollEventThrottle: Controls how often scroll events trigger while dragging (16 = maximum precision)
                  scrollEventThrottle={16}

                  // onScroll: Fires a callback function whenever the user scrolls the view
                  onScroll={(event) => {
                    console.log('Scroll X Position:', event.nativeEvent.contentOffset.x);
                  }}

                  // contentContainerStyle: Applies styling directly to the scrollable wrapper instead of the outer frame
                  contentContainerStyle={styles.scrollContainer}
          >
            <View style={[styles.slide, { backgroundColor: '#ffadad' }]}>
              <Text style={styles.text}>Slide 1</Text>
            </View>
            <View style={[styles.slide, { backgroundColor: '#ffd6a5' }]}>
              <Text style={styles.text}>Slide 2</Text>
            </View>
          </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
  },
  slide: {
    width: width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```
- The _ScrollView_ works best to present a small number of things of a limited size. 
  All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. 
  If you have a long list of items which cannot fit on the screen, you should use a `FlatList` instead

### FlateList
- A highly optimized list component that only renders the items currently visible on the screen
- Think of `FlatList` as a "smart" list. Instead of loading 1,000 items at once and slowing down the phone, 
  it only loads the items you can actually see on the screen.
- **The Two Must-Have Props**
  1. **data**: Your array of information (like a list of names).
  2. **renderItem** : A function that tells React Native, 
      "Take one piece of data and show it like this" (e.g., wrap it in a <Text> component).
  
```javascript
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'Note One' },
  { id: '2', title: 'Note Two' },
  { id: '3', title: 'Note Three' },
];

export default function FlatListExample() {
  return (
          <FlatList
                  // data: The primary array of items you intend to pass into the list
                  data={DATA}

                  // renderItem: Takes an individual element from the data array and converts it into a visual UI node
                  renderItem={({ item }) => (
                          <View style={styles.card}>
                            <Text>{item.title}</Text>
                          </View>
                  )}

                  // keyExtractor: Extracts a unique string key for each item, allowing React to track updates efficiently
                  keyExtractor={(item) => item.id}

                  // ListHeaderComponent: Renders a static header element at the very top of your list
                  ListHeaderComponent={<Text style={styles.header}>My Dynamic List</Text>}

                  // ItemSeparatorComponent: Renders a component between each row (but not at the top or bottom)
                  ItemSeparatorComponent={() => <View style={styles.separator} />}

                  // initialNumToRender: Dictates how many items are loaded initially on screen mount to save memory
                  initialNumToRender={10}
          />
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 20, fontWeight: 'bold', padding: 10 },
  card: { padding: 20, backgroundColor: '#fff' },
  separator: { height: 1, backgroundColor: '#eee' },
});
```
- If you want to render a set of data broken into logical sections, maybe with section headers, similar to UITableView on iOS, then a SectionList is the way to go.
```javascript
import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListBasics;
```
### Switch
- A visual toggle button that goes left/right or changes color to represent an "On" or "Off" state.
- **When to use:** Perfect for binary preferences, like toggling your Notes app between Light Mode and Dark Mode.
```javascript
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SwitchExample() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Toggle Option State:</Text>
      <Switch
        // trackColor: Customizes background track color for both the 'false' (off) and 'true' (on) states
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        
        // thumbColor: Colors the circular button toggle indicator depending on the active state
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        
        // ios_backgroundColor: Sets a fallback background color specifically for iOS devices
        ios_backgroundColor="#3e3e3e"
        
        // onValueChange: A callback function executed when the user toggles the switch back and forth
        onValueChange={(newValue) => setIsEnabled(newValue)}
        
        // value: The current underlying boolean value reflecting the switch state
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 20 },
});
```

### KeyboardAvoidingView
- A smart wrapper that automatically moves your text inputs out of the way when the phone's software keyboard slides up.
- Essential for screens where users type long notes, ensuring the keyboard doesn't cover up the text input field.
```javascript
import React from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, Platform, View } from 'react-native';

export default function KeyboardAvoidingExample() {
  return (
    <KeyboardAvoidingView
      // behavior: Adjusts the layout strategy based on OS ('padding' is preferred for iOS; 'height' or omission for Android)
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      
      // keyboardVerticalOffset: The distance between the top of the user screen and the React Native view layout
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      
      style={styles.container}
    >
      <View style={styles.inner}>
        <TextInput 
          placeholder="Tap here to bring up the keyboard..." 
          style={styles.input} 
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { flex: 1, justifyContent: 'flex-end', padding: 20 },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10 },
});
```
### SafeAreaView
- A built-in container that automatically adds spacing to your app so content doesn't get cut off by phone notches, 
  camera holes, or status bars.
- Typically wrapped around the very top level of your screen layout so your headers don't hide behind the iPhone notch.
- In react-native `safeAreaView` is depresated, means recommended to not use.
- If we use it some how it only runs on IOS(Above 11 version)
- Therefore, we it from `react-native-safe-area-context`, already installed by expo dependency.
- if we don't want to use this, then use one hook `useSafeAreaInsets()`



### SafeAreaProvider
- (These require the `react-native-safe-area-context` library)
- A top-level wrapper that measures the exact physical boundaries, screen notches, and safe zones of the device.
- You must wrap your entire root App component in this exactly once so the safe area hooks work properly inside your screens

### Utilities & Hooks
1. **StyleSheet**
- A tool that allows you to define all your visual styles (colors, layout rules, margins) using structured JavaScript objects.
- Used to keep code organised.

2. **Platform**
- An API that detects whether the app is running on an Android device, an iOS device, or the Web.
- Essential when you need to apply different behavior or styles specifically for Android vs. iOS (like adjusting keyboard padding offsets)

3. **useColorScheme**
- A React hook that asks the device system, "Is the user currently using Dark Mode or Light Mode?"
- Used to automatically flip your background and text colors to match the user's system preference.
```javascript
import React from 'react';
import { View, Text, StyleSheet, Platform, useColorScheme } from 'react-native';

export default function PlatformAndThemeExample() {
  // useColorScheme: Hook returns 'light', 'dark', or null based on the device's system settings
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBg : styles.lightBg]}>
      {/* Platform.OS: Detects current operating system environment ('ios', 'android', or 'web') */}
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        Operating System: {Platform.OS.toUpperCase()}
      </Text>
      
      {/* Platform.Version: Fetches system API version levels (e.g., Android API 34 or iOS 17) */}
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        OS Version Level: {Platform.Version}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // Platform.select: Returns a specific key value evaluated dynamically based on device platform
    borderRadius: Platform.select({ ios: 10, android: 5, default: 0 }),
  },
  lightBg: { backgroundColor: '#fff' },
  darkBg: { backgroundColor: '#333' },
  lightText: { color: '#000' },
  darkText: { color: '#fff' },
});
```
4. **useSafeAreaInsets**
- A hook that gives you the exact pixel dimensions of the top notch, bottom home bar, and side margins.
- Used when you want precise layout control. Instead of using `SafeAreaView`, 
  you can use standard `<View>` components and apply padding dynamically based on these inset numbers
 
```javascript
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native'; // Alternative raw block component
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeScreenLayout() {
  // useSafeAreaInsets: Hook returns padding dimensions required for top, bottom, left, and right safe boundaries
  const insets = useSafeAreaInsets();

  return (
    // We apply top and bottom inset spacing using standard component paddings dynamically
    <View style={[styles.mainView, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <Text>This text is safely positioned below any phone camera notches or status bars.</Text>
    </View>
  );
}

export default function App() {
  return (
    // SafeAreaProvider: Must wrap the entire top root tree once to measure physical screen bezels
    <SafeAreaProvider>
      <HomeScreenLayout />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 20 },
});
```
### React Navigation
- Read Official doc.
**_- routing is the mechanism that manages your application's screen stack while maintaining local state and user context.**_
- switching between multiple screens , Not in `react-native`
- we use another library `react-nagvigation`
- it provides routing logic.
- Installation
  - `npx create-expo-app -t blank-typescript@sdk-55`  OR
  - `bunx create-expo-app -t blank-typescript@sdk-55
- To run
  - `npx expo start`
- To use react navigation, we have to install so libraries
  - `npm add @react-navigation/native`  `bun add @react-navigation/native`
  - Next, install the dependencies used by most navigators: `react-native-screens` and `react-native-safe-area-context`.
  - now, then `npx expo install react-native-screens react-native-safe-area-context`
- when you have to use react navigation, we have setup `navigator`
- **Navigator**
  - Navigators handle transitions between screens and provide UI such as headers, tab bars, etc.
  - A `_Navigator_` is React component that decides how to render the screens you have defined.
  - It contains Screen elements as its children to define the configuration for screens.
  - `NavigationContainer` is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure.
  - Usually, we'd render this component at the root of our app, which is usually the component exported from `App.js`.
  - ```javascript
    function App() {
    return (
    <NavigationContainer>
    <Stack.Navigator> //  This is a Navigator
    <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    );
    }
    ```
- **_Static Navigation_** :- Screens are declared in one config object, no need to load dynamically, good for small app, consistence arcitecture.
- then install `npm install @react-navigation/native-stack`
-  then `npm install @react-navigation/elements`
- We can create a native stack navigator by using the `createNativeStackNavigator` function:
- `createStaticNavigation` It takes your static layout configuration (the stack you created above) and automatically turns it into a valid React component that manages your app's navigation state.
- `createStaticNavigation` takes the navigator and returns a component to render in the app. It should only be called once, typically at the root of your app (e.g., in App.tsx):
- To specify screen-specific options, we can specify an `options` property, and for common options, we can specify `screenOptions`.

```javascript
import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Overview', // Top bar will display "Overview" instead of "Home"
        headerStyle: { backgroundColor: '#f4511e' }, // Changes header color to orange
        headerTintColor: '#fff', // Changes header text color to white
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
```
- _Passing Additional Data_
  - To pass additional data to a screen, use `.with` to wrap the navigator with React context to pass data to the screens:
```javascript
const ExtraDataContext = React.createContext();

function HomeScreen() {
  const extraData = React.useContext(ExtraDataContext);

  return <Text>{extraData}</Text>;
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: createNativeStackScreen({
      screen: HomeScreen,
    }),
  },
}).with(({ Navigator }) => {
  return (
    <ExtraDataContext.Provider value={someData}>
      <Navigator />
    </ExtraDataContext.Provider>
  );
});
``` 


- **_Dynamic Navigation_** :- 
-  then install `npm install @react-navigation/native-stack`
-  then `npm install @react-navigation/elements`
```javascript
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
          </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}
                          options={{
                              title:"Home",
                            headerStyle: {
                                  backgroundColor:"#111827"
                            },
                            headerTintColor:"#fff",
                            headerTitleStyle:{
                                  fontWeight:"bold"
                            }
                          }}
            />
          </Stack.Navigator>
  );
}

export default function DynamicStackNavigator() {
  return (
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
  );
}

```
#### Comparesion between stack navigator and native Stack navigator



#### Types of Navigators
1. **Stack navigator**
- screens are Stacked, every new is stacked into old screen.
- use when screen to screen navigation, want back button, Authentication flow
- Run commands `npm install @react-navigation/stack`
- then `npx expo install react-native-gesture-handler @react-native-masked-view/masked-view`
```javascript
import { createStackNavigator } from '@react-navigation/stack';

const MyStack = createStackNavigator({
screens: {
Home: HomeScreen,
Profile: ProfileScreen,
},
});
```




2. **Tab Navigator**
- Like instagrame home, search , message, profile
- run cammand `npm install @react-navigation/bottom-tabs`
```javascript
// Dynanmic Tab navigator
import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName = 'ProfileScreen' // it make profile page initial
                   screenOptions={{headerShown:false}}
    > 
      <Tab.Screen name="Home" component={HomeScreen} 
                  options={{
                      title:"Dashboard",
                      tabBarLabel:"Home" // tab name
                  }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}  
```
- how to insert icons `npx expo install @expo/vector-icons`
  ```javascript
  //  <Tab.Navigator initialRouteName = 'ProfileScreen' // it make profile page initial
  //                  screenOptions={{
  //
  // ({route}) => ({
  //     tabBarIcon:({focused , color, size})=>{
  // const icon = route.name === "Home"? focused? "home":'home-outline'  : route.name = "search"
  //          ? focused ? "search" : "search-outline" : focused ? "person" : "person-outline"
  // return <Ionicons name ={icon} size ={size} color={color}/>
  //    
  // }
  //
  // })
  // }}
  //   > </Tab.Navigator>
   ```



3. **Drawer Navigator**
- more like
- run cammand `npm install @react-navigation/drawer`
- then `npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets`
```javascript
// Static 
import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}

const MyDrawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(MyDrawer);

export default function App() {
  return <Navigation />;
}
```


#### Transaction between one screen to another
1. By Button Components `<Button screen={"Details"}> go to Detail screen</Button>`
2. by Link components `<Link screen={"Details"}> go to Detail screen</Link>`
3. Using Hooks ` useNavigation()`
   - In Button you have to write `<Button tiltle='go thet screen' onPress={()=> navigation.navigate("That Screen")> go to Detail screen</Button>`
   - OR `<Button tiltle='go thet screen' onPress={()=> navigation.popTo("That Screen")> go to Detail screen</Button>` 
   - Going directly to the top(First) page `<Button tiltle='go thet screen' onPress={()=> navigation.popToTop("That Screen")> go to Detail screen</Button>`
   - one more, replace current screen user can't go prev screen, `Button tiltle='go thet screen' onPress={()=> navigation.replace("That Screen")> go to Detail screen</Button>`
   - going back screen `goBack()`
   - `push()` Always add a new instance


### Expo Router
- `https://docs.expo.dev/router/introduction/`
- it is basically built on top of React-aNative Navigation, Expo Router navigation is truly native and platform-optimized by default. 
- Expo Router is a file-based router for React Native and web applications.
- **FileBased Routing** :- File-based routing means that your folders and files inside your project determine your app's screens automatically.
  Instead of writing javascript configuration code to map a component to a screen name,
 the computer simply looks at your project directory structure to figure out where things are.
- If you create a file named app/edit.tsx, Expo Router automatically builds a navigation pathway for you. If you delete the file, the screen disappears from the app.
- It works almost every Platform
- **Shareable**: Every screen in your app is automatically deep linkable, making any route in your app shareable with links
- Offline-first: If a user opens your app in an airplane or a tunnel with no cellular data, the routing logic doesn't break.
  The app’s screens are saved directly on the device hardware and update automatically when internet access returns.
- **_Optimized Performance:_**
   -In **Development**: It utilizes "deferred bundling," meaning it only compiles the screen you are currently looking at on your emulator, keeping your computer running fast.
   -In **Production**: It uses "`lazy-evaluation`," meaning your app's bundle size stays small because code is only executed when a user opens that specific screen.
- _**Discoverable (SEO):**_ Because the app can render as actual static pages on the web, search engines like Google can crawl through your app content and index it, allowing users to find your app screens through a standard Google search.

- **_Static Route_**
- Anything in app(any folder) treat as route and anything outside folder treat as components.
  this is called file based routing
- index.tsx --> /
- profile/index.tsx --> /profile {we can make more files in it}, /profile/display.tsx --> /profile/display
- profile.tsx --> /profile
- **_Dynamic Route_**
- A route that accept a variable value.
- like Instagrame ko kese pata chalta hai konse ID login hai abhi
 we use Hook, name must be in form of [File_Name], `const {File_Nmae} = useLocalSearchParam()`
- `<Link href={"/1254"}> go to user page</Link>`
- if expo routes finds more than one dynamic route, jo phele dekhega us pr redirect ho jayega.
- how to Aviod?, we use nested route means hr route ko alag alag folder me daldo. then /user/[username] `herf ={"/user/username"}`
- We can also make Nested dynamic route within dyinamic route,
 /user/[userID]/[Username] -> `herf ={"/user/9198/yusuf"}`
 => hook is used this manner `const {userID, Usrrname} = useLocalSearchParam()`
- **_catch-all_** : If we want to use many nested Dynamic routes, Make folder /doc/[...slug]
- `herf ={"/doc/9198/yusuf/beig"}`
- `console.log(slug)` => ["9198","yusuf", "beig"]
- `_Layout.tsx` : wrapped around siblings, sharing same layout to every sibling.
- if we make folder name like '(Folder_name)', so we can access inner file only by writting `/innerFile.txt`

### Expo Router vs React Navigation - Which One Should You Use in 2026?
- 

#### Stack In Expo Router

```javascript
import {Stack, stack} from "expo-router";

export default function RootLayout() {
  return (
          <Stack>
            <Stack.Protected guard ={false}> // now screens are not accessable 
            <Stack.Screen name"index"/>
            <Stack.Screen name"about"/>
            </Stack.Protected>        
          </Stack>
  )
}
```
#### JS tab in expo 

#### Native tabs in expo router
- ``
```javascript
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" /> // sf for IOS and md for android
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

```
#### Custom Tab in expo router
- **State** :- have access of all available tabs and current tabs.
- **descriptor** :- screen options
- **navigation** :- move between screens/ tabs
- 
```javascript

```

#### Drawer in expo routerr
- run `npx expo install react-native-reanimated react-native-worklets react-native-gesture-handler`



### Networking And Backend Integration
- **API(Application Programming Interface)** :-It passes your request from your mobile app to a backend database server, and then returns the data back to your screen.
- **REST API** :- A REST API is a popular design style for these servers that uses standard HTTP Methods to determine what action to perform:

    - **GET:** Retrieve or download information from a server (e.g., reading your notes list).

    - **POST:** Send new information to a server to create something new (e.g., publishing a brand new note).

    - **PUT:** Replace an existing resource entirely with updated information.

    - **PATCH:** Modify only a small part of an existing resource (e.g., toggling a note's background color without altering the text content).

    - **DELETE:** Permanently remove a specific piece of information from the backend database server.
```tsx
// src/lib/db.ts
import { createClient } from "@libsql/client";

// Initialize and export the global database client instance using your strict environment variables
export const db = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
});

// app/users+api.ts
import { db } from "@/lib/db";

// 1. GET: Fetches the entire directory dataset table rows
export async function GET() {
    try {
        const result = await db.execute({
            sql: 'SELECT * FROM users_data'
        });
        return Response.json(result.rows);
    } catch (error) {
        return Response.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

// 2. POST: Injects a new user entity row safely using query argument binding structures
export async function POST(request: Request) {
    try {
        const { name, email } = await request.json();

        if (!name || !email) {
            return Response.json({ error: "Name and Email are required" }, { status: 400 });
        }

        const result = await db.execute({
            sql: 'INSERT INTO users_data (name, email) VALUES (?, ?)',
            args: [name, email]
        });

        return Response.json(
            { id: result.lastInsertRowid?.toString(), name, email },
            { status: 201 }
        );
    } catch (error) {
        return Response.json({ error: "Failed to create user" }, { status: 500 });
    }
}
// app/users/[id]+api.ts
import { db } from "@/lib/db";

type Ctx = { params: { id: string } };

// 1. GET: Identifies and yields an individual item row based on a specific id slug
export async function GET(_req: Request, { params }: Ctx) {
    try {
        const result = await db.execute({
            sql: 'SELECT * FROM users_data WHERE id = ?',
            args: [params.id]
        });

        if (result.rows.length === 0) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        return Response.json(result.rows[0]);
    } catch (error) {
        return Response.json({ error: "Failed to fetch user" }, { status: 500 });
    }
}

// 2. PATCH: Modifies field subsets on an active item row dynamically
export async function PATCH(request: Request, { params }: Ctx) {
    try {
        const { name, email } = await request.json();

        if (!name && !email) {
            return Response.json({ error: "Provide at least a name or email to modify" }, { status: 400 });
        }

        if (name && email) {
            await db.execute({
                sql: 'UPDATE users_data SET name = ?, email = ? WHERE id = ?',
                args: [name, email, params.id]
            });
        } else if (name) {
            await db.execute({
                sql: 'UPDATE users_data SET name = ? WHERE id = ?',
                args: [name, params.id]
            });
        } else if (email) {
            await db.execute({
                sql: 'UPDATE users_data SET email = ? WHERE id = ?',
                args: [email, params.id]
            });
        }

        return Response.json({ success: true, message: `User record ${params.id} updated successfully` });
    } catch (error) {
        return Response.json({ error: "Failed to update user parameters" }, { status: 500 });
    }
}

// 3. DELETE: Drop a single user record row completely out of the table matrix
export async function DELETE(_req: Request, { params }: Ctx) {
    try {
        const result = await db.execute({
            sql: 'DELETE FROM users_data WHERE id = ?',
            args: [params.id]
        });

        if (result.rowsAffected === 0) {
            return Response.json({ error: "Target user row does not exist" }, { status: 404 });
        }

        return Response.json({ success: true, message: `User record ${params.id} purged successfully` });
    } catch (error) {
        return Response.json({ error: "Failed to delete user record" }, { status: 500 });
    }
}
// app/index.tsx
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";

type UserRecord = {
    id: number;
    name: string;
    email: string;
};

export default function Index() {
    const [users, setUsers] = useState<UserRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchUserData() {
            try {
                // Fetches data sets securely straight from your newly setup Expo user API system
                const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");
                const jsonWrapper = await res.json();

                if (jsonWrapper?.data?.data) {
                    setUsers(jsonWrapper.data.data);
                }
            } catch (error) {
                console.error("Network interface connection failure error log:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUserData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#4f46e5" style={styles.center} />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Network Registry Board</Text>
            <FlatList
                data={users}
                keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userCard}>
                        <Text style={styles.nameLabel}>{item.name || "Anonymous Member"}</Text>
                        <Text style={styles.emailLabel}>{item.email}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8fafc", paddingTop: 40 },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    headerTitle: { fontSize: 18, fontWeight: "700", color: "#0f172a", textAlign: "center", marginBottom: 15 },
    userCard: { padding: 16, backgroundColor: "#ffffff", borderRadius: 8, marginHorizontal: 16, marginVertical: 6, elevation: 1 },
    nameLabel: { fontSize: 15, fontWeight: "600", color: "#1e293b" },
    emailLabel: { fontSize: 13, color: "#64748b", marginTop: 2 },
});
```


- go freeAPi website
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function RandomQuoteScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an asynchronous function inside your hook layout
    async function fetchUserData() {
      try {
        // Corrected: Pass the raw endpoint URL directly without the "curl" terminal command
        const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/random");
        const jsonResult = await response.json();
        
        // Save the parsed data to our local component state
        setData(jsonResult.data);
      } catch (error) {
        console.error("Failed to collect API dataset:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []); // Empty dependency array ensures this execution fires exactly once when the screen mounts

  if (loading) {
    return <ActivityIndicator size="large" color="#4f46e5" style={styles.center} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>"{data?.content}"</Text>
      <Text style={styles.authorText}>— {data?.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f8fafc' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  quoteText: { fontSize: 18, fontStyle: 'italic', color: '#0f172a', textAlign: 'center' },
  authorText: { fontSize: 14, fontWeight: '700', color: '#64748b', marginTop: 10, textAlign: 'center' },
});
```
#### expo api routes
- File naming convention file-name + api.ts
```javascript
export function GET(request: Request) {
  return Response.json({ hello: 'world' });
}
// then  on app.json
// {
//     "web": {
//     "output": "server"
// }
// }
```
- turso, neon, supabase are DataBase
- Turso(visit website)
- `npm add @libsql/client`
- make file `.env`
- make lib folder in src,then db.ts

### Data storage & Offline Support

- https://docs.expo.dev/versions/latest/sdk/async-storage/
- Official link https://react-native-async-storage.github.io/2.0/Usage/
- Async Storage is asynchronous, unencrypted, persistent, key-value storage for your React Native application.
- Installation `npm expo install @react-native-async-storage/async-storage`

```javascript
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
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
```
- **Limitation of AsynchStorage:**
1. Not Encrypted
2. slower than memory storage
3. No query system

#### Secure Storage
- It provides by expo for storing sensitive data safly inside your mobile application.
- IOS => Keychain
- Android => keystore

#### Expo SQLite
- `npx expo install expo-sqlite`
- Large strcture data
- offline first app
- searching/ filtering/sorting
- relational data

#### how to synch sqlite and turso in expo 

### Expo File System
- `npx expo install expo-file-system`
- This module allow interact with the device local file system.
- createfile, readfile, uploadfile etc
- File URL :- every file has a path called url
- Sandbox :-
- Directories :-
- DocumentDirectory :-

## Sensors
- Hardware component inside the a device that detect and measures physical properties from the real world.
- example movement , pressure etc

### Expo sensor
- Library helps to communicat between expo and sensor
- expo-sensors provide various APIs for accessing device sensors to measure motion, orientation, pressure, magnetic fields, ambient light, and step count.
- `npx expo install expo-sensors`
- **AccleroMeter:-** Accelerometer from expo-sensors provides access to the device accelerometer sensor(s) and associated listeners to respond to changes in acceleration in three-dimensional space, meaning any movement or vibration.
- **Gyroscope:-** (Radians per sec) Gyroscope from expo-sensors provides access to the device's gyroscope sensor to respond to changes in rotation in three-dimensional space. 
- 16ms => 60fps
- **sensor fusion**
- **LightSensor:-** LightSensor from expo-sensors provides access to the device's light sensor to respond to illuminance changes.
for andriod only now.


### Platform-Specific Code
- If we want to implement separate visual components for Android and iOS. 
- **React Native provides two ways to organize your code and separate it by platform:**
  1. **_PlatForm Module_**
  - it detects the platform in which the app is running
  - Used when only small parts of a components are platform specific
  ```javascript
   import {Platform, StyleSheet} from 'react-native';

   const styles = StyleSheet.create({
   height: Platform.OS === 'ios' ? 200 : 100,
   });
   ```
- There is also a Platform.select method available that,
  given an object where keys can be one of 'ios' | 'android' | 'native' | 'default', returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, ios and android keys will take preference. 
  If those are not specified, native key will be used and then the default key.
```javascript
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});
```
- **Detecting The Android version**
  ```javascript
  import {Platform} from 'react-native';

  if (Platform.Version === 25) {
  console.log('Running on Nougat!');
   }
  ```
  - **_Note:_** Version is set to the Android API version not the Android OS version. To find a mapping please refer to Android Version History.
- **Detecting The iOS version**
  - On iOS, the Version is a result of `-[UIDevice systemVersion]`, which is a string with the current version of the operating system.
    An example of the system version is "10.3".
    For example, to detect the major version number on iOS:
  ```javascript
  import {Platform} from 'react-native';

  const majorVersionIOS = parseInt(Platform.Version, 10);
  if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
  }
  ```
  2. **Platform-specific extensions**
  - When your platform-specific code is more complex, you should consider splitting the code out into separate files.
  - React Native will detect when a file has a .ios. or .android. extension and load the relevant platform file when required from other components.
  - example ` BigButton.ios.js
             BigButton.android.js`


