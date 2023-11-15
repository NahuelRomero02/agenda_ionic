import { Component, OnInit, inject } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.page.html',
  styleUrls: ['./add-homework.page.scss'],
})
export class AddHomeworkPage implements OnInit {
  categorias = ['Trabajo', 'Personal', 'Hogar']

  nombreTarea2: any
  categoriaTarea2: any
  fechaTarea2: any
  prioridadTarea2: any

  tareaObjeto: any
  newtareaObjeto = {}
  // isModal!:false;

  modalCtrl = inject(ModalController)
  firebaseSvc = inject(FirebaseService)

  ngOnInit() {

  }
  createHomework() {
    let record = {};
    record['tareas'] = this.nombreTarea2?this.nombreTarea2:'-';
    record['categoria'] = this.categoriaTarea2?this.categoriaTarea2:'-';
    record['prioridad'] = this.prioridadTarea2?this.prioridadTarea2:'-';
    record['fecha']=this.fechaTarea2?this.fechaTarea2:'-';
    // console.log('R:')
    // console.log(record)

    this.firebaseSvc.createHomework(record).then(resp => {
      this.nombreTarea2=""
      this.nombreTarea2 = ""
      this.categoriaTarea2 = ""
      this.prioridadTarea2 = ""
      this.fechaTarea2=""
      // console.log('resp:')
      // console.log(resp)
    }).catch(error => {
      console.log(error)
    })
  }

  agregarTarea() {
  // console.log(this.tareaObjeto[1].nombreTarea)

  this.tareaObjeto = ({
    nombreTarea: this.nombreTarea2,
    fechaTarea: this.fechaTarea2,
    categoriaTarea: this.categoriaTarea2,
    prioridadTarea: this.prioridadTarea2
  })
  console.log('tareaObjeto')
  console.log(this.tareaObjeto)
    this.descartar()

  }

  descartar() {
    return this.modalCtrl.dismiss(this.tareaObjeto)
  }
  categoriaSeleccionada(index: any) {
    this.categoriaTarea2 = this.categorias[index]
  }


}
