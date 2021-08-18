import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Car } from './../car';
import { NgForm } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css'],
})
export class AdminComponentComponent implements OnInit {
  title = 'carmanagerapp';
  public cars: Car[] = [];
  public editCar: Car | undefined;
  public deleteCar!: Car;
  $router: any;
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getCars();
  }

  public getCars(): void {
    this.carService.getCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
        console.log(this.cars);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddCar(addForm: NgForm): void {
    document.getElementById('add-car-form')?.click();
    this.carService.addCar(addForm.value).subscribe(
      (response: Car) => {
        console.log(response);
        this.getCars();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCar(car: Car): void {
    this.carService.updateCar(car).subscribe(
      (response: Car) => {
        console.log(response);
        this.getCars();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCar(carId: number): void {
    this.carService.deleteCar(carId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCars();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCars(key: string): void {
    console.log(key);
    const results: Car[] = [];
    for (const car of this.cars) {
      if (
        car.brand.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        car.vehicleNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        car.color.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(car);
      }
    }
    this.cars = results;
    if (results.length === 0 || !key) {
      this.getCars();
    }
  }

  public onOpenModal(car: Car, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCarModal');
    }
    if (mode === 'edit') {
      this.editCar = car;
      button.setAttribute('data-target', '#updateCarModal');
    }
    if (mode === 'delete') {
      this.deleteCar = car;
      button.setAttribute('data-target', '#deleteCarModal');
    }

    container?.appendChild(button);
    button.click();
  }
}