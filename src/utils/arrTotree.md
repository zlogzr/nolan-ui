---
title: arrToTree
group:
  title: 通用
  path: /common
  order: 1
---

# arrToTree 数组转树

## 何时使用

数组与树相互转换

```js
import { convert } from '@/utils';
```

## 代码展示

### 数组转树

```ts
/**
 * @description array to tree
 * @author 张洋
 */

interface IArrayItem {
  id: number;
  name: string;
  parentId: number;
}

interface ITreeNode {
  id: number;
  name: string;
  children?: ITreeNode[];
}

function convert(arr: IArrayItem[]): ITreeNode | null {
  // 用于 id 和 treeNode 的映射
  const idToTreeNode: Map<number, ITreeNode> = new Map();

  let root = null;

  // 首次循环填充 map
  arr.forEach((item) => {
    const { id, name } = item;
    // 定义 tree node 并加入 map
    const treeNode: ITreeNode = { id, name };
    idToTreeNode.set(id, treeNode);
  });

  arr.forEach((item) => {
    const { id, parentId } = item;

    // 找到 parentNode 并加入到它的 children
    const parentNode = idToTreeNode.get(parentId);
    if (parentNode) {
      if (parentNode.children == null) parentNode.children = [];
      parentNode.children.push(idToTreeNode.get(id) as ITreeNode);
    }

    // 找到根节点
    if (parentId === 0) root = idToTreeNode.get(id);
  });

  return root;
}

const arr = [
  { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
];
const tree = convert(arr);
console.info(tree);
```

### 树转数组

```ts
/**
 * @description tree to arr
 * @author 张洋
 */

interface IArrayItem {
  id: number;
  name: string;
  parentId: number;
}

interface ITreeNode {
  id: number;
  name: string;
  children?: ITreeNode[];
}

function convert1(root: ITreeNode): IArrayItem[] {
  // Map
  const nodeToParent: Map<ITreeNode, ITreeNode> = new Map();

  const arr: IArrayItem[] = [];

  // 广度优先遍历，queue
  const queue: ITreeNode[] = [];
  queue.unshift(root); // 根节点 入队

  while (queue.length > 0) {
    const curNode = queue.pop(); // 出队
    if (curNode == null) break;

    const { id, name, children = [] } = curNode;

    // 创建数组 item 并 push
    const parentNode = nodeToParent.get(curNode);
    const parentId = parentNode?.id || 0;
    const item = { id, name, parentId };
    arr.push(item);

    // 子节点入队
    children.forEach((child) => {
      // 映射 parent
      nodeToParent.set(child, curNode);
      // 入队
      queue.unshift(child);
    });
  }

  return arr;
}

const obj = {
  id: 1,
  name: '部门A',
  children: [
    {
      id: 2,
      name: '部门B',
      children: [
        { id: 4, name: '部门D' },
        { id: 5, name: '部门E' },
      ],
    },
    {
      id: 3,
      name: '部门C',
      children: [{ id: 6, name: '部门F' }],
    },
  ],
};
const arr1 = convert1(obj);
console.info(arr1);
```
