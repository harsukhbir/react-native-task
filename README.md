This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

# Prerequisites:
Node.js > 12 and npm (Recommended: Use nvm)
Watchman
Xcode 12
Cocoapods 1.10.1
JDK > 11
Android Studio and Android SDK

# Base dependencies:
axios for networking.
prop-types to type-check our components exposed properties.
react-native-config to manage envionments.
react-navigation navigation library.
react-native-localization for string localization.
react-native-mmkv-storage as storage solution.
context api - for store management.

# Folder structure :
This template follows a very simple project structure:

src: This folder is the main container of all the code inside your application.

  Context: This folder contains global store and inside it 3 files for context.
    FullInfocontext.js
    FullInforeducer.js
    FullInfoState.js
    type.js
  FullInfo.js : In this file code for display the full information of image.
  Thumb.js : In this file code for display thumbnails of the images.
      
  


