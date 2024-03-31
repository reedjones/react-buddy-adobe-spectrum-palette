var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Item, ListView, useDragAndDrop, useListData } from "@adobe/react-spectrum";
import Folder from "@spectrum-icons/illustrations/Folder";
import { Text, Flex, View } from '@adobe/react-spectrum';
export function DraggableListView(props) {
    var list = props.list, otherProps = __rest(props, ["list"]);
    var dragAndDropHooks = useDragAndDrop(__assign({ 
        // Only allow move operations when dropping items from this list
        getAllowedDropOperations: function () { return ['move']; }, getItems: function (keys) {
            return __spreadArray([], keys, true).map(function (key) {
                var item = list.getItem(key);
                // Setup the drag types and associated info for each dragged item.
                return {
                    'custom-app-type': JSON.stringify(item),
                    'text/plain': item.name
                };
            });
        }, onDragEnd: function (e) {
            var dropOperation = e.dropOperation, keys = e.keys;
            if (dropOperation === 'move') {
                list.remove.apply(list, keys);
            }
        } }, otherProps)).dragAndDropHooks;
    return (_jsx(ListView, { "aria-label": "Draggable ListView in drag into list example", selectionMode: "multiple", width: "size-3600", height: "size-2400", dragAndDropHooks: dragAndDropHooks, items: list.items, children: function (item) { return (_jsx(Item, { textValue: item.name, children: _jsx(Text, { children: item.name }) })); } }));
}
export function DroppableListView(props) {
    var _this = this;
    var list = props.list, otherProps = __rest(props, ["list"]);
    var dragAndDropHooks = useDragAndDrop(__assign({ 
        // Only accept items with the following drag type
        acceptedDragTypes: ['custom-app-type'], onInsert: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, target, processedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items, target = e.target;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = (_a = JSON).parse;
                                        return [4 /*yield*/, item.getText('custom-app-type')];
                                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                                }
                            }); }); }))];
                    case 1:
                        processedItems = _a.sent();
                        if (target.dropPosition === 'before') {
                            list.insertBefore.apply(list, __spreadArray([target.key], processedItems, false));
                        }
                        else if (target.dropPosition === 'after') {
                            list.insertAfter.apply(list, __spreadArray([target.key], processedItems, false));
                        }
                        return [2 /*return*/];
                }
            });
        }); }, onRootDrop: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, processedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = (_a = JSON).parse;
                                        return [4 /*yield*/, item.getText('custom-app-type')];
                                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                                }
                            }); }); }))];
                    case 1:
                        processedItems = _a.sent();
                        list.append.apply(list, processedItems);
                        return [2 /*return*/];
                }
            });
        }); } }, otherProps)).dragAndDropHooks;
    return (_jsx(ListView, { "aria-label": "Droppable ListView in drag into list example", width: "size-3600", height: "size-2400", dragAndDropHooks: dragAndDropHooks, items: list.items, children: function (item) { return (_jsx(Item, { textValue: item.name, children: _jsx(Text, { children: item.name }) })); } }));
}
export function DragIntoList() {
    var sourceList = useListData({
        initialItems: [
            { id: '1', type: 'file', name: 'Adobe Photoshop' },
            { id: '2', type: 'file', name: 'Adobe XD' },
            { id: '3', type: 'file', name: 'Adobe InDesign' },
            { id: '4', type: 'file', name: 'Adobe AfterEffects' }
        ]
    });
    var targetList = useListData({
        initialItems: [
            { id: '5', type: 'file', name: 'Adobe Dreamweaver' },
            { id: '6', type: 'file', name: 'Adobe Fresco' },
            { id: '7', type: 'file', name: 'Adobe Connect' },
            { id: '8', type: 'file', name: 'Adobe Lightroom' }
        ]
    });
    return (_jsxs(Flex, { wrap: true, gap: "size-300", children: [_jsx(DraggableListView, { list: sourceList }), _jsx(DroppableListView, { list: targetList })] }));
}
export function CustomDragPreviewExample() {
    var list = useListData({
        initialItems: [
            { id: '1', type: 'file', name: 'Adobe Photoshop' },
            { id: '2', type: 'file', name: 'Adobe XD' },
            { id: '3', type: 'file', name: 'Adobe InDesign' },
            { id: '4', type: 'file', name: 'Adobe AfterEffects' }
        ]
    });
    var dragAndDropHooks = useDragAndDrop({
        getItems: function (keys) {
            return __spreadArray([], keys, true).map(function (key) {
                var item = list.getItem(key);
                return {
                    'custom-app-type': JSON.stringify(item),
                    'text/plain': item.name
                };
            });
        },
        renderPreview: function (keys, draggedKey) { return (_jsxs(View, { backgroundColor: "gray-50", padding: "size-100", borderRadius: "medium", borderWidth: "thin", borderColor: "blue-500", children: [_jsx("strong", { children: "Custom Preview" }), _jsxs("div", { children: ["Keys: [", __spreadArray([], keys, true).join(', '), "]"] }), _jsxs("div", { children: ["Dragged: ", draggedKey] })] })); }
    }).dragAndDropHooks;
    return (_jsx(ListView, { "aria-label": "Draggable ListView with custom drag preview", selectionMode: "multiple", width: "size-3600", height: "size-2400", dragAndDropHooks: dragAndDropHooks, items: list.items, children: function (item) { return (_jsx(Item, { textValue: item.name, children: item.name })); } }));
}
export function ReorderableList() {
    var _this = this;
    var list = useListData({
        initialItems: [
            { id: '1', type: 'file', name: 'Adobe Photoshop' },
            { id: '2', type: 'file', name: 'Adobe XD' },
            { id: '3', type: 'folder', name: 'Documents', childNodes: [] },
            { id: '4', type: 'file', name: 'Adobe InDesign' },
            { id: '5', type: 'folder', name: 'Utilities', childNodes: [] },
            { id: '6', type: 'file', name: 'Adobe AfterEffects' }
        ]
    });
    var dragAndDropHooks = useDragAndDrop({
        getItems: function (keys) {
            return __spreadArray([], keys, true).map(function (key) {
                var item = list.getItem(key);
                // Setup the drag types and associated info for each dragged item.
                return {
                    'custom-app-type-reorder': JSON.stringify(item),
                    'text/plain': item.name
                };
            });
        },
        acceptedDragTypes: ['custom-app-type-reorder'],
        onReorder: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var keys, target;
            return __generator(this, function (_a) {
                keys = e.keys, target = e.target;
                if (target.dropPosition === 'before') {
                    list.moveBefore(target.key, __spreadArray([], keys, true));
                }
                else if (target.dropPosition === 'after') {
                    list.moveAfter(target.key, __spreadArray([], keys, true));
                }
                return [2 /*return*/];
            });
        }); },
        getAllowedDropOperations: function () { return ['move']; }
    }).dragAndDropHooks;
    return (_jsx(ListView, { "aria-label": "Reorderable ListView", selectionMode: "multiple", width: "size-3600", height: "size-3600", items: list.items, dragAndDropHooks: dragAndDropHooks, children: function (item) { return (_jsxs(Item, { textValue: item.name, children: [item.type === 'folder' && _jsx(Folder, {}), _jsx(Text, { children: item.name })] })); } }));
}
export function DraggableListViewFolder(props) {
    var list = props.list, otherProps = __rest(props, ["list"]);
    var dragAndDropHooks = useDragAndDrop(__assign({ 
        // Only allow move operations when dropping items from this list
        getAllowedDropOperations: function () { return ['move']; }, getItems: function (keys) {
            return __spreadArray([], keys, true).map(function (key) {
                var item = list.getItem(key);
                // Setup the drag types and associated info for each dragged item.
                return {
                    'custom-app-type-folder-drop': JSON.stringify(item),
                    'text/plain': item.name
                };
            });
        }, onDragEnd: function (e) {
            var dropOperation = e.dropOperation, keys = e.keys;
            if (dropOperation === 'move') {
                list.remove.apply(list, keys);
            }
        } }, otherProps)).dragAndDropHooks;
    return (_jsx(ListView, { "aria-label": "Draggable ListView in drag onto folder example", selectionMode: "multiple", width: "size-3600", height: "size-3600", dragAndDropHooks: dragAndDropHooks, items: list.items, children: function (item) { return (_jsxs(Item, { textValue: item.name, children: [item.type === 'folder' && _jsx(Folder, {}), _jsx(Text, { children: item.name })] })); } }));
}
export function DragIntoListFolder() {
    var sourceList = useListData({
        initialItems: [
            { id: '1', type: 'file', name: 'Adobe Photoshop' },
            { id: '2', type: 'file', name: 'Adobe XD' },
            { id: '3', type: 'folder', name: 'Documents', childNodes: [] },
            { id: '4', type: 'file', name: 'Adobe InDesign' },
            { id: '5', type: 'folder', name: 'Utilities', childNodes: [] },
            { id: '6', type: 'file', name: 'Adobe AfterEffects' }
        ]
    });
    var targetList = useListData({
        initialItems: [
            { id: '7', type: 'folder', name: 'Pictures', childNodes: [] },
            { id: '8', type: 'file', name: 'Adobe Fresco' },
            { id: '9', type: 'folder', name: 'Apps', childNodes: [] }
        ]
    });
    return (_jsxs(Flex, { wrap: true, gap: "size-300", children: [_jsx(DraggableListViewFolder, { list: sourceList }), _jsx(DroppableListViewFolder, { list: targetList })] }));
}
export function DraggableListViewDefaultCopy(props) {
    var list = props.list;
    var dragAndDropHooks = useDragAndDrop({
        getItems: function (keys) {
            return __spreadArray([], keys, true).map(function (key) {
                var item = list.getItem(key);
                // Setup the drag types and associated info for each dragged item.
                return {
                    'custom-app-type-copy-default': JSON.stringify(item),
                    'text/plain': item.name
                };
            });
        },
        onDragEnd: function (e) {
            var dropOperation = e.dropOperation, keys = e.keys;
            if (dropOperation === 'move') {
                list.remove.apply(list, keys);
            }
        }
    }).dragAndDropHooks;
    return (_jsx(ListView, { "aria-label": "Draggable ListView in default copy operation example", selectionMode: "multiple", width: "size-3600", height: "size-2400", dragAndDropHooks: dragAndDropHooks, items: list.items, children: function (item) { return (_jsx(Item, { textValue: item.name, children: _jsx(Text, { children: item.name }) })); } }));
}
export function DroppableListViewDefaultCopy(props) {
    var _this = this;
    var list = props.list;
    var dragAndDropHooks = useDragAndDrop({
        acceptedDragTypes: ['custom-app-type-copy-default'],
        getDropOperation: function () { return 'copy'; },
        onInsert: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, target, processedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items, target = e.target;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _a = [{}];
                                            _c = (_b = JSON).parse;
                                            return [4 /*yield*/, item.getText('custom-app-type-copy-default')];
                                        case 1: return [2 /*return*/, (__assign.apply(void 0, [__assign.apply(void 0, _a.concat([_c.apply(_b, [_d.sent()])])), { id: Math.random().toString(36).slice(2) }]))];
                                    }
                                });
                            }); }))];
                    case 1:
                        processedItems = _a.sent();
                        if (target.dropPosition === 'before') {
                            list.insertBefore.apply(list, __spreadArray([target.key], processedItems, false));
                        }
                        else if (target.dropPosition === 'after') {
                            list.insertAfter.apply(list, __spreadArray([target.key], processedItems, false));
                        }
                        return [2 /*return*/];
                }
            });
        }); },
        onRootDrop: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, processedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _a = [{}];
                                            _c = (_b = JSON).parse;
                                            return [4 /*yield*/, item.getText('custom-app-type-copy-default')];
                                        case 1: return [2 /*return*/, (__assign.apply(void 0, [__assign.apply(void 0, _a.concat([_c.apply(_b, [_d.sent()])])), { id: Math.random().toString(36).slice(2) }]))];
                                    }
                                });
                            }); }))];
                    case 1:
                        processedItems = _a.sent();
                        list.append.apply(list, processedItems);
                        return [2 /*return*/];
                }
            });
        }); }
    }).dragAndDropHooks;
    return (_jsx(ListView, { "aria-label": "Droppable ListView in default copy operation example", width: "size-3600", height: "size-2400", dragAndDropHooks: dragAndDropHooks, items: list.items, children: function (item) { return (_jsx(Item, { textValue: item.name, children: _jsx(Text, { children: item.name }) })); } }));
}
export function DragIntoListDefaultCopy() {
    var sourceList = useListData({
        initialItems: [
            { id: '1', type: 'file', name: 'Adobe Photoshop' },
            { id: '2', type: 'file', name: 'Adobe XD' },
            { id: '3', type: 'file', name: 'Adobe InDesign' },
            { id: '4', type: 'file', name: 'Adobe AfterEffects' }
        ]
    });
    var targetList = useListData({
        initialItems: [
            { id: '5', type: 'file', name: 'Adobe Dreamweaver' },
            { id: '6', type: 'file', name: 'Adobe Fresco' },
            { id: '7', type: 'file', name: 'Adobe Connect' },
            { id: '8', type: 'file', name: 'Adobe Lightroom' }
        ]
    });
    return (_jsxs(Flex, { wrap: true, gap: "size-300", children: [_jsx(DraggableListViewDefaultCopy, { list: sourceList }), _jsx(DroppableListViewDefaultCopy, { list: targetList })] }));
}
export function DragBetweenListsExample() {
    var list1 = useListData({
        initialItems: [
            { id: '1', type: 'file', name: 'Adobe Photoshop' },
            { id: '2', type: 'file', name: 'Adobe XD' },
            { id: '3', type: 'folder', name: 'Documents' },
            { id: '4', type: 'file', name: 'Adobe InDesign' },
            { id: '5', type: 'folder', name: 'Utilities' },
            { id: '6', type: 'file', name: 'Adobe AfterEffects' }
        ]
    });
    var list2 = useListData({
        initialItems: [
            { id: '7', type: 'folder', name: 'Pictures' },
            { id: '8', type: 'file', name: 'Adobe Fresco' },
            { id: '9', type: 'folder', name: 'Apps' },
            { id: '10', type: 'file', name: 'Adobe Illustrator' },
            { id: '11', type: 'file', name: 'Adobe Lightroom' },
            { id: '12', type: 'file', name: 'Adobe Dreamweaver' }
        ]
    });
    return (_jsxs(Flex, { wrap: true, gap: "size-300", children: [_jsx(BidirectionalDnDListView, { list: list1, "aria-label": "First ListView in drag between list example" }), _jsx(BidirectionalDnDListView, { list: list2, "aria-label": "Second ListView in drag between list example" })] }));
}
export function BidirectionalDnDListView(props) {
    var _this = this;
    var list = props.list;
    var dragAndDropHooks = useDragAndDrop({
        acceptedDragTypes: ['custom-app-type-bidirectional'],
        // Only allow move operations
        getAllowedDropOperations: function () { return ['move']; },
        getItems: function (keys) {
            return __spreadArray([], keys, true).map(function (key) {
                var item = list.getItem(key);
                // Setup the drag types and associated info for each dragged item.
                return {
                    'custom-app-type-bidirectional': JSON.stringify(item),
                    'text/plain': item.name
                };
            });
        },
        onInsert: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, target, processedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items, target = e.target;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = JSON).parse;
                                            return [4 /*yield*/, item.getText('custom-app-type-bidirectional')];
                                        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                                    }
                                });
                            }); }))];
                    case 1:
                        processedItems = _a.sent();
                        if (target.dropPosition === 'before') {
                            list.insertBefore.apply(list, __spreadArray([target.key], processedItems, false));
                        }
                        else if (target.dropPosition === 'after') {
                            list.insertAfter.apply(list, __spreadArray([target.key], processedItems, false));
                        }
                        return [2 /*return*/];
                }
            });
        }); },
        onReorder: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var keys, target;
            return __generator(this, function (_a) {
                keys = e.keys, target = e.target;
                if (target.dropPosition === 'before') {
                    list.moveBefore(target.key, __spreadArray([], keys, true));
                }
                else if (target.dropPosition === 'after') {
                    list.moveAfter(target.key, __spreadArray([], keys, true));
                }
                return [2 /*return*/];
            });
        }); },
        onRootDrop: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, processedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = JSON).parse;
                                            return [4 /*yield*/, item.getText('custom-app-type-bidirectional')];
                                        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                                    }
                                });
                            }); }))];
                    case 1:
                        processedItems = _a.sent();
                        list.append.apply(list, processedItems);
                        return [2 /*return*/];
                }
            });
        }); },
        onDragEnd: function (e) {
            var dropOperation = e.dropOperation, keys = e.keys, isInternal = e.isInternal;
            // Only remove the dragged items if they aren't dropped inside the source list
            if (dropOperation === 'move' && !isInternal) {
                list.remove.apply(list, keys);
            }
        }
    }).dragAndDropHooks;
    // @ts-ignore
    // @ts-ignore
    return (_jsx(ListView, { "aria-label": props['aria-label'], selectionMode: "multiple", width: "size-3600", height: "size-3600", items: list.items, dragAndDropHooks: dragAndDropHooks, children: function (_a) {
            var item = _a.item;
            return (_jsxs(Item, { textValue: item.name, children: [item.type === 'folder' && _jsx(Folder, {}), _jsx(Text, { children: item.name })] }));
        } }));
}
export function DroppableListViewFolder(props) {
    var _this = this;
    var list = props.list, otherProps = __rest(props, ["list"]);
    var dragAndDropHooks = useDragAndDrop(__assign({ 
        // Only allow drops on items with childNodes aka folders
        shouldAcceptItemDrop: function (target) { return !!list.getItem(target.key).childNodes; }, 
        // Only accept items with the following drag type
        acceptedDragTypes: ['custom-app-type-folder-drop'], onInsert: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, target, processedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items, target = e.target;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = JSON).parse;
                                            return [4 /*yield*/, item.getText('custom-app-type-folder-drop')];
                                        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                                    }
                                });
                            }); }))];
                    case 1:
                        processedItems = _a.sent();
                        if (target.dropPosition === 'before') {
                            list.insertBefore.apply(list, __spreadArray([target.key], processedItems, false));
                        }
                        else if (target.dropPosition === 'after') {
                            list.insertAfter.apply(list, __spreadArray([target.key], processedItems, false));
                        }
                        return [2 /*return*/];
                }
            });
        }); }, onRootDrop: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, processedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = JSON).parse;
                                            return [4 /*yield*/, item.getText('custom-app-type-folder-drop')];
                                        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                                    }
                                });
                            }); }))];
                    case 1:
                        processedItems = _a.sent();
                        list.append.apply(list, processedItems);
                        return [2 /*return*/];
                }
            });
        }); }, onItemDrop: function (e) { return __awaiter(_this, void 0, void 0, function () {
            var items, target, processedItems, targetItem;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = e.items, target = e.target;
                        return [4 /*yield*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = JSON).parse;
                                            return [4 /*yield*/, item.getText('custom-app-type-folder-drop')];
                                        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                                    }
                                });
                            }); }))];
                    case 1:
                        processedItems = _a.sent();
                        targetItem = list.getItem(target.key);
                        // @ts-ignore
                        list.update(target.key, __assign(__assign({}, targetItem), { childNodes: __spreadArray(__spreadArray([], targetItem.childNodes, true), processedItems, true) }));
                        return [2 /*return*/];
                }
            });
        }); } }, otherProps)).dragAndDropHooks;
    return (
    // @ts-ignore
    _jsx(ListView, { "aria-label": "Droppable ListView in drop into folder example", width: "size-3600", height: "size-3600", dragAndDropHooks: dragAndDropHooks, items: list.items, children: function (_a) {
            var _b;
            var item = _a.item;
            return (_jsxs(Item, { textValue: item.name, hasChildItems: item.type === 'folder', children: [_jsx(Text, { children: item.name }), item.type === 'folder' &&
                        (_jsxs(_Fragment, { children: [_jsx(Folder, {}), _jsx(Text, { slot: "description", children: "contains ".concat((_b = item.childNodes) === null || _b === void 0 ? void 0 : _b.length, " dropped item(s)") })] }))] }));
        } }));
}
