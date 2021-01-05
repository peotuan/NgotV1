import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { LiveChatWidgetApiModel, LiveChatWidgetModel } from '@livechat/angular-widget';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isLiveChatWidgetLoaded = false;
  public liveChatApi: LiveChatWidgetApiModel;
  public visitor: { name: string; email: string };
  public params: { name: string; value: string }[];

  @ViewChild('liveChatWidget') liveChatWidget: LiveChatWidgetModel;
  liveChatWidget$: Subscription = new Subscription();
  public categoryItem = [
    { id: 1, name: 'Lót chuột' },
    { id: 2, name: 'Bình nước' },
    { id: 3, name: 'Áo thun' },
    { id: 4, name: 'Idol' },
    { id: 5, name: 'BT21' },
  ];

  constructor() {
    this.visitor = {
      name: 'John Doe',
      email: 'john@doe.com',
    };

    this.params = [
      { name: 'Login', value: 'joe_public' },
      { name: 'Account ID', value: 'ABCD1234' },
      { name: 'Total order value', value: '$123' },
    ];
  }

  title = 'NgotV1';

  ngOnInit(): void {
    // this.liveChatWidget$ = this.liveChatWidget.onChatLoaded.subscribe(
    //   (api: LiveChatWidgetApiModel) => (this.liveChatApi = api)
    // );
  }

  ngOnDestroy(): void {
    // this.liveChatWidget$.unsubscribe();
  }

  onChatLoaded(api: LiveChatWidgetApiModel): void {
    this.liveChatApi = api;
    this.isLiveChatWidgetLoaded = true;

    // tslint:disable-next-line:max-line-length
    // Sometimes it can happen that LC_Invite is is still being loaded when onChatLoaded is called. To ensure that LC_Invite is loaded you can give additional check to onChatLoaded function:
    // api.on_after_load = () => {
    //   this.liveChatApi = api;
    //   this.isLiveChatWidgetLoaded = true;
    // };
  }

  onChatWindowMinimized() {
    console.log('minimized');
  }

  onChatWindowOpened() {
    console.log('opened');
  }

  openChatWindow(): void {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.openChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.open_chat_window();
    }
  }

  hideChatWindow() {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.minimizeChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.minimize_chat_window();
    }
  }
}
