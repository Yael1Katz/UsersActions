import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Action } from '../../models/action.model';
import { ActionsService } from '../../services/actions.service';


@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent implements OnInit {
  actionForm: FormGroup;
  // @Input() username: string = "";
  // @Input() value: number = 0;
  // @Input() message: string = "";
  //action: Action;
  constructor(private formBuilder: FormBuilder, private actionsService: ActionsService) {
    //this.action = new Action("", 0, "");
    //this.actionForm = this.createFormGroupWithBuilderAndModel(formBuilder);
  }

  ngOnInit() {
    this.initializeForm();
  }

  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group(new Action(), { validator: Validators.required });
  }

  addAction() {
    //const action: Action = Object.assign({}, this.actionForm.value);
    this.actionsService.addAction(this.actionForm.value);
    this.initializeForm();
  }

  initializeForm() {
    this.actionForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      value: new FormControl(0),
      message: new FormControl("", [Validators.required])
    });
  }

}
