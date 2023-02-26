import { AppDataSource } from "../../index";
import { Task } from "./tasks.entity";

export class TaskController {

  constructor (
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}

  public async getAll(): Promise<Task[]> {}
  
}