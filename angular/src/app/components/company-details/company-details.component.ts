import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Group } from 'src/app/models/group';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/models/company';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
    selector: 'app-company-details',
    templateUrl: './company-details.component.html',
    styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
    groups: Group;
    id: number;
    groupData = new MatTableDataSource<Group>();
    displayedGroupColumns: string[] = ['coupon', 'company', 'country', 'amount', 'giude', 'driver', 'date', 'commission'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private dialogRef: MatDialogRef<CompanyDetailsComponent>,
        private adminService: AdminService,
        @Inject(MAT_DIALOG_DATA) data) {
        this.id = data.id
    }

    ngOnInit() {
        this.adminService.getAllGroupsByCompanyId(this.id).subscribe(groups => { this.groupData.data = groups as Group[]; this.groupData.paginator = this.paginator; this.groupData.sort = this.sort; },
            error => alert(error.message));
    }

    onNoClick() {
        this.dialogRef.close();
    }

    filterTable(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.groupData.filter = filterValue.trim().toLowerCase();
    }

    printTable() {
        var divToPrint = document.getElementById("groupTable");
        const newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
    }

}