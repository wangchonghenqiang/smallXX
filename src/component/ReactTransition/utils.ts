import { findDOMNode } from 'react-dom';
export function findDOM(
  node: React.ReactInstance | HTMLElement,
): Element | Text | null {
  if (node instanceof HTMLElement) {
    return node;
  }
  return findDOMNode(node);
}
