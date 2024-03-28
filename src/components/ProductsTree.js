import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductNode } from ".";
import { mockData } from "../data";

const ProductsTree = () => {
    return (
        <View style={{ height: '80%' }} >
            <ProductNode node={mockData} />
        </View>
    );
};

export default ProductsTree;

const styles = StyleSheet.create({});
