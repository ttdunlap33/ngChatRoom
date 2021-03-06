import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ConversationComponent } from './conversation/conversation.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
    declarations: [
        RegisterViewComponent,
        ChatViewComponent,
        ConversationComponent
    ],
  exports: [
    ChatViewComponent,
    RegisterViewComponent,
    ConversationComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatSelectModule,
        MatCardModule,
        MatGridListModule,
        ReactiveFormsModule
    ]
})
export class ChatModule { }
