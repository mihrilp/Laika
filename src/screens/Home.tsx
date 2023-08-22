import {
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { SearchIcon } from "@/icons";
import colors from "@/styles/colors";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello,</Text>
      <Text style={styles.text}>Compassionate Friend of Animals</Text>
      <KeyboardAvoidingView style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search a brand..." />
        <SearchIcon style={styles.searchIcon} color={colors.gray} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 28,
  },
  searchBar: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#fff",
    marginVertical: 20,
    borderRadius: 10,
    height: 55,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e0e7eb",
  },
  searchInput: {
    width: "90%",
  },
  searchIcon: {
    width: "8%",
  },
});

export default Home;
