import { INodeProperties } from 'n8n-workflow';

export const caminoOperations: INodeProperties[] = [
	// Search Operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['search'],
			},
		},
		options: [
			{
				name: 'Search Places',
				value: 'searchPlaces',
				description: 'Search for places using free-form or structured queries',
				action: 'Search for places',
				routing: {
					request: {
						method: 'POST',
						url: '/search',
					},
				},
			},
		],
		default: 'searchPlaces',
	},
	// Query Operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['query'],
			},
		},
		options: [
			{
				name: 'Query POI',
				value: 'queryPoi',
				description: 'Natural language query for points of interest',
				action: 'Query points of interest',
				routing: {
					request: {
						method: 'GET',
						url: '/query',
					},
				},
			},
		],
		default: 'queryPoi',
	},
	// Spatial Operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['spatial'],
			},
		},
		options: [
			{
				name: 'Calculate Relationship',
				value: 'relationship',
				description: 'Calculate spatial relationships between two points',
				action: 'Calculate spatial relationship',
				routing: {
					request: {
						method: 'POST',
						url: '/relationship',
					},
				},
			},
			{
				name: 'Get Place Context',
				value: 'context',
				description: 'Get context-aware information about a location',
				action: 'Get place context',
				routing: {
					request: {
						method: 'POST',
						url: '/context',
					},
				},
			},
			{
				name: 'Plan Journey',
				value: 'journey',
				description: 'Multi-waypoint journey planning with route optimization',
				action: 'Plan a journey',
				routing: {
					request: {
						method: 'POST',
						url: '/journey',
					},
				},
			},
		],
		default: 'relationship',
	},
	// Route Operations
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['route'],
			},
		},
		options: [
			{
				name: 'Get Route',
				value: 'getRoute',
				description: 'Get route from start to end point',
				action: 'Get a route',
				routing: {
					request: {
						method: 'GET',
						url: '/route',
					},
				},
			},
		],
		default: 'getRoute',
	},
];

