export class Todo {
    constructor(
      public id: number,
      public title: string) {
        console.log('Se ha creado la lista ' + title);
    }
}
