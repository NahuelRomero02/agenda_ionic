import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-edite-work',
  templateUrl: './edite-work.page.html',
  styleUrls: ['./edite-work.page.scss'],
})
export class EditeWorkPage implements OnInit {

  modalCtrl = inject(ModalController)
  firebase = inject(FirebaseService)

  ngOnInit() {
    this.firebase.readHomework().subscribe(data=>{
      this.listaTareas=data.map(e=>{
        return{
          
          id:e.payload.doc.id,
          // id2:this.firebaseSvc.getId(),
          tareas:e.payload.doc.data()['tareas'],
          categoria:e.payload.doc.data()['categoria'],
          prioridad:e.payload.doc.data()['prioridad'],
          fecha:e.payload.doc.data()['fecha']
        }
      })
      console.log(this.listaTareas.length)
    })
  }
  categorias = ['Trabajo', 'Personal', 'Hogar']
  
  tareas: any
  categoria: any
  fecha: any
  prioridad: any
  
  categoriaNew: any
  listaTareas=[]
  
  tareaObjeto: any
  editTareaObjeto = {
    tareas: '',
    fecha: '',
    categoria: '',
    prioridad: ''
  }
  descartar() {
    return this.modalCtrl.dismiss(this.tareaObjeto)
  }
  
  saveChanges(editTareaObjeto: any) {
    // ===== Updata =====
    try {
      let id = '';
      console.log('categoria: ' + this.listaTareas)
      console.log(editTareaObjeto)
      this.firebase.updateHomework(editTareaObjeto,id);
      this.descartar();
    } catch (error) {
      console.log(error)
    }
  }

  categoriaSeleccionada(index: any) {
    this.editTareaObjeto.categoria = this.categorias[index]
  }

}
