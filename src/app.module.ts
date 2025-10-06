import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './albums/albums.module';  
import { MusicModule } from './music/music.module';       

@Module({
  imports: [AlbumsModule, MusicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}