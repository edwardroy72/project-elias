import { describe, test, expect } from "vitest";
import { TreeNode } from "../backend/tree/TreeNode";
import { CreateTree } from "./testHelpers"

describe("TreeNode", () => {
  test("Checking conversion of Tree->JSON and JSON->Tree are exact inverse functions", () => {
    // AAA
    // Arrange
    const tree = CreateTree();
    // Act
    const jsonTree = JSON.stringify(tree.toJSON());
    const treeAgain = TreeNode.fromJSON(JSON.parse(jsonTree));
    // Assert
    expect(tree).toEqual(treeAgain);
  });
});
