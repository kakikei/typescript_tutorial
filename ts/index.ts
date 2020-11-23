import UUID from 'uuid';
import { User } from "./User";

const user = new User('ごんざ', 'きよし', 44);

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
const submitButton = document.getElementById('submit') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
submitButton.onclick = (e) => {
  uuidSpan.innerText = UUID.v4();
}
