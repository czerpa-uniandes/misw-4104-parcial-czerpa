import { ComponentFixture,TestBed } from '@angular/core/testing';
import { VehicleComponent } from './vehicle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

fdescribe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule],
      declarations: [VehicleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
  });

  it('debería crear una tabla con 3 filas más el encabezado', () => {
    
    component.vehicles = [
      {
        id: 1,
        marca: "Renault",
        linea: "Kangoo",
        referencia: "VU Express",
        modelo: 2017,
        kilometraje: 93272,
        color: "Blanco",
        imagen: "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
    },
    {
        id: 2,
        marca: "Chevrolet",
        linea: "Spark",
        referencia: "Life",
        modelo: 2018,
        kilometraje: 55926,
        color: "Plata",
        imagen: "https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg"
    },
    {
        id: 3,
        marca: "Chevrolet",
        linea: "Sail",
        referencia: "LT Sedan",
        modelo: 2016,
        kilometraje: 94321,
        color: "Rojo",
        imagen: "https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png"
    },
    ];

    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    const headerRows = fixture.debugElement.queryAll(By.css('thead tr'));

    expect(tableRows.length).toBe(3);
    expect(headerRows.length).toBe(1);

    const firstRowCells = tableRows[0].nativeElement.querySelectorAll('td');
    expect(firstRowCells[1].textContent).toContain('Renault');
  });
});
