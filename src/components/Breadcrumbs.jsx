export default function Breadcrumbs({ items, separator }) {
  if (!items?.length > 0) {
    return <></>;
  }
  console.log(items);
  return (
    <ul className="breadcrumbs">
      {items.map((item, i) => (
        <li key={item.name}>
          {item.path && <a href={item.path}>{item.name}</a>}
          {!item.path && <>{item.name}</>}
          {i < items.length - 1 && <span>{separator || '/'}</span>}
        </li>
      ))}
    </ul>
  );
}
