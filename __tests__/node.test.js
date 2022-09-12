'use strict';

const Node = require('../Node');

describe('Node Module', () => {
    it('should create a new node', () => {
        let value = 'amani';
        let node = new Node(value);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual('amani');
        expect(node.next).toBeNull();
    });
});
    