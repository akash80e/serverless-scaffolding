import {
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult,
} from 'aws-lambda'
import { SQS } from 'aws-sdk'

export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    let result: any
    console.log(event)
    const queueUrl = 'http://localhost:9324/queue/MyFirstQueue'

    try {
        const sqs = new SQS()
        sqs.sendMessage({
            MessageBody: 'Hello',
            QueueUrl: queueUrl,
        })
        result = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'ok',
            }),
        }
        return result
    } catch (error) {
        result = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal server error',
            }),
        }
        return result
    }
}
