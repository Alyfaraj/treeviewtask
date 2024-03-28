import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTreeStore } from "../store/useTreeStore";

const SelectedVariants = () => {
    const { selectedItems } = useTreeStore()


    const mergeItems = () => {
        const mergedItems = {};

        selectedItems.forEach(item => {
            const parentId = item.parent.id;
            if (!mergedItems[parentId]) {
                mergedItems[parentId] = { parent: item.parent, items: [item] };
            } else {
                mergedItems[parentId].items.push(item);
            }
        });

        return Object.values(mergedItems);
    }



    const getSelectedVariantsText = (items) => {
        const selectedVariantsText = items.map((item) => `${item.name}`);
        return selectedVariantsText.join(', ');
    };

    return (
        <View style={styles.container} >
            <Text>Selected Variants</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginVertical: 10 }} >
                {
                    mergeItems().map(item => (
                        <View style={styles.itemContainer} >
                            <Text>{item?.parent?.name}</Text>
                            <Text> ({getSelectedVariantsText(item.items)}) </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};

export default SelectedVariants;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    itemContainer: {
        backgroundColor: 'white',
        shadowOpacity: .4,
        shadowOffset: { width: 1, height: 1 },
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 5

    }
});



[{ "items": [[Object], [Object]], "parent": { "id": "0dehe56", "name": "iPhone 15" } }, { "items": [[Object], [Object]], "parent": { "id": "lgv1ikr", "name": "Galaxy S20" } }, { "items": [[Object]], "parent": { "id": "qz6iimj", "name": "Samsung" } }, { "items": [[Object], [Object]], "parent": { "id": "bwops5p", "name": "Series 6" } }]