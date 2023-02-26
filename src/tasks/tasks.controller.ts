import { AppDataSource } from "../../index";
import { Task } from "./tasks.entity";
import { instanceToPlain } from "class-transformer";

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

      // Converting thes tasks instance to an array of objects
      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    
    } catch(errors) {
      console.log(errors);
    }
    


    

  }
  
}