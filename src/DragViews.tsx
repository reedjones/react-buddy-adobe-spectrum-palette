import {Item, ListView, useDragAndDrop, useListData} from "@adobe/react-spectrum";
import type {DragAndDropOptions, TextDropItem} from '@adobe/react-spectrum';
import type {ListData} from '@adobe/react-spectrum';
import Folder from "@spectrum-icons/illustrations/Folder";
import {Text, Flex, View} from '@adobe/react-spectrum'

interface Item {
  name: string;
  type?: string;
  childNodes?: Item[];
}

interface DndListViewProps extends DragAndDropOptions {
  list: ListData<Item>;
}

export function DraggableListView(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this list
    getAllowedDropOperations: () => ['move'],
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    },
    ...otherProps
  });

  return (
    <ListView
      aria-label="Draggable ListView in drag into list example"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

export function DroppableListView(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only accept items with the following drag type
    acceptedDragTypes: ['custom-app-type'],
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(await (item as TextDropItem).getText('custom-app-type'))
        )
      );

      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(await (item as TextDropItem).getText('custom-app-type'))
        )
      );
      list.append(...processedItems);
    },
    ...otherProps
  });

  return (
    <ListView
      aria-label="Droppable ListView in drag into list example"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

export function DragIntoList() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '5', type: 'file', name: 'Adobe Dreamweaver' },
      { id: '6', type: 'file', name: 'Adobe Fresco' },
      { id: '7', type: 'file', name: 'Adobe Connect' },
      { id: '8', type: 'file', name: 'Adobe Lightroom' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListView list={sourceList} />
      <DroppableListView list={targetList} />
    </Flex>
  );
}

export function CustomDragPreviewExample() {
  let list = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        return {
          'custom-app-type': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    renderPreview: (keys, draggedKey) => (
      <View
        backgroundColor="gray-50"
        padding="size-100"
        borderRadius="medium"
        borderWidth="thin"
        borderColor="blue-500"
      >
        <strong>Custom Preview</strong>
        <div>Keys: [{[...keys].join(', ')}]</div>
        <div>Dragged: {draggedKey}</div>
      </View>
    )
  });

  return (
    <ListView
      aria-label="Draggable ListView with custom drag preview"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}


export function ReorderableList() {
  let list = useListData({
    initialItems: [
      {id: '1', type: 'file', name: 'Adobe Photoshop'},
      {id: '2', type: 'file', name: 'Adobe XD'},
      {id: '3', type: 'folder', name: 'Documents', childNodes: []},
      {id: '4', type: 'file', name: 'Adobe InDesign'},
      {id: '5', type: 'folder', name: 'Utilities', childNodes: []},
      {id: '6', type: 'file', name: 'Adobe AfterEffects'}
    ]
  });

  let {dragAndDropHooks} = useDragAndDrop({
    getItems(keys) {
      return [...keys].map(key => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-reorder': JSON.stringify(item),
          'text/plain': item.name
        };
      });
    },
    acceptedDragTypes: ['custom-app-type-reorder'],
    onReorder: async (e) => {
      let {keys, target} = e;

      if (target.dropPosition === 'before') {
        list.moveBefore(target.key, [...keys]);
      } else if (target.dropPosition === 'after') {
        list.moveAfter(target.key, [...keys]);
      }
    },
    getAllowedDropOperations: () => ['move']
  });

  return (
    <ListView
      aria-label="Reorderable ListView"
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}>
      {item => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}


export function DraggableListViewFolder(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow move operations when dropping items from this list
    getAllowedDropOperations: () => ['move'],
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-folder-drop': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    },

    ...otherProps
  });

  return (
    <ListView
      aria-label="Draggable ListView in drag onto folder example"
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

export function DragIntoListFolder() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents', childNodes: [] },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities', childNodes: [] },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '7', type: 'folder', name: 'Pictures', childNodes: [] },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps', childNodes: [] }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListViewFolder list={sourceList} />
      <DroppableListViewFolder list={targetList} />
    </Flex>
  );
}


