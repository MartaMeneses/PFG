import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  studentList : Student[] = [
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Bob Doe", id: "123456", FFgrade: 7, MSgrade: 7,STgrade:9, AAgrade: 5,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 5, MSgrade: 9,STgrade:5, AAgrade: 5,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 7, MSgrade: 9,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 7, MSgrade: 5,STgrade:5, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:9, AAgrade: 7,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 5, MSgrade: 7,STgrade:7, AAgrade: 7,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 7,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
  ]

  displayedColumns: string[] = ['name', 'id', 'classes'];
  dataSource = new MatTableDataSource<Student>(this.studentList);;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
