import { useState } from 'react';
import './App.css';
import CounterButtons from './components/CounterButtons';
import CounterValue from './components/CounterValue';
import Item from './components/Item';
import { CounterProvider } from './contexts/counterContext';
import { ItemGroup } from './contexts/ItemGroupContext';

function App() {
  const [activeId, setActiveId] = useState(1);
  const [anotherActiveId, setAnotherActiveId] = useState(1557);

  return (
    <CounterProvider>
      <div aria-label="counter">
        <CounterValue />
        <CounterButtons />
      </div>

      <div aria-label="items">
        <ItemGroup activeId={activeId} onSelect={setActiveId}>
          <Item id={1}>1</Item>
          <Item id={2}>2</Item>
          <Item id={3}>3</Item>
        </ItemGroup>
        <hr />
        <ItemGroup activeId={anotherActiveId} onSelect={setAnotherActiveId}>
          <Item id={1557}>1557</Item>
          <Item id={1558}>1558</Item>
          <Item id={1559}>1559</Item>
        </ItemGroup>
      </div>
    </CounterProvider>
  );
}

export default App;
