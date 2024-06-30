import { describe, test, expect } from "vitest";
import { TreeNode } from "../src/tree/TreeNode";
import { CreateTree } from "./testHelpers";
import { compareNodesForEquality } from "./testHelpers";

describe("TreeNode", () => {
  test("Checking conversion of Tree->JSON and JSON->Tree are exact inverse functions", () => {
    // AAA
    // Arrange
    const tree = CreateTree();
    // Act
    const jsonTree = JSON.stringify(tree.toJSON());
    const treeAgain = TreeNode.fromJSON(JSON.parse(jsonTree));
    // Assert
    compareNodesForEquality(tree, treeAgain);
  });
});
