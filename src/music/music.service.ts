import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
  private songs: string[] = ['Song 1', 'Song 2'];

  findAll() {
    return this.songs;
  }

  addSong(song: string) {
    this.songs.push(song);
    return this.songs;
  }
}
