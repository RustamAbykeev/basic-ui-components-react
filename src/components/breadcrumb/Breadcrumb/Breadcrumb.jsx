import './Breadcrumb.css'


export default function Breadcrumbs({ items, separator }) {

    return (
      <>
        {items && items.length > 0 && (
          <ul className='breadcrumb'>
            {items.map((item) => (
                <>
              <li>{item}</li>
              <span>{separator}</span>
              </>
            ))}
          </ul>
        )}
      </>
    );
  }
  

