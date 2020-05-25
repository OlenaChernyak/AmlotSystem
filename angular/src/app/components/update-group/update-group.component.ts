import { Component, OnInit, Inject } from '@angular/core';
import { Group } from 'src/app/models/group';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
    selector: 'app-update-group',
    templateUrl: './update-group.component.html',
    styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent implements OnInit {
    group: Group = new Group();
    updatedGroup: Group;

    constructor(private dialogRef: MatDialogRef<UpdateGroupComponent>,
        private adminService: AdminService,
        @Inject(MAT_DIALOG_DATA) data) {
        this.group.id = data.id
    }

    ngOnInit() {
        this.adminService.getGroupById(this.group.id).subscribe(group => this.group = group);
    }
    save(group: Group) {
        this.adminService.updateGroup(this.group).subscribe(text => {
            alert("Group updated successfully.");            
        },
            err => alert("Error occured" + err.message))
        this.dialogRef.close();
    }

    onNoClick() {
        this.dialogRef.close();
    }

}