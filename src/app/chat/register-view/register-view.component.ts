import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ChatService} from "../../services/chat/chat-service.service";
import {RegistrationService} from "../../services/registration/registration.service";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {
  chatRooms: string[] = []
  registrationFormGroup = this.fb.group({
    screenName: ['', Validators.required],
    chatRoom: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private chatService: ChatService, private registerService: RegistrationService) {
  }

  ngOnInit(): void {
    this.chatRooms = this.chatService.getChatRooms();
  }

  register() {
    this.registerService.register(this.registrationFormGroup.value);
  }
}
