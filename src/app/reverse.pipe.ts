import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'reverse'
})
export class ReversePipe implements PipeTransform {

	transform(inVal: any): string {
		if(!inVal) { return null; }
		var str = inVal.toString().split("").reverse().join("");
		return str;
	}

}
