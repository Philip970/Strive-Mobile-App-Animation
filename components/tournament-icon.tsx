import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

type Props = {
  name: string;
  color?: string;
  size?: number;
  backgroundColor?: string;
};

const TournamentIcon = ({
  name,
  size = 24,
  color = "black",
  backgroundColor,
}: Props) => {
  return (
    <View
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: backgroundColor ? size / 2 : 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={name} size={24} color={color} />
    </View>
  );
};

export default TournamentIcon;
