import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../services/chat/chat-service.service";
import {Chat} from "../models/chat.model";

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  message: string = "";
  selectedChatRoom: string = "";
  errorMessage: string = "";

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.message) {
      // TODO: Get registered screen name from registration service
      if (localStorage.getItem("SCREEN_NAME")) {
        this.errorMessage = "";
        const chat: Chat = {
          message: this.message,
          chatRoom: this.selectedChatRoom,
          screenName: "Default",
          timestamp: new Date()
        };
        this.chatService.sendMessage(chat);
      } else
        this.errorMessage = "Must have registered screen name to chat";
    } else
      this.errorMessage = "Message should not be empty";
  }

  onChatRoomChangeEvent(chatRoom: string) {
    this.selectedChatRoom = chatRoom;
  }

  hideError() {
    this.errorMessage = "";
  }
}
