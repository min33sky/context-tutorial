import { createContext, useContext, useMemo } from 'react';

type ItemGroupContextType = Omit<Props, 'children'>;

const ItemGroupContext = createContext<ItemGroupContextType>({
  activeId: 0,
  onSelect: () => {},
});

interface Props {
  children: React.ReactNode;
  activeId: number;
  onSelect: (id: number) => void;
}

export function ItemGroup({ activeId, children, onSelect }: Props) {
  const value = useMemo(
    () => ({
      activeId,
      onSelect,
    }),
    [activeId, onSelect],
  );

  return (
    <ItemGroupContext.Provider value={value}>
      {children}
    </ItemGroupContext.Provider>
  );
}

export function useItemGroup() {
  const value = useContext(ItemGroupContext);
  if (value === undefined) {
    throw new Error('useItemGroup must be used within a ItemGroupProvider');
  }
  return value;
}
