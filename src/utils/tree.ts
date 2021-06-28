/*
 * const nodes = [
    {
      title: '触发节点',
      key: '0-0',
      className: 'skill-tree-node-wrap skill-tree-node-first',
      config: SKILLS_TREE_NODE_TYPES_MAP[1],
      data: [
        {
          label: '触发技能',
          content: '触发奶粉结块问题',
        },
        {
          label: '触发条件',
          content: '询问奶粉为什么结块',
        },
        {
          label: '触发询问',
          content: '请问您什么时候发现结块的？',
        },
        {
          label: '填槽回复',
          content: '亲知道，请稍等',
        },
      ],
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          className: 'skill-tree-node-wrap skill-tree-node-first',
          config: SKILLS_TREE_NODE_TYPES_MAP[4],
          data: [
            {
              label: '触发技能',
              content: '触发奶粉结块问题',
            },
            {
              label: '触发条件',
              content: '询问奶粉为什么结块',
            },
            {
              label: '触发询问',
              content: '请问您什么时候发现结块的？',
            },
            {
              label: '填槽回复',
              content: '亲知道，请稍等',
            },
          ],
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              className: 'skill-tree-node-wrap skill-tree-node-first',
              config: SKILLS_TREE_NODE_TYPES_MAP[4],
              data: [
                {
                  label: '触发技能',
                  content: '触发奶粉结块问题',
                },
                {
                  label: '触发条件',
                  content: '询问奶粉为什么结块',
                },
                {
                  label: '触发询问',
                  content: '请问您什么时候发现结块的？',
                },
                {
                  label: '填槽回复',
                  content: '亲知道，请稍等',
                },
              ],
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
              className: 'skill-tree-node-wrap',
              config: SKILLS_TREE_NODE_TYPES_MAP[4],
              data: [
                {
                  label: '触发技能',
                  content: '触发奶粉结块问题',
                },
                {
                  label: '触发条件',
                  content: '询问奶粉为什么结块',
                },
                {
                  label: '触发询问',
                  content: '请问您什么时候发现结块的？',
                },
                {
                  label: '填槽回复',
                  content: '亲知道，请稍等',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: '成功节点',
      key: '0-1',
      className: 'skill-tree-node-wrap skill-tree-node-wrap-success',
      config: SKILLS_TREE_NODE_TYPES_MAP[2],
      data: [
        {
          label: '成功结束',
          content: '成功结束奶粉结块问题',
        },
        {
          label: '结束条件',
          content: '流程完整结束，且用户不再继续询问时，机器人需要给出结束回复。',
        },
        {
          label: '结束响应',
          content: '感谢咨询！',
        },
      ],
    },
    {
      title: '异常节点',
      key: '0-2',
      className: 'skill-tree-node-wrap skill-tree-node-wrap-error',
      config: SKILLS_TREE_NODE_TYPES_MAP[3],
      data: [
        {
          label: '异常结束',
          content: '异常结束奶粉结块问题',
        },
        {
          label: '异常条件',
          content: '超过最大询问次数后，机器人仍未识别到后续意图，机器人需要给出异常提示话术。',
        },
        {
          label: '结束响应',
          content:
            '奶粉结块与开封时长和保质期都有关系，请注意开封时包装破损情况并在保质期内使用完毕。',
        },
      ],
    },
  ]
 */

import { Dropdown, Menu, message, Tooltip } from 'antd';
import React from 'react';
import { remove, forEach, find, filter } from 'lodash';

export const TREE_NODES = [];

export const TREE_NODES_MAP = [];

export const updateTreeChildren = (
  list: any,
  key: React.Key,
  children: any,
) => {
  return list.map((node: any) => {
    if (node.key === key) {
      const temp = {
        ...node,
        children,
      };
      temp.ext.child_node_count = temp.children.length;
      return temp;
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeChildren(node.children, key, children),
      };
    }
    return node;
  });
};

export const addTreeNode = (list: any, key: React.Key, node: any) => {
  return list.map((n: any) => {
    if (n.key === key) {
      const temp = { ...n };
      if (temp.children) {
        temp.children = [...temp.children, node];
      } else {
        temp.children = [node];
      }
      temp.ext.child_node_count = temp.children.length;
      return temp;
    }
    if (n.children) {
      return {
        ...n,
        children: addTreeNode(n.children, key, node),
      };
    }
    return n;
  });
};

