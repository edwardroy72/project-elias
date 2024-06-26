export class TreeNode {
  nodeTitle: string;
  nodeId: string;
  description: string;
  tags: string[]; // Also acts as a breadcrumb of the parent nodes
  dueDate: null | Date;
  repeated_dueDate: null | "daily" | "weekly" | "monthly" | "yearly";
  priority: null | "low" | "medium" | "high";
  completed: boolean;
  children: TreeNode[];

  constructor(
    nodeTitle: string,
    nodeId: string,
    description: string,
    tags: string[],
    dueDate: null | Date = null,
    repeated_dueDate: null | "daily" | "weekly" | "monthly" | "yearly" = null,
    priority: null | "low" | "medium" | "high" = null,
    completed: boolean = false,
    children: TreeNode[] = []
  ) {
    this.nodeTitle = nodeTitle;
    this.nodeId = nodeId;
    this.description = description;
    this.tags = tags;
    this.dueDate = dueDate;
    this.repeated_dueDate = repeated_dueDate;
    this.priority = priority;
    this.completed = completed;
    this.children = children;
  }

  static createRoot = (
    nodeTitle: string,
    description: string,
    dueDate: null | Date = null
  ) => {
    const nodeId = crypto.randomUUID();
    return new TreeNode(nodeTitle, nodeId, description, Array(nodeId), dueDate);
  };

  createChild = (
    nodeTitle: string,
    description: string,
    dueDate: null | Date,
    repeated_dueDate: null | "daily" | "weekly" | "monthly" | "yearly",
    priority: null | "low" | "medium" | "high"
  ) => {
    const nodeId = crypto.randomUUID();
    const newNode = new TreeNode(
      nodeTitle,
      nodeId,
      description,
      Array(...this.tags, nodeId),
      dueDate,
      repeated_dueDate,
      priority
    );
    this.children.push(newNode);
    return newNode;
  };

  static fromJSON(json: any): TreeNode {
    const node_children = json.node_children.map((child: any) =>
      TreeNode.fromJSON(child)
    );
    const node = new TreeNode(
      json.nodeTitle,
      json.nodeId,
      json.description,
      json.tags,
      json.dueDate ? new Date(json.dueDate) : null,
      json.repeated_dueDate,
      json.priority,
      json.completed,
      node_children
    );
    return node;
  }

  toJSON(): any {
    return {
      nodeTitle: this.nodeTitle,
      nodeId: this.nodeId,
      description: this.description,
      tags: this.tags,
      dueDate: this.dueDate ? this.dueDate.toISOString() : null,
      repeated_dueDate: this.repeated_dueDate,
      priority: this.priority,
      completed: this.completed,
      node_children: this.children.map((child) => child.toJSON()),
    };
  }
}
