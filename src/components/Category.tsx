import colors from "@/styles/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";

type Props = {
  name: string;
  icon: React.ReactElement<SvgProps>;
};

function Category({ name, icon }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      {icon}
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#668699",
    borderRadius: 10,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    marginTop: 5,
    color: colors.gray,
  },
});

export default Category;
