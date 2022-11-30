---
title: deepClone
group:
  title: 通用
  path: /common
  order: 1
---

# deepClone 深拷贝

## 何时使用

lodash 库中引用类型深度比较方法\_.cloneDeep，简易实现

```js
import { deepClone } from '@/utils';
```

## 代码展示

```js
function deepClone(obj = {}) {
  if (typeof obj != 'object' || obj === null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
```

考虑各种数据类型和循环引用:

```ts
/**
 * 深拷贝
 * @param obj obj
 * @param map weakmap 为了避免循环引用
 */
export function cloneDeep(obj: any, map = new WeakMap()): any {
  if (typeof obj !== 'object' || obj == null) return obj;

  // 避免循环引用
  const objFromMap = map.get(obj);
  if (objFromMap) return objFromMap;

  let target: any = {};
  map.set(obj, target);

  // Map
  if (obj instanceof Map) {
    target = new Map();
    obj.forEach((v, k) => {
      const v1 = cloneDeep(v, map);
      const k1 = cloneDeep(k, map);
      target.set(k1, v1);
    });
  }

  // Set
  if (obj instanceof Set) {
    target = new Set();
    obj.forEach((v) => {
      const v1 = cloneDeep(v, map);
      target.add(v1);
    });
  }

  // Array
  if (obj instanceof Array) {
    target = obj.map((item) => cloneDeep(item, map));
  }

  // Object
  for (const key in obj) {
    const val = obj[key];
    const val1 = cloneDeep(val, map);
    target[key] = val1;
  }

  return target;
}
```

## 单元测试

```ts
/**
 * @description 深拷贝 test
 * @author 张洋
 */

import { cloneDeep } from './clone-deep';

describe('深拷贝', () => {
  it('值类型', () => {
    expect(cloneDeep(100)).toBe(100);
    expect(cloneDeep('abc')).toBe('abc');
    expect(cloneDeep(null)).toBe(null);
  });
  it('普通对象和数组', () => {
    const obj = {
      name: '双越',
      info: {
        city: '北京',
      },
      arr: [10, 20, 30],
    };
    const obj1 = cloneDeep(obj);
    obj.info.city = '上海';

    expect(obj1.info.city).toBe('北京');
    expect(obj1.arr).toEqual([10, 20, 30]);
  });
  it('Map', () => {
    const m1 = new Map([
      ['x', 10],
      ['y', 20],
    ]);
    const m2 = cloneDeep(m1);
    expect(m2.size).toBe(2);

    const obj = {
      map: new Map([
        ['x', 10],
        ['y', 20],
      ]),
    };
    const obj1 = cloneDeep(obj);
    expect(obj1.map.size).toBe(2);
  });
  it('Set', () => {
    const s1 = new Set([10, 20, 30]);
    const s2 = cloneDeep(s1);
    expect(s2.size).toBe(3);

    const obj = {
      s: new Set([10, 20, 30]),
    };
    const obj1 = cloneDeep(obj);
    expect(obj1.s.size).toBe(3);
  });
  it('循环引用', () => {
    const a: any = {};
    a.self = a;

    const b = cloneDeep(a);
    expect(b.self).toBe(b);
  });
});
```
