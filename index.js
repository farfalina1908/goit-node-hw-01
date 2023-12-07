const { Command } = require("commander")
const contactsHandling = require("./contacts")

// contactsHandling.listContacts()
// contactsHandling.getContactById("qdggE76Jtbfd9eWJHrssH")
// contactsHandling.removeContact("vza2RIzNGIwutCVCs4mCL")
// contactsHandling.addContact("Elena", "farfalina@gmail.com", "+380504507923")

const program = new Command()
program
   .option("-a, --action <type>", "choose action")
   .option("-i, --id <type>", "user id")
   .option("-n, --name <type>", "user name")
   .option("-e, --email <type>", "user email")
   .option("-p, --phone <type>", "user phone")

program.parse(process.argv)

const argv = program.opts()

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
   switch (action) {
      case "list":
         const contacts = await contactsHandling.listContacts()
         console.table(contacts)
         break

      case "get":
         const contact = await contactsHandling.getContactById(id)
         if (!contact) {
            throw new Error(`Contact with ID ${id} is not found`)
         }
         console.table(contact)
         break

      case "add":
         const newContact = await contactsHandling.addContact(
            name,
            email,
            phone
         )
         console.table(newContact)
         break

      case "remove":
         const removeContact = await contactsHandling.removeContact(id)
         console.table(removeContact)
         break

      default:
         console.warn("\x1B[31m Unknown action type!")
   }
}

invokeAction(argv)
