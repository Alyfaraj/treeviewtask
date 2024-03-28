import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductsTree } from "./src/components";
import SelectedVariants from "./src/components/SelectedVariants";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }} >
      <ProductsTree />
      <SelectedVariants />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
