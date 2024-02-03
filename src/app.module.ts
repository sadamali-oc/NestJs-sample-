import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz.module';
import { QuizController } from './modules/quiz.controller';

@Module({
 imports: [QuizModule],   //quiz module added
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
