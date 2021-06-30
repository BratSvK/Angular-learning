import { FormControl } from "@angular/forms";

 // fukncia co vracia funkciu 
 export function restrictedWords(words) {
    // vracia error a hlasku 
    return (control: FormControl): { [key: string] : any} => {
      if (!words) return null;

      // looking for array of words 
      var invalidWords = words.map(w => control.value.includes(w) ? w : null).filter(w => w != null)

      return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(',')} : null;
    }
  }