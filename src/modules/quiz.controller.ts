import { Controller,Get } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {


    constructor(private quizService:QuizService){}
    @Get('/')

    getAllquiz(){
        return this.quizService.getAllQuiz();
    }
}
