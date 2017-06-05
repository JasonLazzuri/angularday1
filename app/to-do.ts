class Task {
  done: boolean=false;
  constructor(
    public description: string,
    public priority: string
  ){}
}

var tasks: Task[]=[];
tasks.push(new Task('Description 1','High'));
tasks.push(new Task('Description 2','High'));

for(var task of tasks){
  console.log(task);
}
