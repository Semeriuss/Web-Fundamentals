var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, maincat, subcat,description,premium,sum_assured, date',
	main_category: '++id,&name, date',
	sub_category: '++id,&name, maincat, date',
	pending_policies: 'uname,policy_name'
});

function addPolicy(title) {
	console.log('ADD POLICY');
	return db
		.transaction('rw', db.policies, function() {
			db.policies
				.add(title)
				.then((val) => {
					console.log('Worked..' + val);
					return true;
				})
				.catch((val) => {
					console.log('Some Error Happened' + val);
					return false;
				});
		})
		.catch(function(e) {
			console.log('ERROR \n\n');
			console.error(e.stack);
		});
}

// addPolicy({
// 	name: 'Policy V',
// 	maincat: 'Life-Insurance',
// 	subcat: 'Health',
// 	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
// addPolicy({
// 	name: 'Policy W',
// 	maincat: 'Property-Insurance',
// 	subcat: 'Motor',
// 	description: 'Illo quisquam perspiciatis velit necessitatibus ducimus natus',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
// addPolicy({
// 	name: 'Policy X',
// 	maincat: 'Fire-Insurance',
// 	subcat: 'Cycle',
// 	description: 'Itaque numquam omnis ut autem, modi culpa sapiente exercitationem',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
// addPolicy({
// 	name: 'Policy Y',
// 	maincat: 'Liability-Insurance',
// 	subcat: 'Travel',
// 	description: 'Omnis modi culpa sapiente veniam aperiam ratione assumenda!',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
// addPolicy({
// 	name: 'Policy Z',
// 	maincat: 'Guarantee-Insurance',
// 	subcat: 'Mobile',
// 	description: 'Sapiente exercitationem veniam aperiam ratione assumenda!',
// 	premium: '500',
// 	sum_assured: '20,000',
// 	date: new Date().toUTCString()
// });
