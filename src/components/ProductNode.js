import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTreeStore } from '../store/useTreeStore';
import Icon from 'react-native-vector-icons/Feather'


const ProductNode = ({ node, parent }) => {
    const { selectedItems, toggleItemSelection } = useTreeStore();
    const isItemSelected = (item) => {
        return selectedItems.some((selectedItem) => selectedItem.id === item.id);
    };



    const checkIfItemParentForAnyChild = (node, parent) => {
        selectedItems.map(item => {
            if (item.parent && item.parent.id == node.id) toggleItemSelection(item, item.parent)
        })
        const newItem = { name: node.name, id: node.id }
        toggleItemSelection(newItem, parent)
    }



    return (
        <View style={styles.container} >
            <View style={styles.row} >
                {parent && <Icon size={16} style={styles.icon} color={isItemSelected(node) ? 'blue' : 'black'} onPress={() => checkIfItemParentForAnyChild(node, parent)} name={isItemSelected(node) ? 'check-square' : 'square'} />}
                <Text
                    style={{
                        color: isItemSelected(node) ? 'blue' : 'black',
                    }}
                >
                    {node.name}
                </Text>
            </View>

            {(!isItemSelected(node)) && <>
                {node.children && (
                    <FlatList
                        data={node.children}
                        renderItem={({ item }) => <ProductNode node={item} parent={{ id: node.id, name: node.name }} />}
                        keyExtractor={(item) => item.name}
                    />
                )}
            </>}
        </View>
    );
};

export default ProductNode;



const styles = StyleSheet.create({
    container: {
        marginStart: 20,
        marginTop: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginEnd: 4
    }
})