import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../../interfaces/topic';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-topic-trends',
    templateUrl: './topic-trends.component.html',
    styleUrls: ['./topic-trends.component.scss'],
})
export class TopicTrendsComponent implements OnInit {
    @Input()
    public topics: Topic[] = [];
    form: FormGroup;
    subscription: Subscription;

    constructor(private formBuilder: FormBuilder,
                private modalCtrl: ModalController) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            checkboxes: this.formBuilder.array(this.topics.map(x => false)),
        });

        const checkboxControl = (this.form.controls.checkboxes as FormArray);

        this.subscription = checkboxControl.valueChanges.subscribe(checkbox => {
            checkboxControl.setValue(
                checkboxControl.value.map((value, i) => value ? this.topics[i].model : false),
                {emitEvent: false},
            );
        });
    }

    submit() {
        const checkboxControl = (this.form.controls.checkboxes as FormArray);
        const formValue = {
            ...this.form.value,
            checkboxes: checkboxControl.value.filter(value => !!value),
        };
        console.log(formValue);
        this.modalCtrl.dismiss(formValue.checkboxes);
    }
}
