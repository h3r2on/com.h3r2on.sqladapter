exports.definition = {
	config: {
		adapter: {
			type: 'sql_custom',

			collection_name: 'library',

			db_file: '/library.sqlite',

			idAttribute: 'id',

			no_icloud: true
		}
	}
}