import { act } from '@testing-library/react-native'
import { useTreeStore } from '../src/store/useTreeStore';


describe("useTreeStore", () => {
    beforeEach(() => {
        useTreeStore.setState({ selectedItems: [] });
    });

    it("should toggle new item", () => {
        const item = { id: "4885855", name: "iphone8", parent: { id: "388475757", name: "Apple devices" } };
        act(() => {
            useTreeStore.getState().toggleItemSelection(item, item.parent);
        });

        expect(useTreeStore.getState().selectedItems).toEqual([item]);

        act(() => {
            useTreeStore.getState().toggleItemSelection(item, item.parent);
        });

        expect(useTreeStore.getState().selectedItems).toEqual([]);
    });
});