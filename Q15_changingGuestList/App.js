"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//15. Changing Guest List: 
//You just heard that one of your guests can’t make the dinner, so you need to send out a new 
//set of invitations. You’ll have to think of someone else to invite.
//* Start with your program from Exercise 14. Add a print statement at the end of your program stating 
//the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//* Print a second set of invitation messages, one for each person who is still in your list.
let guestlist = ["alveena", "jaweria", "farooq"];
//map
//invite guest
let invitation = guestlist.map(guest => `Dear,${guest}! you are invited to dinner.`);
console.log(invitation);
//for each method work as loop work in function return element not new array
//print unable to come
let UnableAttend = guestlist.splice(1, 1)[0];
console.log(`${UnableAttend} not invited for dinner`);
//push
guestlist.push("Sara umer");
//print a message
guestlist.forEach(guest => {
    console.log(`Dear,${guest}! you are invited to dinner`);
});
