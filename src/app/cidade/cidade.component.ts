import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidade } from '../cidade';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrl: './cidade.component.css',
  standalone: false,
})
export class CidadeComponent {
  cidades: Cidade[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      estado: ['', Validators.required],
      populacao: [null, [Validators.required, Validators.min(1)]],
      area: [null, [Validators.required, Validators.min(1)]],
      descricao: ['', Validators.required],
    });
  }

  cadastrar() {
    if (this.form.invalid) return;
    this.cidades.push(this.form.value as Cidade);
    this.form.reset();
  }
}
