import { View, Image, Pressable } from "react-native";
import { styles } from "./style";
import logoIMG from '../../assets/logo.png';
import { CaretLeft } from "phosphor-react-native"

export function Header() {
    return (
        <View style={styles.container}>
            <Pressable>
                <CaretLeft style={styles.CaretLeftIcon} />
            </Pressable>
            <Image
                source={logoIMG}
                style={styles.logo}
            />
        </View>
    );
}
