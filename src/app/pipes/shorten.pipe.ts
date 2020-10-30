import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "shorten"
})
// export class ShortenPipe implements PipeTransform{
export class ShortenPipe {
    transform(value: string) {
        if (value && value.length > 12) {
            return value.substr(0, 12) + "...";
        }
        return value;
    }
}