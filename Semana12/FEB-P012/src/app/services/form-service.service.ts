import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private usuario = {
    name: '',
    email: '',
    password: '',
    completeName: '',
    phoneNumber: '',
    address: '',
    birthDate: '',
    gender: '',
    profession: ''
  };

  constructor() { }

  setName(name: string) {
    this.usuario.name = name;
  }

  getName(): string {
    return this.usuario.name;
  }

  setEmail(email: string) {
    this.usuario.email = email;
  }

  getEmail(): string {
    return this.usuario.email;
  }

  setPassword(password: string) {
    this.usuario.password = password;
  }

  getPassword(): string {
    return this.usuario.password;
  }

  setCompleteName(completeName: string) {
    this.usuario.completeName = completeName;
  }

  getCompleteName(): string {
    return this.usuario.completeName;
  }

  setPhoneNumber(phoneNumber: string) {
    this.usuario.phoneNumber = phoneNumber;
  }

  getPhoneNumber(): string {
    return this.usuario.phoneNumber;
  }

  setAddress(address: string) {
    this.usuario.address = address;
  }

  getAddress(): string {
    return this.usuario.address;
  }

  setBirthDate(birthDate: string) {
    this.usuario.birthDate = birthDate;
  }

  getBirthDate(): string {
    return this.usuario.birthDate;
  }

  setGender(gender: string) {
    this.usuario.gender = gender;
  }

  getGender(): string {
    return this.usuario.gender;
  }

  setProfession(profession: string) {
    this.usuario.profession = profession;
  }

  getProfession(): string {
    return this.usuario.profession;
  }

  getUsuario() {
    return this.usuario;
  }
}
