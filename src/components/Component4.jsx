import { useCounter } from '../hooks/useCounter';

export default function Component4() {
  console.log('Render4');
  const [, setCounter] = useCounter();
  return (
    <div>
      <h4 onClick={() => setCounter((p) => p + 1)}>Component 4</h4>
    </div>
  );
}
