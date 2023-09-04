import { NotFoundException } from '@nestjs/common';
import { Document, FilterQuery, Model } from 'mongoose';

export abstract class AbstractRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findAll(entityFilterQuery: FilterQuery<T>): Promise<T[]> {
    return this.entityModel.find(entityFilterQuery);
  }

  async findOne(entityFilterQuery: FilterQuery<T>): Promise<T | null> {
    return this.entityModel.findOne(entityFilterQuery);
  }

  async findById(id: string): Promise<T> {
    const entity = await this.entityModel.findById(id);
    if (!entity) {
      throw new NotFoundException(`${this.entityModel.name} not found`);
    }
    return entity;
  }

  async create(createEntityData: unknown): Promise<T> {
    const entity = new this.entityModel(createEntityData);
    return entity;
  }

  async update(id: string, updateEntityData: unknown): Promise<T | null> {
    return this.entityModel.findByIdAndUpdate(id, updateEntityData, {
      new: true,
    });
  }

  async delete(id: string): Promise<T | null> {
    return this.entityModel.findByIdAndDelete(id);
  }
}
