import Vue from 'vue';
import { Component } from 'av-ts';

@Component
export default class TutorialComponent extends Vue {
    message: string = 'Hello Vue!';
    message2: string = 'You loaded this page on ' + new Date();
    seen: boolean = true;
    todos: Object[] = [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
    ];

    reverseMessage () {
            this.message = this.message.split('').reverse().join('')
    }
}

//Vue.component('todo-item', {
//    template: '<li>This is a todo</li>'
//    props: ['todo'],
//})