export function DraggableListViewDefaultCopy(props: DndListViewProps) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-copy-default': JSON.stringify(item),
          'text/plain': item.name
        };
      }),
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys
      } = e;

      if (dropOperation === 'move') {
        list.remove(...keys);
      }
    }
  });

  return (
    <ListView
      aria-label="Draggable ListView in default copy operation example"
      selectionMode="multiple"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

export function DroppableListViewDefaultCopy(props: DndListViewProps) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['custom-app-type-copy-default'],
    getDropOperation: () => 'copy',
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      // Create random id to allow for multiple copies of the same item
      let processedItems = await Promise.all(
        items.map(async (item) => (
          {
            ...JSON.parse(
              await (item as TextDropItem).getText(
                'custom-app-type-copy-default'
              )
            ),
            id: Math.random().toString(36).slice(2)
          }
        ))
      );
      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;

      // Create random id to allow for multiple copies of the same item
      let processedItems = await Promise.all(
        items.map(async (item) => (
          {
            ...JSON.parse(
              await (item as TextDropItem).getText(
                'custom-app-type-copy-default'
              )
            ),
            id: Math.random().toString(36).slice(2)
          }
        ))
      );
      list.append(...processedItems);
    }
  });

  return (
    <ListView
      aria-label="Droppable ListView in default copy operation example"
      width="size-3600"
      height="size-2400"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >
      {(item) => (
        <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

export function DragIntoListDefaultCopy() {
  let sourceList = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'file', name: 'Adobe InDesign' },
      { id: '4', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let targetList = useListData({
    initialItems: [
      { id: '5', type: 'file', name: 'Adobe Dreamweaver' },
      { id: '6', type: 'file', name: 'Adobe Fresco' },
      { id: '7', type: 'file', name: 'Adobe Connect' },
      { id: '8', type: 'file', name: 'Adobe Lightroom' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <DraggableListViewDefaultCopy list={sourceList} />
      <DroppableListViewDefaultCopy list={targetList} />
    </Flex>
  );
}

export function DragBetweenListsExample() {
  let list1 = useListData({
    initialItems: [
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents' },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities' },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]
  });

  let list2 = useListData({
    initialItems: [
      { id: '7', type: 'folder', name: 'Pictures' },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps' },
      { id: '10', type: 'file', name: 'Adobe Illustrator' },
      { id: '11', type: 'file', name: 'Adobe Lightroom' },
      { id: '12', type: 'file', name: 'Adobe Dreamweaver' }
    ]
  });

  return (
    <Flex wrap gap="size-300">
      <BidirectionalDnDListView
        list={list1}
        aria-label="First ListView in drag between list example"
      />
      <BidirectionalDnDListView
        list={list2}
        aria-label="Second ListView in drag between list example"
      />
    </Flex>
  );
}

interface Created {
  item: any;
}

export function BidirectionalDnDListView(props: DndListViewProps) {
  let { list } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['custom-app-type-bidirectional'],
    // Only allow move operations
    getAllowedDropOperations: () => ['move'],
    getItems(keys) {
      return [...keys].map((key) => {
        let item = list.getItem(key);
        // Setup the drag types and associated info for each dragged item.
        return {
          'custom-app-type-bidirectional': JSON.stringify(item),
          'text/plain': item.name
        };
      });
    },
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-bidirectional'
            )
          )
        )
      );
      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onReorder: async (e) => {
      let {
        keys,
        target
      } = e;

      if (target.dropPosition === 'before') {
        list.moveBefore(target.key, [...keys]);
      } else if (target.dropPosition === 'after') {
        list.moveAfter(target.key, [...keys]);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText(
              'custom-app-type-bidirectional'
            )
          )
        )
      );
      list.append(...processedItems);
    },
    onDragEnd: (e) => {
      let {
        dropOperation,
        keys,
        isInternal
      } = e;
      // Only remove the dragged items if they aren't dropped inside the source list
      if (dropOperation === 'move' && !isInternal) {
        list.remove(...keys);
      }
    }
  });

  // @ts-ignore
  // @ts-ignore
  return (
    <ListView
      aria-label={props['aria-label']}  // @ts-ignore
      selectionMode="multiple"
      width="size-3600"
      height="size-3600"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {({item}: Created) => (
        <Item textValue={item.name}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
  );
}

interface Created1 {
  item: any;
}

export function DroppableListViewFolder(props: DndListViewProps) {
  let { list, ...otherProps } = props;
  let { dragAndDropHooks } = useDragAndDrop({
    // Only allow drops on items with childNodes aka folders
    shouldAcceptItemDrop: (target) => !!list.getItem(target.key).childNodes,
    // Only accept items with the following drag type
    acceptedDragTypes: ['custom-app-type-folder-drop'],
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText('custom-app-type-folder-drop')
          )
        )
      );

      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onRootDrop: async (e) => {
      let {
        items
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText('custom-app-type-folder-drop')
          )
        )
      );
      list.append(...processedItems);
    },
    onItemDrop: async (e) => {
      let {
        items,
        target
      } = e;

      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(
            await (item as TextDropItem).getText('custom-app-type-folder-drop')
          )
        )
      );

      let targetItem = list.getItem(target.key);
      // @ts-ignore
      list.update(target.key, {
        ...targetItem,
        childNodes: [...targetItem.childNodes, ...processedItems]  // @ts-ignore
      });
    },
    ...otherProps
  });

  return (
      // @ts-ignore
    <ListView
      aria-label="Droppable ListView in drop into folder example"
      width="size-3600"
      height="size-3600"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
    >

      {({item}: Created1) => (
        <Item textValue={item.name} hasChildItems={item.type === 'folder'}>
          <Text>{item.name}</Text>
          {item.type === 'folder' &&
            (
              <>
                <Folder />
                <Text slot="description">
                  {`contains ${item.childNodes?.length} dropped item(s)`}
                </Text>
              </>
            )}
        </Item>
      )}
    </ListView>
  );
}


