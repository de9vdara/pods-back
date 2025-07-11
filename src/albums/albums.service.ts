import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumsService {
  create(): string {
    return `This action adds a new album`;
  }

  findAll(): string {
    return `This action returns all albums`;
  }

  findOne(id: number): string {
    return `This action returns a #${id} album`;
  }

  update(id: number): string {
    return `This action updates a #${id} album`;
  }

  remove(id: number): string {
    return `This action removes a #${id} album`;
  }
}
