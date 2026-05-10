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









