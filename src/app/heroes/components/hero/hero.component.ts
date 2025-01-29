import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age:  number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(name: string){
    this.name = name;
  }

  changeAge(age: number){
    this.age = age;
  }

  reset(): void{
    this.name = 'ironMan';
    this.age = 45;
  }

}
