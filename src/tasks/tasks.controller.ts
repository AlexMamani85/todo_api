import { AppDataSource } from "../../index";
import { Task } from "./tasks.entity";

export class TaskController {

  constructor (
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}
  
  // @ts-ignore
  public async getAll(): Promise<Task[]> {
    // Declaring a variable to hold all tasks
    let allTasks: Task[];

    // Fetching all tasks using the repository
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',  
        },
      });
      console.log(allTasks);
    } catch(errors) {
      console.log(errors);
    }
    

    // Converting thes tasks instance to an array of objects
    

  }
  
}