// ===== Search Fields =====
const searchPlacesFields: INodeProperties[] = [
	{
		displayName: 'Search Type',
		name: 'searchType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
			},
		},
		options: [
			{
				name: 'Free-Form Query',
				value: 'freeform',
				description: 'Search using a free-form query string',
			},
			{
				name: 'Structured Address',
				value: 'structured',
				description: 'Search using structured address components',
			},
		],
		default: 'freeform',
		description: 'Type of search to perform',
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
				searchType: ['freeform'],
			},
		},
		default: '',
		required: true,
		description: 'Free-form search query (e.g., "Eiffel Tower")',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Amenity',
		name: 'amenity',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
				searchType: ['structured'],
			},
		},
		default: '',
		description: 'Name and/or type of POI (e.g., "restaurant", "Starbucks")',
		routing: {
			send: {
				type: 'query',
				property: 'amenity',
			},
		},
	},
	{
		displayName: 'Street',
		name: 'street',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
				searchType: ['structured'],
			},
		},
		default: '',
		description: 'Street name with optional house number (e.g., "123 Main Street")',
		routing: {
			send: {
				type: 'query',
				property: 'street',
			},
		},
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
				searchType: ['structured'],
			},
		},
		default: '',
		description: 'City name (e.g., "Paris", "New York")',
		routing: {
			send: {
				type: 'query',
				property: 'city',
			},
		},
	},
	{
		displayName: 'County',
		name: 'county',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
				searchType: ['structured'],
			},
		},
		default: '',
		description: 'County name',
		routing: {
			send: {
				type: 'query',
				property: 'county',
			},
		},
	},
	{
		displayName: 'State',
		name: 'state',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
				searchType: ['structured'],
			},
		},
		default: '',
		description: 'State or province name (e.g., "California", "Ontario")',
		routing: {
			send: {
				type: 'query',
				property: 'state',
			},
		},
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
				searchType: ['structured'],
			},
		},
		default: '',
		description: 'Country name (e.g., "France", "United States")',
		routing: {
			send: {
				type: 'query',
				property: 'country',
			},
		},
	},
	{
		displayName: 'Postal Code',
		name: 'postalcode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
				searchType: ['structured'],
			},
		},
		default: '',
		description: 'Postal/ZIP code (e.g., "10001", "75001")',
		routing: {
			send: {
				type: 'query',
				property: 'postalcode',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['searchPlaces'],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
];

// ===== Query Fields =====
const queryPoiFields: INodeProperties[] = [
	{
		displayName: 'Query Type',
		name: 'queryType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['query'],
				operation: ['queryPoi'],
			},
		},
		options: [
			{
				name: 'Natural Language Query',
				value: 'natural',
				description: 'Query using natural language',
			},
			{
				name: 'OSM IDs',
				value: 'osmIds',
				description: 'Query specific OSM elements by ID',
			},
		],
		default: 'natural',
		description: 'Type of query to perform',
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['query'],
				operation: ['queryPoi'],
				queryType: ['natural'],
			},
		},
		default: '',
		required: true,
		description: 'Natural language query, e.g., "coffee near me"',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Latitude',
		name: 'lat',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['query'],
				operation: ['queryPoi'],
				queryType: ['natural'],
			},
		},
		default: 0,
		description: 'Latitude for the center of your search',
		routing: {
			send: {
				type: 'query',
				property: 'lat',
			},
		},
	},
	{
		displayName: 'Longitude',
		name: 'lon',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['query'],
				operation: ['queryPoi'],
				queryType: ['natural'],
			},
		},
		default: 0,
		description: 'Longitude for the center of your search',
		routing: {
			send: {
				type: 'query',
				property: 'lon',
			},
		},
	},
	{
		displayName: 'Radius',
		name: 'radius',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['query'],
				operation: ['queryPoi'],
				queryType: ['natural'],
			},
		},
		default: 1000,
		description: 'Search radius in meters',
		routing: {
			send: {
				type: 'query',
				property: 'radius',
			},
		},
	},
	{
		displayName: 'OSM IDs',
		name: 'osmIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['query'],
				operation: ['queryPoi'],
				queryType: ['osmIds'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated OSM IDs (e.g., "node/123,way/456" or just "123456789")',
		routing: {
			send: {
				type: 'query',
				property: 'osm_ids',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['query'],
				operation: ['queryPoi'],
			},
		},
		options: [
			{
				displayName: 'Generate Answer',
				name: 'answer',
				type: 'boolean',
				default: false,
				description: 'Whether to generate a human-readable answer summary',
				routing: {
					send: {
						type: 'query',
						property: 'answer',
					},
				},
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
				routing: {
					send: {
						type: 'query',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				default: 0,
				description: 'Number of results to skip for pagination',
				routing: {
					send: {
						type: 'query',
						property: 'offset',
					},
				},
			},
			{
				displayName: 'Rank Results',
				name: 'rank',
				type: 'boolean',
				default: true,
				description: 'Whether to use AI to rank results by relevance',
				routing: {
					send: {
						type: 'query',
						property: 'rank',
					},
				},
			},
			{
				displayName: 'Time',
				name: 'time',
				type: 'string',
				default: '',
				description: 'Time parameter: "2020-01-01" (point), "2020.." (since), "2020..2024" (range)',
				routing: {
					send: {
						type: 'query',
						property: 'time',
					},
				},
			},
		],
	},
];

// ===== Spatial Relationship Fields =====
const relationshipFields: INodeProperties[] = [
	{
		displayName: 'Start Latitude',
		name: 'startLat',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['relationship'],
			},
		},
		default: 0,
		required: true,
		description: 'Starting point latitude',
		routing: {
			send: {
				type: 'body',
				property: 'start.lat',
			},
		},
	},
	{
		displayName: 'Start Longitude',
		name: 'startLon',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['relationship'],
			},
		},
		default: 0,
		required: true,
		description: 'Starting point longitude',
		routing: {
			send: {
				type: 'body',
				property: 'start.lon',
			},
		},
	},
	{
		displayName: 'End Latitude',
		name: 'endLat',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['relationship'],
			},
		},
		default: 0,
		required: true,
		description: 'Ending point latitude',
		routing: {
			send: {
				type: 'body',
				property: 'end.lat',
			},
		},
	},
	{
		displayName: 'End Longitude',
		name: 'endLon',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['relationship'],
			},
		},
		default: 0,
		required: true,
		description: 'Ending point longitude',
		routing: {
			send: {
				type: 'body',
				property: 'end.lon',
			},
		},
	},
	{
		displayName: 'Include',
		name: 'include',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['relationship'],
			},
		},
		options: [
			{
				name: 'Distance',
				value: 'distance',
			},
			{
				name: 'Direction',
				value: 'direction',
			},
			{
				name: 'Travel Time',
				value: 'travel_time',
			},
			{
				name: 'Description',
				value: 'description',
			},
		],
		default: ['distance', 'direction', 'travel_time', 'description'],
		description: 'Information to include in the response',
		routing: {
			send: {
				type: 'body',
				property: 'include',
			},
		},
	},
];

