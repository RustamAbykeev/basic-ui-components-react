import { useCounter } from '../hooks/useCounter';

export default function Component5() {
  console.log('Render5');
  const [counter] = useCounter();
  return (
    <div>
      <h4>Component 5 ({counter})</h4>
    </div>
  );
}
