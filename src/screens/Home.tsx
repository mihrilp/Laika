import {
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  View,
} from "react-native";
import { Hair, SearchIcon } from "@/components/icons";
import colors from "@/styles/colors";
import { Category } from "@/components";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.text}>
            Hello, {"\n"} Compassionate Friend of Animals
          </Text>
          <KeyboardAvoidingView style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search a brand..."
            />
            <SearchIcon style={styles.searchIcon} color={colors.gray} />
          </KeyboardAvoidingView>
        </View>
        <View>
          <Text style={styles.title}>Categories</Text>
          <Category
            name="Hair"
            icon={<Hair style={styles.hairIcon} color={colors.gray} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    width: "100%",
  },
  header: {
    marginTop: 40,
    marginBottom: 15,
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  searchBar: {
    flexDirection: "row",
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
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  hairIcon: {
    width: 30,
    height: 30,
  },
});

export default Home;
