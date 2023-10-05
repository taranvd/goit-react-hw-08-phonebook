import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <ContactForm />
      <ContactFilter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
