'use strict';

const LinkedList = require('../LL.js');

describe('Linked List Module', () => {
    it('Test creating a linked list', () =>{
        const ll = new LinkedList();
        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
    });
    it('Test prepending a node to the linked list', () => {
        const ll = new LinkedList();
        ll.prepend(1);
        ll.prepend(2);
        expect(ll.head.value).toEqual(2);
        expect(ll.head.next.value).toEqual(1);
        expect(ll.head.next.next).toBeNull();
    });
    it ('Test Append', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        expect(ll.head.value).toEqual(1);
        expect(ll.head.next.value).toEqual(2);
    });
    it ('Test Insert', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.insert(4, 1);
        expect(ll.head.value).toEqual(1);
        expect(ll.head.next.value).toEqual(4);
        expect(ll.head.next.next.value).toEqual(2);
        expect(ll.head.next.next.next.value).toEqual(3);
    });
    it ('Test Remove', () => {  
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.append(4);
        ll.removeFrom(2);
        expect(ll.head.value).toEqual(1);
        expect(ll.head.next.value).toEqual(2);
        expect(ll.head.next.next.value).toEqual(4);
    });
    it('Test Delete Middle', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.append(4);
        ll.append(5);
        ll.deleteMiddle();
        expect(ll.head.value).toEqual(1);
        expect(ll.head.next.value).toEqual(2);
        expect(ll.head.next.next.value).toEqual(4);
        expect(ll.head.next.next.next.value).toEqual(5);
    });
});