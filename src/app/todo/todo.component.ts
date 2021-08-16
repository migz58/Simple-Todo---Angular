import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    toDoForm: FormGroup;
    toDoItems = [
        "Do some work"
    ]

    constructor(
        private fb: FormBuilder,
    ) {
        this.toDoForm = this.fb.group({
            toDo: ['', [Validators.required]],
        });
    }

    ngOnInit(): void { }

    addItem() {
        console.log(this.toDoForm.value.toDo);
        this.toDoItems.push(this.toDoForm.value.toDo)
        this.toDoForm.reset();
    }

    deleteItem(item) {
        const index: number = this.toDoItems.indexOf(item);
        if (index !== -1) {
            this.toDoItems.splice(index, 1);
        }
    }
}