export const updateTreeNode = (
  list: any,
  key: React.Key,
  node: any,
  data: any,
) => {
  return list.map((n: any) => {
    if (n.key === key) {
      const temp = { ...n };
      const keyArray = node.key.split('-');
      const index = keyArray.pop();
      if (node.children) {
        // @ts-ignore
        newData.children = node.children;
      }
      temp.children.splice(index, 1, node);
      return temp;
    }
    if (n.children) {
      return {
        ...n,
        children: updateTreeNode(n.children, key, node, data),
      };
    }
    return n;
  });
};

export const findTreeNode = (list: any, key: React.Key) => {
  let node = null;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const loopNode = (list: any, key: React.Key) => {
    // eslint-disable-next-line array-callback-return
    list.map((n: any) => {
      // console.log(n.ext.node_id, n.ext.node_id === key)
      // eslint-disable-next-line eqeqeq
      if (n.key == key) {
        node = n;
      } else if (n.children) {
        loopNode(n.children, key);
      }
    });
  };
  loopNode(list, key);
  return node;
};

export const findTreeNodeByNodeId = (list: any, nodeId: string) => {
  let node: any = null;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const loopNode = (list: any, nodeId: string) => {
    // eslint-disable-next-line array-callback-return
    list.map((n: any) => {
      // console.log(n.ext.node_id, n.ext.node_id === nodeId)
      if (n.ext && n.ext.node_id === nodeId) {
        node = n;
      } else if (n.children) {
        loopNode(n.children, nodeId);
      }
    });
  };
  loopNode(list, nodeId);
  return node;
};

export const formatTreeData = (list: any) => {
  // eslint-disable-next-line array-callback-return
  list.map((n: any) => {
    if (n.children) {
      // eslint-disable-next-line array-callback-return
      n.children.map((temp: any, index: number) => {
        temp.key = `${n.key}-${index}`;
        temp.className = `skill-tree-node-wrap ${
          index === 0 ? 'skill-tree-node-first' : ''
        }`;
      });
      formatTreeData(n.children);
    }
  });
};

export const findParentNode = (list: any, node: any) => {
  const ka = node.key.split('-');
  ka.pop();
  // eslint-disable-next-line no-case-declarations
  return findTreeNode(list, ka.join('-'));
};

export const formatStepArray = (
  steps: any[],
  data: { type: string; node: any; origin: any },
) => {
  if (data.type === 'edit') {
    if (
      steps &&
      !find(steps, n => {
        return n.node.key === data.node.key;
      })
    ) {
      steps.push({
        type: 'edit',
        node: data.origin,
        isUndo: true,
        isRedo: true,
      });
    }
    steps.push({
      type: data.type,
      node: data.node,
      isUndo: true,
      isRedo: true,
    });
  } else if (data.type === 'add') {
    steps.push({
      type: 'remove',
      node: data.node,
      isUndo: true,
    });
    steps.push({
      type: data.type,
      node: data.node,
      isRedo: true,
    });
  } else if (data.type === 'drag') {
    steps.push({
      type: 'drag',
      node: data.origin,
      isUndo: true,
      isRedo: false,
    });
    steps.push({
      type: data.type,
      node: data.node,
      isUndo: false,
      isRedo: true,
    });
  } else if (data.type === 'remove') {
    steps.push({
      type: 'add',
      node: data.node,
      isUndo: true,
    });
    steps.push({
      type: data.type,
      node: data.node,
      isRedo: true,
    });
  }
  return steps.slice(-8);
};
// eslint-disable-next-line consistent-return
export const loop = (
  data: string | any[],
  key: any,
  callback: {
    (item: any, index: any, arr: any): void;
    (item: any): void;
    (item: any): void;
    (item: any, index: any, arr: any): void;
    (arg0: any, arg1: number, arg2: any): any;
  },
  // eslint-disable-next-line consistent-return
) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].key === key) {
      return callback(data[i], i, data);
    }
    if (data[i].children) {
      loop(data[i].children, key, callback);
    }
  }
};
