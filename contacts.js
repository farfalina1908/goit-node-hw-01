const fs = require("fs/promises")
const path = require("path")
const nanoid = require("nanoid")

const contactsPath = path.join(__dirname, "./ db / contacts.json")

// TODO: задокументировать каждую функцию
function listContacts() {
   return
   // ...твой код. Возвращает массив контактов.
}

function getContactById(contactId) {
   if (contactId !== id) {
      return null
   }
   return { contactId }
   // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

function removeContact(contactId) {
   // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
   // ...твой код. Возвращает объект добавленного контакта.
}
module.export = {
   listContacts,
   getContactById,
   removeContact,
   addContact,
}
