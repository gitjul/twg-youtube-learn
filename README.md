# YouTube Learn

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Obtain an API key for YouTube search

   To make requests to the YouTube Data API you need to obtain an API key - refer to https://developers.google.com/youtube/v3/docs for help.

3. Create a new `.env` file in your project's root. This file is ignored by git as it's used to store secrets.

   ```
   touch .env
   ```

4. Copy your API key and change the content of the `.env` file to:

   ```
   YOUTUBE_API_KEY='<YOUR_API_KEY>'
   ```

   You'll have to restart your app for the change to take effect.

5. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
