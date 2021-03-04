import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";

export async function bootstrap() {
    const [fontsLoaded] = useFonts({
        OpenSans_400Regular,
      });

}
