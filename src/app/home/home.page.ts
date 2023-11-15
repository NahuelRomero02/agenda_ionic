import { Component, inject } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular'
import { AddHomeworkPage } from '../add-homework/add-homework.page';
import { FirebaseService } from '../services/firebase.service';
import { EditeWorkPage } from '../edite-work/edite-work.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaTareas = []
  date: number = Date.now()


  modalCtrl = inject(ModalController)
  firebaseSvc=inject(FirebaseService)

  ngOnInit() {
    this.firebaseSvc.readHomework().subscribe(data=>{
      this.listaTareas=data.map(e=>{

        return{
          id:e.payload.doc.id,
          tareas:e.payload.doc.data()['tareas'],
          categoria:e.payload.doc.data()['categoria'],
          prioridad:e.payload.doc.data()['prioridad'],
          fecha:e.payload.doc.data()['fecha']
        }
      })
      console.log(this.listaTareas)
      console.log(this.listaTareas.length)
    })

  }

  eliminar(id: any) {
    console.log('ID del documento a eliminar:', id);
    this.firebaseSvc.deleteHomework(id).then(() => {
      console.log('Documento eliminado exitosamente.');
    }).catch(error => {
      console.error('Error al eliminar el documento:', error);
    });
  }

  async add() {
    const modal = await this.modalCtrl.create({
      component: AddHomeworkPage
    });
  
    await modal.present();
    modal.onWillDismiss().then((newtareaObjeto) => {
      console.log(newtareaObjeto.data);
      console.log(newtareaObjeto)
      if (newtareaObjeto && newtareaObjeto.data) {
        this.listaTareas.push(newtareaObjeto);
      }
    });
  }

  dismissModal(data?:any){
    return this.modalCtrl.dismiss(data)
  }

  // ============ UPDATE ==============

  async update(id:number){
    const modal = await this.modalCtrl.create({
      component: EditeWorkPage
    });
    modal.present();

  }

  delete(index: any) {
    this.listaTareas.splice(index, 1)
   }

  
}

