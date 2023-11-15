import { Injectable, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebase = inject(AngularFirestore)


  async createHomework(homework: unknown) {
    
      return await this.firebase.collection('tareas').add(homework)
    } 
    
  
   readHomework() {
  
      return this.firebase.collection('tareas').snapshotChanges();
    } 
  

  deleteHomework(id: any) {
      return this.firebase.collection('tareas').doc(id).delete()
      // return  this.firebase.collection('tareas').doc(id).delete();
    } 

    getId(){
      return this.firebase.createId();
    }
    updateHomework(dato:any,id:any){
    return this.firebase.collection('tareas').doc(id).set(dato)
    }
  }
  

