import { TreeNode } from './tree-node.model';

const _ = require('lodash');

export interface ITreeOptions {
  childrenField: string;
  displayField: string;
  idField: string;
  treeNodeTemplate: any;
  loadingComponent: any;
  getChildren(node:TreeNode): any;
}

export class TreeOptions {
  childrenField:string = 'children';
  displayField:string = 'name';
  idField:string = 'id';
  treeNodeTemplate: any = '{{ node.displayField }}';
  loadingComponent: any = 'loading...';
  getChildren = null;

  constructor(options = {}) {
    _.extend(this, options);
  }
}
