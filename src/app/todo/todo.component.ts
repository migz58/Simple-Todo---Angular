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
        {
            title: "Do some work",
            status: false
        }
    ];
    count: number = 0;

    constructor(
        private fb: FormBuilder,
    ) {
        this.toDoForm = this.fb.group({
            toDo: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.tickedItems();
     }

    tickedItems(){
        this.count = 0;
        for(var i = 0; i < this.toDoItems.length; i++){
            if(this.toDoItems[i].status === false){
                this.count++;
            }
        }
    }

    addItem() {
        const items = {
            title: this.toDoForm.value.toDo,
            status: false
        }
        this.toDoItems.push(items);
        this.toDoForm.reset();
        this.tickedItems();
    }

    onCheckChange(item){
        const index: number = this.toDoItems.indexOf(item);
        if (index !== -1) {
            this.toDoItems[index].status =  !this.toDoItems[index].status;
        }
        this.tickedItems();
    }

    deleteItem(item) {
        const index: number = this.toDoItems.indexOf(item);
        if (index !== -1) {
            this.toDoItems.splice(index, 1);
        }
        this.tickedItems();
    }
}
