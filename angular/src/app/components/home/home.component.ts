import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Group } from 'src/app/models/group';
import { AdminService } from 'src/app/services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateGroupComponent } from '../update-group/update-group.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allGroupsButton: boolean = false;
    addGroupButton: boolean = false;
    addCompanyButton: boolean = false;
    allCompaniesButton: boolean = false;
    company: Company = new Company;
    group: Group = new Group;
    groupId: number;
    groupToUpdate: Group;
    allCompanies: Company[];
    displayedGroupColumns: string[] = ['coupon', 'company', 'country', 'amount', 'giude', 'driver', 'date', 'commission', 'update', 'delete'];
    displayedCompanyColumns: string[] = ['id', 'name', 'commission'];
    groupData = new MatTableDataSource<Group>();
    companyData = new MatTableDataSource<Company>();
    @ViewChild('groupForm') groupForm;
    @ViewChild('companyForm') companyForm;
    pageEvent: PageEvent;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private adminService: AdminService,
        public dialog: MatDialog) { }

    ngOnInit(): void { }

    getAllGroups() {
        this.allGroupsButton = true;
        this.addGroupButton = false;
        this.addCompanyButton = false;
        this.allCompaniesButton = false;
        this.adminService.getAllGroups().subscribe(groups => { this.groupData.data = groups as Group[]; this.groupData.paginator = this.paginator; this.groupData.sort = this.sort; },
            error => alert(error.message));
    }

    addGroup(): void {
        this.allGroupsButton = false;
        this.addGroupButton = true;
        this.addCompanyButton = false;
        this.allCompaniesButton = false;
    }

    saveGroup(group: Group) {
        this.group = group;
        this.adminService.addGroup(this.group)
            .subscribe((group) => {
                alert("Group added successfully");
                this.getAllGroups();
            },
                error => alert("Error: " + error.message)
            )
        this.groupForm.resetForm();        
    }

    deleteGroup(id: number) {
        console.log(id);
        this.adminService.removeGroup(id).subscribe(text => {
            alert("Group removed successfuly");
            this.getAllGroups();
        },
            error => alert(error.message)
        )
    }

    openUpdateGroupDialog(id: number) {
        const dialogConfig = new MatDialogConfig();
        this.dialog.afterAllClosed.subscribe(data=> this.getAllGroups()); 
        dialogConfig.data = {
            id: id,
        };
        const dialogRef = this.dialog.open(UpdateGroupComponent, dialogConfig);
    }

    openCompanyDetailsDialog(id : number){
        const dialogConfig = new MatDialogConfig();
        this.dialog.afterAllClosed.subscribe(data=> this.getAllCompanies()); 
        dialogConfig.data = {
            id: id,
        };
        dialogConfig.width = '950px';
        dialogConfig.height = '550px';
        
        const dialogRef = this.dialog.open(CompanyDetailsComponent, dialogConfig);
    }

    filterGroupTable(event: Event) {
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

    getAllCompanies() {
        this.allGroupsButton = false;
        this.addGroupButton = false;
        this.addCompanyButton = false;
        this.allCompaniesButton = true;
        this.adminService.getAllCompanies().subscribe(groups => { this.companyData.data = groups as Group[]; },
            error => alert(error.message));
    }

    addCompany() {
        this.allGroupsButton = false;
        this.addGroupButton = false;
        this.addCompanyButton = true;
        this.allCompaniesButton = false;
    }

    saveCompany(company: Company) {
        this.company = company;
        this.adminService.addCompany(this.company)
            .subscribe((company) => {
                alert("Company added successfully");
                error => alert("Error: " + error.message);
            })
        this.getAllCompanies();
        this.companyForm.resetForm();
    }

    deleteCompany(id: number) {
        this.adminService.removeCompany(id).subscribe(text => {
            alert("Company removed successfuly");
            this.getAllCompanies();
        },
            error => alert(error.message)
        )
    }

    filterCompanyTable(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.companyData.filter = filterValue.trim().toLowerCase();
    }

}