// ===== Place Context Fields =====
const contextFields: INodeProperties[] = [
	{
		displayName: 'Latitude',
		name: 'lat',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['context'],
			},
		},
		default: 0,
		required: true,
		description: 'Location latitude',
		routing: {
			send: {
				type: 'body',
				property: 'location.lat',
			},
		},
	},
	{
		displayName: 'Longitude',
		name: 'lon',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['context'],
			},
		},
		default: 0,
		required: true,
		description: 'Location longitude',
		routing: {
			send: {
				type: 'body',
				property: 'location.lon',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['context'],
			},
		},
		options: [
			{
				displayName: 'Context',
				name: 'context',
				type: 'string',
				default: '',
				description: 'Additional context for the query',
				routing: {
					send: {
						type: 'body',
						property: 'context',
					},
				},
			},
			{
				displayName: 'Include Weather',
				name: 'includeWeather',
				type: 'boolean',
				default: false,
				description: 'Whether to include current weather and forecast',
				routing: {
					send: {
						type: 'body',
						property: 'include_weather',
					},
				},
			},
			{
				displayName: 'Radius',
				name: 'radius',
				type: 'number',
				default: 500,
				description: 'Search radius in meters',
				routing: {
					send: {
						type: 'body',
						property: 'radius',
					},
				},
			},
			{
				displayName: 'Time',
				name: 'time',
				type: 'string',
				default: '',
				description: 'Time parameter: "2020-01-01" (point), "2020.." (since), "2020..2024" (range)',
				routing: {
					send: {
						type: 'body',
						property: 'time',
					},
				},
			},
			{
				displayName: 'Weather Forecast Type',
				name: 'weatherForecast',
				type: 'options',
				options: [
					{
						name: 'Daily',
						value: 'daily',
					},
					{
						name: 'Hourly',
						value: 'hourly',
					},
				],
				default: 'daily',
				description: 'Type of weather forecast',
				routing: {
					send: {
						type: 'body',
						property: 'weather_forecast',
					},
				},
			},
		],
	},
];

// ===== Journey Fields =====
const journeyFields: INodeProperties[] = [
	{
		displayName: 'Waypoints',
		name: 'waypoints',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['journey'],
			},
		},
		default: {},
		placeholder: 'Add Waypoint',
		description: 'Waypoints for the journey',
		options: [
			{
				name: 'waypoint',
				displayName: 'Waypoint',
				values: [
					{
						displayName: 'Latitude',
						name: 'lat',
						type: 'number',
						default: 0,
						required: true,
						description: 'Waypoint latitude',
					},
					{
						displayName: 'Longitude',
						name: 'lon',
						type: 'number',
						default: 0,
						required: true,
						description: 'Waypoint longitude',
					},
					{
						displayName: 'Purpose',
						name: 'purpose',
						type: 'string',
						default: '',
						required: true,
						description: 'Purpose of this waypoint',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'waypoints',
				value: '={{$parameter.waypoints.waypoint}}',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['spatial'],
				operation: ['journey'],
			},
		},
		options: [
			{
				displayName: 'Time Budget',
				name: 'timeBudget',
				type: 'string',
				default: '',
				description: 'Time budget for the journey',
				routing: {
					send: {
						type: 'body',
						property: 'constraints.time_budget',
					},
				},
			},
			{
				displayName: 'Transport Mode',
				name: 'transport',
				type: 'string',
				default: 'walking',
				description: 'Mode of transport',
				routing: {
					send: {
						type: 'body',
						property: 'constraints.transport',
					},
				},
			},
			{
				displayName: 'Preferences',
				name: 'preferences',
				type: 'string',
				default: '',
				description: 'Comma-separated list of preferences',
				routing: {
					send: {
						type: 'body',
						property: 'constraints.preferences',
						value: '={{$value.split(",").map(v => v.trim())}}',
					},
				},
			},
		],
	},
];

// ===== Route Fields =====
const routeFields: INodeProperties[] = [
	{
		displayName: 'Start Latitude',
		name: 'startLat',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['route'],
				operation: ['getRoute'],
			},
		},
		default: 0,
		required: true,
		routing: {
			send: {
				type: 'query',
				property: 'start_lat',
			},
		},
	},
	{
		displayName: 'Start Longitude',
		name: 'startLon',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['route'],
				operation: ['getRoute'],
			},
		},
		default: 0,
		required: true,
		routing: {
			send: {
				type: 'query',
				property: 'start_lon',
			},
		},
	},
	{
		displayName: 'End Latitude',
		name: 'endLat',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['route'],
				operation: ['getRoute'],
			},
		},
		default: 0,
		required: true,
		routing: {
			send: {
				type: 'query',
				property: 'end_lat',
			},
		},
	},
	{
		displayName: 'End Longitude',
		name: 'endLon',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['route'],
				operation: ['getRoute'],
			},
		},
		default: 0,
		required: true,
		routing: {
			send: {
				type: 'query',
				property: 'end_lon',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['route'],
				operation: ['getRoute'],
			},
		},
		options: [
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				options: [
					{
						name: 'Car',
						value: 'car',
					},
					{
						name: 'Bike',
						value: 'bike',
					},
					{
						name: 'Foot',
						value: 'foot',
					},
				],
				default: 'car',
				description: 'Mode of transport',
				routing: {
					send: {
						type: 'query',
						property: 'mode',
					},
				},
			},
			{
				displayName: 'Include Geometry',
				name: 'includeGeometry',
				type: 'boolean',
				default: false,
				description: 'Whether to include detailed route geometry for mapping',
				routing: {
					send: {
						type: 'query',
						property: 'include_geometry',
					},
				},
			},
		],
	},
];

export const caminoFields: INodeProperties[] = [
	...searchPlacesFields,
	...queryPoiFields,
	...relationshipFields,
	...contextFields,
	...journeyFields,
	...routeFields,
];