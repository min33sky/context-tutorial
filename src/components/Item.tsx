import React, { CSSProperties } from 'react';
import { useItemGroup } from '../contexts/ItemGroupContext';

interface Props {
  children: React.ReactNode;
  id: number;
}

export default function Item({ id, children }: Props) {
  const activeStyle: CSSProperties = {
    backgroundColor: 'black',
    color: 'white',
  };

  const style: CSSProperties = {
    cursor: 'pointer',
    padding: '1rem',
  };

  const { activeId, onSelect } = useItemGroup();

  const active = activeId === id;
  const onClick = () => onSelect(id);

  return (
    <div
      style={active ? { ...style, ...activeStyle } : style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
