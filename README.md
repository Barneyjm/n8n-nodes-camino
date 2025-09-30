# n8n-nodes-camino

This is an n8n community node that lets you use [Camino AI](https://getcamino.ai) in your n8n workflows.

Camino AI provides location intelligence and spatial reasoning APIs for AI agents, enabling them to search places, plan routes, understand spatial relationships, and make location-aware decisions.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Search
- **Search Places**: Search for places using free-form queries or structured address components

### Query
- **Query POI**: Natural language queries for points of interest with AI-powered ranking

### Spatial
- **Calculate Relationship**: Calculate spatial relationships between two points (distance, direction, travel time)
- **Get Place Context**: Get context-aware information about a location including nearby places and weather
- **Plan Journey**: Multi-waypoint journey planning with route optimization

### Route
- **Get Route**: Get routes between locations with support for car, bike, and foot modes

## Credentials

To use this node, you need a Camino AI API key. You can get one by signing up at [getcamino.ai](https://getcamino.ai).

Configure your credentials with:
- **API Key**: Your Camino AI API key
- **Environment**: Choose between Production (api.getcamino.ai) or Development (app.getcamino.ai)

## Compatibility

- Minimum n8n version: 1.0.0
- Tested against n8n version: 1.113.3

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Camino AI Documentation](https://docs.getcamino.ai)
- [Camino AI Website](https://getcamino.ai)

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
