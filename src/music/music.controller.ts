import { Controller, Get, Post, Body } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  getAllSongs() {
    return this.musicService.findAll();
  }

  @Post()
  addSong(@Body('name') name: string) {
    return this.musicService.addSong(name);
  }
}
