import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  info: any = {};
  isEditing = false;
  inputEditing: any;
  @ViewChild('password', {static: false}) password: ElementRef;
  passwordShown =  false;

  constructor(public alertController: AlertController,
              public navCtrl: NavController) {}

  showPassword(password) {
    if (password.type === 'text') {
      password.type = 'password';
    } else {
      password.type = 'text';
    }
  }

  handleInput(input: any) {
    console.log(input);
    input.disabled = true;
    this.isEditing = false;
  }

  save(form: NgForm) {
    if (form.invalid) { return; }

    console.log('Salvado compa');
  }

  async edit(input: any, sliding: any) {
    if (this.isEditing) {
      this.inputEditing.disabled = true;
    }
    input.disabled = false;
    this.isEditing = true;
    this.inputEditing = input;
    await sliding.close();
    setTimeout(() => {
      input.setFocus();
    }, 150);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
