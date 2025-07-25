import { IsString, IsArray } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  title: string;

  @IsString()
  releaseDate: string;

  @IsArray()
  @IsString({ each: true })
  musics: string[];

  @IsString()
  artistName: string;
}
