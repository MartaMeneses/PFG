import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignments } from '../../models/assignment';
import { Student } from '../../models/student';
import { DBService } from 'src/app/services/db.service';
import { MatPaginator } from '@angular/material/paginator';
import { Flag } from 'src/app/components/card-copy/card-copy.component';
import { CourseClass } from 'src/app/models/courseClass';
import { Observable } from 'rxjs';
import { StudentClass } from 'src/app/models/studentClass';
import { Feedback } from 'src/app/models/feedback';
import { Mediasite } from 'src/app/models/mediasite';
import { Criteria } from 'src/app/models/criteria';
import { Week } from 'src/app/models/week';
import { Attendance } from 'src/app/models/attendance';
import { Ultimate } from 'src/app/models/ultimate';
import { Course } from 'src/app/models/course';
import { LinkService } from 'src/app/services/link.service';
import { COURSE } from 'src/app/shared/global-var';

@Component({
  selector: 'app-course-class',
  templateUrl: './course-class.component.html',
  styleUrls: ['./course-class.component.css']
})
export class CourseClassComponent implements OnInit {

  @Input() course !: CourseClass;

  assignmentList$ !: Observable<Assignments[]>;
  courseClasses$ !: Observable<CourseClass[]>;
  courseName !: Course[];
  feedbacks !: Feedback[];
  Criterias !: Criteria[];
  mediaSites !: Mediasite[];
  attendances !: Attendance[];
  weeks !: Week[];
  assignments !: Assignments[];
  ultimates !: Ultimate[];

  studentList: Student[] = [];
  studentClassList: StudentClass[] = [];
  slug: string = "";

  avgAttendance: number = 0;

  gradeMS: number = 4;
  gradeFF: number = 8;
  gradeAA: number = 10;

  // Table vars
  displayedColumns: string[] = ['name', 'id', 'gradems', 'gradeff', 'gradeaa', 'gradestp'];
  dataSource !: any;
  dataSource$ !: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private dbService: DBService, private router: Router, private route: ActivatedRoute, private linkService : LinkService) { }

  ngOnInit(): void {
    this.getRoute();
    this.fetchAssignments();
    //this.fetchStudents();
    this.fetchCourseName();
    this.fetchCourseClasses();
    this.fetchUltimates();
  }
  
  fetchCourseClasses() {
    let route$ = this.route.params;
    route$.subscribe((route) => { this.slug = route['slug'] });
    this.courseClasses$ = this.dbService.getCourseClasses(this.slug);
  }

  fetchAssignments() {
    let route$ = this.route.params;
    route$.subscribe((route) => { this.slug = route['slug'] });
    this.assignmentList$ = this.dbService.getAssignments(this.slug);
  }


  fetchCourseName() {
    let route$ = this.route.params;
    route$.subscribe((route) => {
      this.slug = route['slug']
    });

    this.dbService.getCourseName(this.slug)
      .subscribe((result: Course[]) => {
        this.courseName = result;
        //this.calculateAverageGrade();
        this.linkService.currentPageName.next(this.courseName[0].courseName)
      });
  }

  fetchUltimates() {
    let route$ = this.route.params;
    route$.subscribe((route) => {
      this.slug = route['slug']
    });

    this.dbService.getUltimates(this.slug)
    .subscribe((result : Ultimate[]) => {
      this.ultimates = result;
      this.dataSource = new MatTableDataSource<Ultimate>(this.ultimates);
      this.dataSource.paginator = this.paginator;
      //this.calculateAverageGrade();
    });
  }

  fetchStudents() {
    let route$ = this.route.params;
    route$.subscribe((route) => { this.slug = route['slug'] });
    this.dbService
      .getStudentClasses(this.slug)
      .subscribe((result: Student[]) => {
        this.studentList = result;
        // Fill the table with data and prepare the paginator
        //this.dataSource = new MatTableDataSource<Student>(this.studentList);
        //this.dataSource.paginator = this.paginator;
        this.setFlag(this.gradeFF);
      });
  }

  /**
   * Calculates the presence for the all-tab
   */
  calculatePresence() {
    let actualPresence: number = 0;
    let maxPresence: number = 0;

    this.weeks.forEach(element => {
      actualPresence += element.weekPresence;
      maxPresence += element.weekPossiblePresence;
    });

    if (actualPresence === 0) {
      this.avgAttendance = 0;
    } else {
      this.avgAttendance = (actualPresence * 100) / maxPresence;
    }
  }

  getRoute() {
    // gets the current course by getting the slug (.../course/slugOfCourse)
    let route$ = this.route.params;
    route$.subscribe((route) => { this.slug = route['slug'] });
  }

  /**
   * gets triggered if a row is selected and
   * navigates to the profile of a specific student
   * @param student the selected student in the table
   */
  navigate(student: string) {
    this.router.navigate(['/profile', student]);
  }

  /**
   * Sets the flag by checking the parameters.
   * Changes icon and title depending on the result.
   * Therefore, it returns a flag, build with the fitting attributes.
   * TODO: Parameter Student or smth like that 
   */
  setFlag(grade: number): Flag {
    let generatedFlag: Flag;
    if (grade >= 8) {
      return generatedFlag = {
        colorFont: "text-amber-500",
        icon: "stars",
        title: "doing superb"
      }
    } else if (grade >= 6) {
      return generatedFlag = {
        colorFont: "text-thuas-groen-base",
        icon: "check_circle",
        title: "no worries"
      }
    } else if (grade > 0) {
      return generatedFlag = {
        colorFont: "text-thuas-rood-base",
        icon: "cancel",
        title: "in danger"
      }
    }
    return generatedFlag = {
      colorFont: "text-gray-500/80",
      icon: "help_outlined",
      title: "unknown"
    }
  }

  /**
   * Sets the flag by checking the parameters.
   * Changes icon and title depending on the result.
   * Therefore, it returns a flag, build with the fitting attributes.
   * TODO: Parameter Student or smth like that 
   */
  setFlagAttendance(attendance: number): Flag {
    let generatedFlag: Flag;
    if (attendance > 90) {
      return generatedFlag = {
        colorFont: "text-amber-500",
        icon: "stars",
        title: "doing superb"
      }
    } else if (attendance >= 50) {
      return generatedFlag = {
        colorFont: "text-thuas-groen-base",
        icon: "check_circle",
        title: "no worries"
      }
    } else if (attendance > 0) {
      return generatedFlag = {
        colorFont: "text-thuas-rood-base",
        icon: "cancel",
        title: "in danger"
      }
    }
    return generatedFlag = {
      colorFont: "text-thuas-grijs-base",
      icon: "help_outlined",
      title: "unknown"
    }
  }
}
