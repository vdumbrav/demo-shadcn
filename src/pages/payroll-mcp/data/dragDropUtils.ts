/**
 * Drag and Drop utilities for table row reordering
 */

import { type TableRowData } from "./mockData";

export interface DragState {
  draggedItem: number | null;
  dragOverItem: number | null;
  isDragging: boolean;
}

export const handleDragStart = (
  index: number,
  setState: (state: DragState | ((prev: DragState) => DragState)) => void
) => {
  setState({ draggedItem: index, dragOverItem: null, isDragging: true });
};

export const handleDragOver = (index: number, setState: (state: DragState | ((prev: DragState) => DragState)) => void) => {
  setState((prev: DragState) => ({
    ...prev,
    dragOverItem: index,
  }));
};

export const handleDragLeave = (setState: (state: DragState | ((prev: DragState) => DragState)) => void) => {
  setState((prev: DragState) => ({
    ...prev,
    dragOverItem: null,
  }));
};

export const handleDrop = (
  targetIndex: number,
  data: TableRowData[],
  dragState: DragState,
  setData: (data: TableRowData[]) => void,
  setState: (state: DragState) => void
) => {
  if (dragState.draggedItem === null || dragState.draggedItem === targetIndex) {
    setState({ draggedItem: null, dragOverItem: null, isDragging: false });
    return;
  }

  const newData = [...data];
  const draggedItem = newData[dragState.draggedItem];

  // Remove dragged item
  newData.splice(dragState.draggedItem, 1);

  // Insert at new position
  const insertIndex = dragState.draggedItem < targetIndex ? targetIndex - 1 : targetIndex;
  newData.splice(insertIndex, 0, draggedItem);

  setData(newData);
  setState({ draggedItem: null, dragOverItem: null, isDragging: false });
};

export const handleDragEnd = (setState: (state: DragState | ((prev: DragState) => DragState)) => void) => {
  setState({ draggedItem: null, dragOverItem: null, isDragging: false });
};
