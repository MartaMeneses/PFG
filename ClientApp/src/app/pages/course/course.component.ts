import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/interfaces/assignment';
import { Course } from 'src/app/interfaces/course';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course !: Course;

  assignmentList : Assignment[] = [
    { name: "Mid-term Report", grade:9 },
    { name: "Research Report", grade: 7},
    { name: "Hand-In Homework", grade: 6 },
  ]

  studentList : Student[] = [
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Bob Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
  ]

  //displayedColumns: string[] = ['name', 'id', 'classes'];
  displayedColumns: string[] = ['name', 'id'];
  dataSource = new MatTableDataSource<Student>(this.studentList);;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }

}
