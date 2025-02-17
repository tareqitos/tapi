# tapi

### Running Your Flutter App Locally

To run your Flutter app locally, follow these steps:

1. **Open a terminal** in your project directory.
2. **Ensure you have Flutter installed** and set up correctly. You can verify this by running:

   ```sh
   flutter doctor
   ```

3. **Run the app** using the following command:

    ```sh
    flutter run
    ```

    This command will build and run your Flutter app on the connected device or emulator. If you have multiple devices connected, you can specify the device using the `-d` flag followed by the device ID.

    For example, to run on a specific device:

    ```sh
    flutter run -d <device_id>
    ```

    You can find the list of connected devices by running:

    ```sh
    flutter devices
    ```
