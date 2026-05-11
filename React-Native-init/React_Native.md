# React - Native - Notes
- React Native is an open source framework for building Android and iOS applications using React and the app platform’s native capabilities.
- React Native allows developers who know React to create native apps. At the same time, native developers can use React Native to gain parity between native platforms by writing common features once.

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

type CatProps = {
  name: string;
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
- The `pagingEnabled` prop is a simple way to create "slides" or "pages" in your app UI. When you enable it, the scroll view stops at intervals equal to the size of the scroll view, rather than letting the user scroll freely.
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
import { ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ZoomableImage = () => {
  return (
    <ScrollView
      maximumZoomScale={5}
      minimumZoomScale={1}
      contentContainerStyle={styles.container}
    >
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height / 2,
  },
});

export default ZoomableImage;
```
- The _ScrollView_ works best to present a small number of things of a limited size. 
  All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. 
  If you have a long list of items which cannot fit on the screen, you should use a `FlatList` instead
- Think of `FlatList` as a "smart" list. Instead of loading 1,000 items at once and slowing down the phone, 
  it only loads the items you can actually see on the screen.
- **The Two Must-Have Props**
  1. **data**: Your array of information (like a list of names).
  2. **renderItem** : A function that tells React Native, 
      "Take one piece of data and show it like this" (e.g., wrap it in a <Text> component).
  
```javascript
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
          <View style={styles.container}>
            <FlatList
                    data={[
                      {key: 'Devin'},
                      {key: 'Dan'},
                      {key: 'Dominic'},
                      {key: 'Jackson'},
                      {key: 'James'},
                      {key: 'Joel'},
                      {key: 'John'},
                      {key: 'Jillian'},
                      {key: 'Jimmy'},
                      {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
  );
};

export default FlatListBasics
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




