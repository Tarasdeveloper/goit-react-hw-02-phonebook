const ContactList = ({ data, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {data.map(({ id, tel, name }) => {
          return (
            <li key={id}>
              {name}: {tel}
              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
