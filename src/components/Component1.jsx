import CounterProvider from '../context/CounterContext';
import Component2 from './Component2';
import Component3 from './Component3';

export default function Component1() {
  console.log('Render1');
  return (
    <div>
      <h2>Component 1</h2>
      <CounterProvider>
        <Component2 />
        <Component3 />
      </CounterProvider>
    </div>
  );
}
