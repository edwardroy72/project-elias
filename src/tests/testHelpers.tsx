import { TreeNode } from "../backend/tree/TreeNode";
import { expect } from "vitest";

export const CreateTree = () => {
  const rootNode = TreeNode.createRoot(
    "Root Node",
    "This is the root node of the tree."
  );

  const childNode1 = rootNode.createChild(
    "Child Node 1",
    "This is the first child node.",
    new Date(),
    "weekly",
    "medium"
  );

  const childNode2 = rootNode.createChild(
    "Child Node 2",
    "This is the second child node.",
    null,
    "monthly",
    "low"
  );

  const grandchildNode1 = childNode1.createChild(
    "Grandchild Node 1",
    "This is the first grandchild node.",
    new Date(),
    "daily",
    "high"
  );

  const grandchildNode2 = childNode1.createChild(
    "Grandchild Node 2",
    "This is the second grandchild node.",
    new Date(),
    "yearly",
    "medium"
  );

  return rootNode;
};

export const compareNodesForEquality = (node1: TreeNode, node2: TreeNode) => {
  expect(node1.nodeTitle).toBe(node2.nodeTitle);
  expect(node1.nodeId).toBe(node2.nodeId);
  expect(node1.description).toBe(node2.description);
  expect(node1.tags).toEqual(node2.tags);
  expect(node1.dueDate?.toISOString()).toBe(node2.dueDate?.toISOString());
  expect(node1.repeated_dueDate).toBe(node2.repeated_dueDate);
  expect(node1.priority).toBe(node2.priority);
  expect(node1.completed).toBe(node2.completed);
  expect(node1.children.length).toBe(node2.children.length);
  for (let i = 0; i < node1.children.length; i++) {
    compareNodesForEquality(node1.children[i], node2.children[i]);
  }
};
