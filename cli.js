import { getTrendsRepositories } from './config/githubApiMethods.js';
import Repository from './models/Repository.js';
import connectToMongo from './config/mongoDatabase.js';

(async () => {
	await connectToMongo();
	const searchBy = process.argv[2];
	const param = process.argv[3];
	let repositories = [];
	switch (searchBy) {
		case '--id':
			repositories = await Repository.find({ id: param });
			console.log('----------------------');
			console.log('RESULT:')
			console.log(repositories);
			console.log('----------------------');
			console.log(`Repositories count: ${repositoriesByName.length}\n\n`);
			process.exit(0);
		case '--name':
			repositories = await Repository.find({ name: param });
			console.log('----------------------');
			console.log('RESULT:')
			console.log(repositories);
			console.log('----------------------');
			console.log(`Repositories count: ${repositoriesByName.length}\n\n`);
			process.exit(0);
		case '--all':
			repositories = await Repository.find({});
			console.log('----------------------');
			console.log('RESULT:')
			console.log(repositories);
			console.log('----------------------');
			process.exit(0);
		case '--delete':
			await Repository.deleteMany({})
			console.log('----------------------');
			console.log('Deleted all');
			console.log('----------------------');
			process.exit(0);
		case '--sync':
			repositories = await getTrendsRepositories();
			await Repository.create(repositories);
			console.log('----------------------');
			console.log('Created all');
			console.log('----------------------');
			process.exit(0);
		default:
			console.log("Undefined command");
			process.exit(0);
	}
})();
