import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);

        const newContact = createFakeContact();
        contacts.push(newContact);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2, 'utf8'));
        console.log(`Successfully added one contact and saved tp ${PATH_DB}`);
    } catch (error) {
        console.error('Error adding one contact:', error);
    }
};

await addOneContact();