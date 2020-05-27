import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class CreateBooks implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into("book")
      .values([
        { title: 'Some title', description: 'Some description', isActive: true },
        { title: 'Another title', description: 'Anoyther description', isActive: true },
      ])
      .execute()
  }
}