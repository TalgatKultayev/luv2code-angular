import {Coach} from "./Coach";

export class CricketCoach implements Coach {
    
    getDailyWorkout(): string {
        return "Swing you bat 50000 times";
    }

}