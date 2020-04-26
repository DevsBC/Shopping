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
  slidingItem: any;
  passwordShown =  false;

  constructor(public alertController: AlertController) {}

  showPassword(password) {
    if (password.type === 'text') {
      password.type = 'password';
    } else {
      password.type = 'text';
      this.passwordShown = true;
    }
  }

  handleInput(input: any) {
    console.log(input);
    input.disabled = true;
    this.isEditing = false;
    if (this.passwordShown) {
      input.type = 'password';
      this.passwordShown = false;
    }
    this.slidingItem.close('end');
  }

  save(form: NgForm) {
    if (form.invalid) { return; }

    console.log('Salvado compa');
  }

  async edit(input: any, sliding: any) {
    if (this.isEditing) {
      this.inputEditing.disabled = true;
    }
    if (this.passwordShown) {
      this.inputEditing.type = 'password';
      this.passwordShown = false;
    }
    input.disabled = false;
    this.isEditing = true;
    this.inputEditing = input;
    this.slidingItem = sliding;
    await sliding.close().then(sliding.open('end'));
    setTimeout(() => {
      input.setFocus();
    }, 150);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Nueva direccion',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'address',
          type: 'text',
          placeholder: 'Calle, numero int/ext'
        },
        {
          name: 'zipcode',
          type: 'text',
          placeholder: 'Codigo postal'
        },
        // multiline input.
        {
          name: 'phone',
          type: 'number',
          placeholder: 'Numero de contacto'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
