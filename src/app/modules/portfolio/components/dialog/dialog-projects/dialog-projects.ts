import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/Projects.interface';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle],
  templateUrl: './dialog-projects.html',
  styleUrl: './dialog-projects.scss'
})
export class DialogProjects implements OnInit {

  constructor(
     private _dialogRef: MatDialogRef<DialogProjects>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects) {}
  
  public getData = signal<IProjects | null>(null)
  
  
  ngOnInit(): void {
   this.getData.set(this._data)
  }

  public closeModal () {
    return this._dialogRef.close()
  }
}
