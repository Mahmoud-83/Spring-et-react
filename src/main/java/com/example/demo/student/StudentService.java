package com.example.demo.student;

import org.springframework.stereotype.Service;

import  java.util.List;
import java.util.UUID;
@Service

public class StudentService {

    public List<Student> getAllSudents(){
        return  List.of(
                new Student(UUID.randomUUID(),"james","alo" ,"james@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(),"mira","amar" ,"mira@yahoo.com", Student.Gender.FEMALE)

        );
    }

}
