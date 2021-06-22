import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styleUrls: ['event-thumbnail.css']
})

export class ThumbNailContainer {
    // for now it's like it is 
    // Input decorator for recieving a data from another component
    @Input() event:any;

    logFoo() {
        console.log('Foo');
    }
}