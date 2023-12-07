const fs = require("fs/promises")
const path = require("path")
const { nanoid } = require("nanoid")

const contactsPath = path.join(__dirname, "db", "contacts.json")


async function listContacts() {
   const data = await fs.readFile(contactsPath)
   const contacts = JSON.parse(data)
   return contacts

   // ...твой код. Возвращает массив контактов.
}

async function getContactById(contactId) {
   const contacts = await listContacts()
   const result = contacts.find((item) => contactId === item.id)
   if (!result) {
      return null
   }
   return { result }

   // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

async function removeContact(contactId) {
   const contacts = await listContacts()
   const idx = contacts.findIndex((item) => contactId === item.id)

   if (idx === -1) {
      return null
   }
   const newContacts = contacts.filter((_, index) => index !== idx)

   await fs.writeFile(contactsPath, JSON.stringify(newContacts))

   console.log(contacts[idx])

   return contacts[idx]
   // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

async function addContact(name, email, phone) {
   const contacts = await listContacts()
   const newContact = { id: nanoid(), name, email, phone }
   contacts.push(newContact)
   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

   console.log(newContact)

   return newContact
   // ...твой код. Возвращает объект добавленного контакта.
}
module.exports = {
   listContacts,
   getContactById,
   removeContact,
   addContact,
}
