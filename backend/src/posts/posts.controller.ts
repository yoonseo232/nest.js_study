import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostEntity[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): PostEntity {
    return this.postsService.findOne(id);
  }

  @Post()
  create(@Body() post: Partial<PostEntity>): PostEntity {
    return this.postsService.create(post);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<PostEntity>): PostEntity {
    return this.postsService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): boolean {
    return this.postsService.delete(id);
  }
}
