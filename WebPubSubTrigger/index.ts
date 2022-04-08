import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const WebPubSubTrigger: AzureFunction = async function (context: Context, req: HttpRequest, data, pubSubOut): Promise<void> {
    context.log('HTTP trigger function processed a request.');

};

export default WebPubSubTrigger;