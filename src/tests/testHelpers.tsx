import { TreeNode } from "../backend/tree/TreeNode";

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
    new Date(),
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
