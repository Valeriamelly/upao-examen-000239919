import { EspacioService } from './../../services/espacio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Espacio } from 'src/app/models/espacio';

@Component({
  selector: 'app-new-espacio',
  templateUrl: './new-espacio.component.html',
  styleUrls: ['./new-espacio.component.css']
})
export class AddEmployeeComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";
  id: string | null; //declaramos variable id

  constructor(
    private fb:FormBuilder,
    private espacioService:EspacioService,
    private router:Router,
    private snackBar:MatSnackBar,
    private aRoute: ActivatedRoute //declaramos clase 
  ) {this.id = this.aRoute.snapshot.paramMap.get('id') 
    console.log(this.id)
}
    //acceder al id
  ngOnInit(): void {
    this.myForm=this.fb.group({
      estacionamiento:['',[Validators.required, Validators.maxLength(70)]],
      piso:['',[Validators.required]],
      numero:['',[Validators.required, Validators.maxLength(5)]],
      estado:['',[Validators.required]],
    })
    
  }

  saveEmploye(){
    
    const espacio: Espacio={
      id:0,
      estacionamiento:this.myForm.get('estacionamiento')?.value,
      piso:this.myForm.get('piso')?.value,
      numero:this.myForm.get('numero')?.value,
      estado:this.myForm.get('estado')?.value,
    };

    this.espacioService.addEspacio(espacio)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['admin/espacios/new']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
}}
