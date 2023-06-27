import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      tel: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
