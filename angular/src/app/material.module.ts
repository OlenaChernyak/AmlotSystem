import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [],
    imports: [
        CommonModule, 
        MatInputModule, 
        MatPaginatorModule, 
        MatDialogModule,  
        MatSortModule, 
        MatTableModule, 
        MatMenuModule, 
        MatSidenavModule,  
        MatIconModule, 
        MatButtonModule, 
        MatFormFieldModule, 
        MatToolbarModule
    ],
    exports: [
        MatInputModule, 
        MatSidenavModule, 
        MatPaginatorModule, 
        MatDialogModule, 
        MatSortModule, 
        MatTableModule, 
        MatMenuModule, 
        MatIconModule, 
        MatButtonModule, 
        MatFormFieldModule, 
        MatToolbarModule
    ]
})
export class MaterialModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterialModule,
            providers: []
        }
    }
}
