import Vue from 'vue';
import { Component } from 'av-ts';

@Component
export default class CounterComponent extends Vue {
    message: string = 'Hello Vue!';
    message2: string = 'You loaded this page on ' + new Date();
}