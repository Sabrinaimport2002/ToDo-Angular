import { Todo } from './models/todo.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-principal',
  templateUrl: './todo-principal.component.html',
  styleUrls: ['./todo-principal.component.css']
})
export class TodoPrincipalComponent implements OnInit {

  public todo: Todo [] = [];
  public form!: FormGroup;
  public mode = 'list';

  constructor(private fb: FormBuilder) {
    //para apenas uma validação
    /*this.form = this.fb.group({
      title: ['', Validators.required]
    });*/

    //para várias validações
    this.form = this.fb.group({
      title: ['', Validators.compose([
        //compondo o array de validações
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])]
    });

    this.load();
   }

  ngOnInit(): void {
  }

  add(){
    //recuperando/recebendo o valor
    const title = this.form.controls['title'].value;
    const id = this.todo.length +1;

    this.todo.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear(){
    this.form.reset();
  }

  remove(todo: Todo){
    const index = this.todo.indexOf(todo);
    if(index !== -1){
      this.todo.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo){
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();
  }

  changeMode(mode: string){
    this.mode = mode;
  }

  //para salvar no local storage
  save(){
    //converter o array para um json no formato string
    const data = JSON.stringify(this.todo);

    //salvando no local storage
    localStorage.setItem('todo', data);
  }

  //ler e popular as tarefas
  load(){
    //convertendo uma string para um Json
    this.todo = JSON.parse(localStorage.getItem('todo') || '{}');

    //obs: esse método deve ser chamado no construtor
  }


}
