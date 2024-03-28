import { create } from "zustand";



export const useTreeStore = create((set) => ({
    selectedItems: [],
    toggleItemSelection: (item, parent) => {
        set((state) => {
            const isItemSelected = state.selectedItems.some((selectedItem) => selectedItem.id === item.id);
            let updatedItems = [];
            if (isItemSelected) updatedItems = state.selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
            else updatedItems = [...state.selectedItems, { ...item, parent }];
            return { selectedItems: updatedItems };
        });
    },
}));

