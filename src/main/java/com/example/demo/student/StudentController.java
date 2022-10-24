package com.example.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("Students")
public class StudentController {

    @GetMapping
   public List<Student> getAllStudent(){

       return List.of(
               new Student(UUID.randomUUID(),"james","alo" ,"james@gmail.com", Student.Gender.MALE),
               new Student(UUID.randomUUID(),"mira","amar" ,"mira@yahoo.com", Student.Gender.FEMALE)


       );

   }

}
