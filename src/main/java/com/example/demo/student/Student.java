package com.example.demo.student;

import java.util.UUID;

public class Student {
    private final UUID studentId;
    private final String firstname;
    private final String lastname;
    private final String email;
    private final Gender gender;

    public Student(UUID studentId, String firstname, String lastname, String email, Gender gender) {
        this.studentId = studentId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.gender = gender;
    }

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    public enum Gender {
        MALE,FEMALE
    }




}
