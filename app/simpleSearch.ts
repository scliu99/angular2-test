import {Pipe} from "angular2/angular2";

@Pipe({
    name: 'simpleSearch',
    pure: false
})

export class SimpleSearch {
    transform(value, [field, letter]){
        console.log(value);
        return value.filter((todo)=>todo[field].includes(letter));
    }

}