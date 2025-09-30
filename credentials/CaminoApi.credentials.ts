import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CaminoApi implements ICredentialType {
	name = 'caminoApi';
	displayName = 'Camino AI API';
	documentationUrl = 'https://docs.getcamino.ai';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
			description: 'Your Camino AI API key',
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{
					name: 'Production',
					value: 'https://api.getcamino.ai',
				},
				{
					name: 'Development',
					value: 'https://app.getcamino.ai',
				},
			],
			default: 'https://api.getcamino.ai',
			description: 'The Camino AI API environment to use',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.environment}}',
			url: '/search',
			method: 'POST',
			qs: {
				query: 'test',
				limit: 1,
			},
		},
	};
}