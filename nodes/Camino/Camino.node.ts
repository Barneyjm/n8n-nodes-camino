import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { caminoOperations, caminoFields } from './CaminoDescription';

export class Camino implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Camino AI',
		name: 'camino',
		icon: 'fa:map-marker',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Guide your AI agents through the real world with location intelligence',
		defaults: {
			name: 'Camino AI',
		},
		inputs: ['main'],
		outputs: ['main'],
		usableAsTool: true,
		credentials: [
			{
				name: 'caminoApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.environment}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Search',
						value: 'search',
						description: 'Search for places using free-form or structured queries',
					},
					{
						name: 'Query',
						value: 'query',
						description: 'Natural language queries for points of interest',
					},
					{
						name: 'Spatial',
						value: 'spatial',
						description: 'Spatial relationships, context, and journey planning',
					},
					{
						name: 'Route',
						value: 'route',
						description: 'Get routes between locations',
					},
				],
				default: 'search',
			},
			...caminoOperations,
			...caminoFields,
		],
	};
}