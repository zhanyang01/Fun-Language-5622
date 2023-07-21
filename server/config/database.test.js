const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const testSet = db.collection('testSet');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await testSet.insertOne(mockUser);

    const insertedUser = await testSet.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});