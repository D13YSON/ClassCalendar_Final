import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PerfilPage } from '../perfil/perfil.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }


  ngOnInit() {
  }

}
