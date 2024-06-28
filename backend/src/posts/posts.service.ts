import { Injectable } from '@nestjs/common';
import { Post as PostEntity } from './post.entity';

@Injectable()
export class PostsService {
  private posts: PostEntity[] = [];

  findAll(): PostEntity[] {
    return this.posts;
  }

  findOne(id: number): PostEntity {
    return this.posts.find(post => post.id === id);
  }

  create(post: Partial<PostEntity>): PostEntity {
    const newPost = { ...post, id: Date.now() } as PostEntity;
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updateData: Partial<PostEntity>): PostEntity {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return null;
    }
    this.posts[postIndex] = { ...this.posts[postIndex], ...updateData };
    return this.posts[postIndex];
  }

  delete(id: number): boolean {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return false;
    }
    this.posts.splice(postIndex, 1);
    return true;
  }
}
