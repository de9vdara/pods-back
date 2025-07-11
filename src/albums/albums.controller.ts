import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  create(): string {
    return this.albumsService.create();
  }

  @Get()
  findAll(): string {
    return this.albumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.albumsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string): string {
    return this.albumsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.albumsService.remove(+id);
  }
}
