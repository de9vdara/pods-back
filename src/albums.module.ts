import { Module } from '@nestjs/common';
import { AlbumsService } from './albums/dto/albums.service';
import { AlbumsController } from './albums.controller';
import { MusicModule } from './music/music.module';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
  imports: [MusicModule],
})
export class AlbumsModule {}
