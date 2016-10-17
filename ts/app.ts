import {Component} from '@angular/core';

//声明第一个component
@Component({
    selector: 'my-app',
    template: `
        <div id='wrap'>
            <div id='top'>
                <h1>My First Angular 2 Application</h1>
                <h1>{{title}}</h1>
                <h2>My favorite hero is: {{myHero}}</h2>
            </div>
        
            <div id='left'>
                <p>阿达啊阿达发阿达啊阿达阿达阿达发的阿达阿达阿达啊啊阿达打算啊打发</p>
            </div>
            <div id='right'>
                <p>阿达啊阿达发阿达啊阿达阿达阿达发的阿达阿达阿达啊啊阿达打算啊打发</p>
            </div>
           
            <div id='footer'>
                <p>声明声明声明声明声明</p>
            </div>
        </div>
    `
})
export class AppComponent {
    title = 'angular';
    myHero = 'hero';
 }