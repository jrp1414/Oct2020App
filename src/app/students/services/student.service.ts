import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, Student, students } from './stuent.data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = students;
  constructor(private http: HttpClient) {
    // let student:Student = new Student(1,"Amit","Kapoor","985898588","amit.k@gmail.com","email",
    // new Address(1,"Test","Test","Test","Test"));

  }

  public notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  private baseUrl: string = "http://localhost:44319/";

  setOptions(){
    let token = localStorage.getItem("token");
    let header:HttpHeaders = new HttpHeaders({
      "authorization": "Bearer "+token
    });
    let options:{[name:string]:HttpHeaders} = {headers:header};
    return options;
  }

  getStudents(): Observable<any> {
    // return this.http.get(this.baseUrl + "GetStudents");
    return this.http.get(this.baseUrl + "GetStudents",this.setOptions());
  }

  getStudentDetails(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "GetStudent/" + id,this.setOptions());
  }

  addStudent(student: Student): Observable<any> {
    return this.http.post(this.baseUrl + "AddStudent", student,this.setOptions());
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.baseUrl + "UpdateStudent", student,this.setOptions());
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(this.baseUrl + "DeleteStudent/" + studentId,this.setOptions());
  }


}
