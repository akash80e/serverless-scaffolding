import { SQSEvent, SQSHandler } from 'aws-lambda'

export const handler: SQSHandler = async (event: SQSEvent): Promise<void> => {
    console.log(event.Records)
}
