import {APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult, SQSEvent, SQSHandler} from 'aws-lambda';

export const handler: SQSHandler = async (event: SQSEvent): Promise<void> => {

    try {
        console.log(event);
    } catch (error) {
        throw error;
    }

}