import {Text, useDragAndDrop} from '@adobe/react-spectrum';
import Folder from '@spectrum-icons/illustrations/Folder';
import {Item, ListView, useListData} from '@adobe/react-spectrum';
import {DIRECTORY_DRAG_TYPE} from '@adobe/react-spectrum';

export function DroppableListLowLevelAPI() {
  let list = useListData({
    initialItems: [
      {
        id: 1,
        name: 'Images',
        contains: 0,
        accept: ['image/png', 'image/jpeg']
      },
      { id: 2, name: 'Videos', contains: 0, accept: ['video/mp4'] },
      {
        id: 3,
        name: 'Documents',
        contains: 0,
        accept: ['text/plain', 'application/pdf']
      }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    onDrop: async (e) => {
      let items = await Promise.all(
        e.items
          .filter((item) => {
            // Check if dropped item is accepted.
            if (
              item.kind === 'file' && e.target.type === 'item' &&
              e.target.dropPosition === 'on'
            ) {
              let folder = list.getItem(e.target.key);
              return folder.accept.includes(item.type);
            }

            return item.kind === 'directory';
          })
          .map(async (item) => {
            // Collect child count from dropped directories.
            let contains = 0;
            let accept;
            if (item.kind === 'directory') {
              for await (let _ of item.getEntries()) {
                contains++;
                accept = [];
              }
            }

            return {
              id: Math.random(),
              name: item.name,
              contains,
              accept
            };
          })
      );

      // Update item count if dropping on an item, otherwise insert the new items in the list.
      if (e.target.type === 'item') {
        if (e.target.dropPosition === 'on') {
          let item = list.getItem(e.target.key);
          list.update(e.target.key, {
            ...item,
            contains: item.contains + items.length
          });
        } else if (e.target.dropPosition === 'before') {
          list.insertBefore(e.target.key, ...items);
        } else if (e.target.dropPosition === 'after') {
          list.insertAfter(e.target.key, ...items);
        }
      } else {
        // If dropping on the root, append the directory to the bottom of the list
        list.append(...items);
      }
    },
    getDropOperation: (target, types, allowedOperations) => {
      // When dropping on an item, check whether the item accepts the drag types and cancel if not.
      if (target.type === 'item' && target.dropPosition === 'on') {
        let item = list.getItem(target.key);
        return item.accept && item.accept.some((type) => types.has(type))
          ? allowedOperations[0]
          : 'cancel';
      }

      // If dropping a directory between items, support a copy operation.
      return types.has(DIRECTORY_DRAG_TYPE) ? 'copy' : 'cancel';
    }
  });

  return (
    <ListView
      aria-label="Low-level api droppable list view example"
      width="size-3600"
      height="size-3600"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <Item textValue={item.name} hasChildItems>
          <Folder />
          <Text>{item.name}</Text>
          <Text slot="description">{`contains ${item.contains} item(s)`}</Text>
        </Item>
      )}
    </ListView>
  );
}

export function DraggableList() {
  let list = useListData({
    initialItems: [
      { id: 'a', type: 'file', name: 'Adobe Photoshop' },
      { id: 'b', type: 'file', name: 'Adobe XD' },
      { id: 'c', type: 'file', name: 'Adobe Dreamweaver' },
      { id: 'd', type: 'file', name: 'Adobe InDesign' },
      { id: 'e', type: 'file', name: 'Adobe Connect' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        let item = list.getItem(key);
        return {
          'adobe-app': JSON.stringify(item)
        };
      }),
    onDragEnd: (e) => {
      if (e.dropOperation === 'move') {
        list.remove(...e.keys);
      }
    }
  });

  return (
    <ListView
      aria-label="Draggable list view example"
      width="size-3600"
      height="size-3600"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <Item textValue={item.name}>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}

export function DroppableList() {
  let list = useListData({
    initialItems: [
      { id: 'f', type: 'file', name: 'Adobe AfterEffects' },
      { id: 'g', type: 'file', name: 'Adobe Illustrator' },
      { id: 'h', type: 'file', name: 'Adobe Lightroom' },
      { id: 'i', type: 'file', name: 'Adobe Premiere Pro' },
      { id: 'j', type: 'file', name: 'Adobe Fresco' },
      { id: 'k', type: 'folder', name: 'Apps', childNodes: [] }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['adobe-app'],
    shouldAcceptItemDrop: (target) => !!list.getItem(target.key).childNodes,
    onInsert: async (e) => {
      let {
        items,
        target
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(await item.getText('adobe-app'))
        )
      );

      if (target.dropPosition === 'before') {
        list.insertBefore(target.key, ...processedItems);
      } else if (target.dropPosition === 'after') {
        list.insertAfter(target.key, ...processedItems);
      }
    },
    onItemDrop: async (e) => {
      let {
        items,
        target
      } = e;
      let processedItems = await Promise.all(
        items.map(async (item) =>
          JSON.parse(await item.getText('adobe-app'))
        )
      );
      let targetItem = list.getItem(target.key);
      list.update(target.key, {
        ...targetItem,
        childNodes: [...targetItem.childNodes, ...processedItems]
      });
    }
  });

  return (
    <ListView
      aria-label="Droppable list view example"
      width="size-3600"
      height="size-3600"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <Item textValue={item.name} hasChildItems={item.type === 'folder'}>
          {item.type === 'folder' && <Folder />}
          <Text>{item.name}</Text>
          {item.type === 'folder' &&
            (
              <Text slot="description">
                {`contains ${item.childNodes.length} dropped item(s)`}
              </Text>
            )}
        </Item>
      )}
    </ListView>
  );
}


