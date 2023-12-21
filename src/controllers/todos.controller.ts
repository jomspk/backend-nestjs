import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common'
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm'

import { TodosService } from '@/services/todos.service'
import { TodosModel } from '@/models/todos.model'
import { CreateTodoInput } from '@/dto/create-todo.input'
import { UpdateTodoInput } from '@/dto/update-todo.input'

@Controller('todo')
export class TodosController {
  //Serviceを注入するために行っている
  constructor(private readonly todosService: TodosService) {}

  @Get()
  readAllTodos(): Promise<TodosModel[]> {
    return this.todosService.readAllTodos()
  }
  @Post()
  async createTodo(@Body() input: CreateTodoInput): Promise<InsertResult> {
    return this.todosService.createTodo(input)
  }
  @Put()
  async updateTodo(@Body() input: UpdateTodoInput): Promise<UpdateResult> {
    return this.todosService.updateTodo(input)
  }
  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<DeleteResult> {
    return this.todosService.deleteTodo(id)
  }
}
