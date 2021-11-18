import Breadcrumbs from './components/Breadcrumbs';
import Component1 from './components/Component1';
import Popover from './components/popover/Popover';
import Accordion from './components/Accordion/Accordion';

function App() {
  console.log('Render0');
  const crumbs = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Apple',
      path: '/apple',
    },
    {
      name: 'iPads',
      path: '/apple/ipads',
    },
    {
      name: 'iPad Air 2021',
    },
  ];
  const accItems = [
    { title: 'Acc 1', text: 'Acc 1 text' },
    { title: 'Acc 2', text: 'Acc 2 text' },
    { title: 'Acc 3', text: 'Acc 3 text' },
    { title: 'Acc 4', text: 'Acc 4 text' },
  ];
  return (
    <>
      <h1>App</h1>
      <Component1 />
      <Breadcrumbs items={crumbs} />
      <Accordion items={accItems} />
      <Popover message="Popover text" btnText="Click me" position="top" />
      <Popover message="Popover text" btnText="Click me" position="bottom" />
      <Popover message="Popover text" btnText="Click me" position="left" />
      <Popover message="Popover text" btnText="Click me" position="right" />
    </>
  );
}

export default App;
